"use client";

import Image from "next/image";
import Link from "next/link";
import { MapIcon } from "@heroicons/react/24/outline";
import ResponsibleGambling from "./responsiblegambling";

const Footer = () => {
  return (
    <footer className="bg-lightgrey text-stoneblack py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="flex flex-col items-start space-y-2 md:space-y-4">
            {["Generel viden", "Kontakt Os", "Privacy Policy"].map((text, idx) => (
              <Link
                href={`/${text.toLowerCase().replace(/ /g, "")}`}
                key={idx}
                legacyBehavior
              >
                <a className="text-sm hover:underline">{text}</a>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start md:items-end text-sm">
            <h2 className="font-bold mb-2">Ansvarligt Spil</h2>
            <p>Vi opfordrer til ansvarligt spil</p>
            <p>Ring til StopSpillet på +45 7022 2825</p>
            <p>Udeluk dig på ROFUS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="md:w-full md:max-w-md">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full group">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <MapIcon
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 group-focus-within:text-bonusgold transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:outline-none focus:ring-bonusred focus:border-bonusred"
                    placeholder="Tilmeld dig vores nyhedsbrev"
                    type="email"
                    id="email"
                    required={true}
                    aria-label="Email address"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-bonusred border-bonusred sm:rounded-none sm:rounded-r-lg hover:bg-darkbonusred focus:ring-4 focus:ring-bonusred"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 dark:text-gray-300">
                Vi tager beskyttelsen af dine data seriøst.{" "}
                <a
                  href="#"
                  className="font-medium text-bonusred hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
            </form>
          </div>
          <div>
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
