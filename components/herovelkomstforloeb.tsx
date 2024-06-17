"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function HeroVelkomstforloeb() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000); // confetti lasts for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {showConfetti && (
        <div className="fixed inset-0 z-50 w-full h-full">
          <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            numberOfPieces={600}
            recycle={false}
          />
        </div>
      )}
      <section className="mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-8 px-4 w-full max-w-6xl mx-auto">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[41px] sm:text-6xl max-w-4xl font-bold transition-all tracking-tight leading-[50px] sm:leading-[60px]">
              <span>Opdag vores</span>
              <span className="block text-transparent bg-clip-text leading-12 bg-gradient-to-r from-bonusred to-bonusgold">
                sportsbetting velkomstforløb!{" "}
              </span>
              <span>tjen garanteret op til 1500 kr. 🤩</span>
            </h1>
            <p className="text-paragraphgray max-w-xl sm:text-l tracking-tight">
              Bliv en del af vores unikke affiliate program: henvis venner/familie og tjen yderligere 500 kr. for hver, der gennemfører velkomstforløbet. <br />
              Begrænset pladser – tilmeld dig nu! 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
              <div className="flex flex-col items-center sm:items-start w-full max-w-xs">
                <a
                  href="https://m.me/arbing.dk?ref=w25912129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-lg text-white bg-bonusred rounded-lg hover:bg-darkbonusred transition-all duration-300 font-medium"
                >
                  START NU
                </a>
                <p className="text-xs text-paragraphgray text-center w-full mt-1">
                  Messenger Onboarding
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start w-full max-w-xs">
                <a
                  href="#service"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-lg text-bonusred border rounded-lg border-lightgrey border-2 hover:bg-lightgrey transition-all duration-300"
                >
                  Læs mere..
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </a>
                <p className="text-xs text-gray-500 text-center w-full">&nbsp;</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2 p-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full mx-auto mt-8"
            >
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-center flex-none px-4 bg-lightgrey rounded-b-none h-11 rounded-xl"></div>
                <img
                  src="/trustpilot-review-1.png"
                  alt="review 1"
                  className="w-full"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full mx-auto mt-8"
            >
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-center flex-none px-4 bg-lightgrey rounded-b-none h-11 rounded-xl"></div>
                <img
                  src="/trustpilot-review-2.png"
                  alt="review 2"
                  className="w-full"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full mx-auto mt-8"
            >
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-center flex-none px-4 bg-lightgrey rounded-b-none h-11 rounded-xl"></div>
                <img
                  src="/trustpilot-review-3.png"
                  alt="review 3"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
