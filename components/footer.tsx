"use client";

import Image from "next/image";
import Link from "next/link";
import ResponsibleGambling from "./responsiblegambling";
import EmailSignup from "./emailsignup";

const Footer = () => {
  return (
    <footer className="bg-lightgrey text-stoneblack py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="flex flex-col items-start md:items-start text-sm">
            <div className="flex flex-col items-start gap-2 text-sm">
            <h2 className="font-bold mb-2">Links</h2>
              {["Generel viden", "Kontakt Os", "Privacy Policy"].map(
                (text, idx) => (
                  <Link
                    href={`/${text.toLowerCase().replace(/ /g, "")}`}
                    key={idx}
                    legacyBehavior
                  >
                    <a className="text-sm hover:underline">{text}</a>
                  </Link>
                )
              )}
            </div>
            <EmailSignup />
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex flex-col items-start md:items-end gap-2 text-sm">
              <h2 className="font-bold mb-2">Ansvarligt Spil</h2>
              <p>Vi opfordrer til ansvarligt spil</p>
              <p>Ring til StopSpillet på +45 7022 2825</p>
              <p>Udeluk dig på ROFUS</p>
            </div>
            <ResponsibleGambling />
          </div>
        </div>

        <div className="flex flex-col items-center mt-6 space-y-4">
          <div className="flex justify-center space-x-8">
            {["rofus", "stopspillet", "spillemyndighederne"].map((src, idx) => (
              <Image
                key={idx}
                src={`/${src}.svg`}
                alt={src.charAt(0).toUpperCase() + src.slice(1)}
                width={100}
                height={100}
              />
            ))}
          </div>
          <div className="text-center text-sm">
            &copy; 2024 Bonusberegner.dk. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
