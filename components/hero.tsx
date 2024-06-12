"use client";

import { ChangeEvent, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import EmailSignup from "./emailsignup";

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
          <EmailSignup />
        </div>

       {/* Right Section: Lottie Animation */}
       <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2 p-6">
          <div className="relative w-[400px] h-[400px]">
            <Player
              autoplay
              loop
              src="/lion-animation.json"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
