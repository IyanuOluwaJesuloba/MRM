"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  quick: [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Get Involved", href: "/getInvolved" },
    { label: "Give", href: "/give" },
  ],
  serviceTimes: ["Sunday: 9:00 AM", "Tuesday: 6:00 PM", "Thursday: 6:00 PM"],
  socials: ["Facebook", "Instagram", "YouTube"],
};

export function Footer() {
  return (
    <footer className="bg-[#001b27] text-white lg:pl-30">
      <motion.div
        className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 lg:px-16 grid gap-8 md:grid-cols-4 "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.55, ease: "easeOut" } },
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
          <Image src="/assests/svg/Icon Colored.png" alt="Mighty Refuge logo" width={56} height={56} />
          <p className="text-xl md:text-sm text-white/70">
            Mighty Refuge Ministries
            </p>
            <p className="text-sm text-white/70 ">
            Olumbe Bassir Drive, Ashi Bodija, Ibadan
          </p>
          <p className="text-sm text-white/70">
            +234 813 119 8600
            <br />
            mightyrefugemission@gmail.com
          </p>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerLinks.quick.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white hover:underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-lg font-semibold">Service Times</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerLinks.serviceTimes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {footerLinks.socials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        &copy; 2026 Mighty Refuge Ministries. All rights reserved. <br /> Privacy Policy | Terms of Use
      </div>
    </footer>
  );
}
