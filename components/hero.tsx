"use client";

import { ChangeEvent, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  CalculatorIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import animationData from '/Users/gustavanderson/Downloads/bonusberegner-app/public/sport-animation.json'; // Update with the actual path to your Lottie JSON file

export const Hero = () => {
  const [email, setEmail] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Implement subscription logic here
    alert(`Subscribed with: ${email}`);
  }

  return (
    <section className="mt-16">
      <div className="flex flex-col lg:flex-row items-center gap-32 mb-8 px-4 w-full max-w-6xl mx-auto">
        {/* Left Section: Email Sign-up */}
        <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
          <h1 className="text-[41px] sm:text-6xl max-w-4xl font-bold transition-all text-center tracking-tight leading-[50px] sm:leading-[60px]">
            <span>Danmarks Bedste </span>
            <span className="text-transparent bg-clip-text leading-12 bg-gradient-to-r from-bonusred to-bonusgold animate-gradient-x">
              Sports Betting{" "}
            </span>
            <span>Bonusser 2024!</span>
          </h1>
          <p className="text-center text-paragraphgray max-w-xl sm:text-l tracking-tight">
            Velkommen til Bonusberegner.dk - Danmarks førende bonusoversigt for
            sportsbetting. Vi hjælper dig med at finde de bedste bonusser og
            tilbud fra de danske bookmakere 🤩.
          </p>
          <div className="w-full max-w-md">
            <form action="#" onSubmit={handleSubmit}>
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
                    onChange={handleChange}
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
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                Vi tager beskyttelsen af dine data seriøst.{" "}
                <a
                  href="#"
                  className="font-medium text-bonusred hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>

       {/* Right Section: Lottie Animation */}
       <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2 p-6">
          <div className="w-[300px] h-[10px] rounded-lg bg-[#dcdcdc]"></div>
          <div className="relative w-[400px] h-[400px]">
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
