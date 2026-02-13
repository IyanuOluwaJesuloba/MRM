import Image from "next/image";

const footerLinks = {
  quick: ["About Us", "Services", "Ministries", "Events", "Contact"],
  serviceTimes: ["Sunday: 9:00 AM", "Tuesday: 6:00 PM", "Thursday: 6:00 PM"],
  socials: ["Facebook", "Instagram", "YouTube"],
};

export function Footer() {
  return (
    <footer className="bg-[#001b27] text-white">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <Image src="/Icon Colored.png" alt="Mighty Refuge logo" width={56} height={56} />
          <p className="text-sm text-white/70">
            Mighty Refuge Ministries
            <br />
            Olumbe Bassir Drive, Ashi Bodija, Ibadan
          </p>
          <p className="text-sm text-white/70">
            +234 813 119 8600
            <br />
            mightyrefugemission@gmail.com
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerLinks.quick.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Service Times</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerLinks.serviceTimes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerLinks.socials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        &copy; 2026 Mighty Refuge Ministries. All rights reserved. | Privacy Policy | Terms of Use
      </div>
    </footer>
  );
}
