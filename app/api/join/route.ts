import { NextResponse } from "next/server";

type JoinPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  interest?: string;
  message?: string;
};

export async function POST(req: Request) {
  let payload: JoinPayload;

  try {
    payload = (await req.json()) as JoinPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const fullName = payload.fullName?.trim() || "";
  const email = payload.email?.trim() || "";
  const phone = payload.phone?.trim() || "";

  if (!fullName || !email || !phone) {
    return NextResponse.json(
      {
        error: "Missing required fields: fullName, email, phone.",
      },
      { status: 400 }
    );
  }

  const submission = {
    fullName,
    email,
    phone,
    location: payload.location?.trim() || "",
    interest: payload.interest?.trim() || "",
    message: payload.message?.trim() || "",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (webhookUrl) {
    try {
      const targetUrl = new URL(webhookUrl);
      if (webhookSecret) {
        targetUrl.searchParams.set("secret", webhookSecret);
      }

      const response = await fetch(targetUrl.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        const bodyText = await response.text().catch(() => "");
        console.error("[join] webhook request failed", {
          status: response.status,
          statusText: response.statusText,
          bodyText,
        });

        return NextResponse.json(
          {
            error: "Submission received but could not be forwarded. Please try again.",
            ...(process.env.NODE_ENV !== "production"
              ? {
                  upstream: {
                    status: response.status,
                    statusText: response.statusText,
                    body: bodyText,
                  },
                }
              : null),
          },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err) {
      console.error("[join] webhook request error", err);
      return NextResponse.json(
        {
          error: "Submission received but could not be forwarded. Please try again.",
          ...(process.env.NODE_ENV !== "production"
            ? {
                upstream: {
                  error: err instanceof Error ? err.message : String(err),
                },
              }
            : null),
        },
        { status: 502 }
      );
    }
  }

  console.log("[join] submission (no webhook configured)", submission);

  return NextResponse.json(
    {
      ok: true,
      warning: "Webhook not configured on server. Submission was logged only.",
    },
    { status: 200 }
  );
}
