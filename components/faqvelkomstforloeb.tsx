'use client';

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const FAQVelkomstforloeb = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Er det sikkert at spille online?",
      answer: `Ja det er det, vi opretter og spiller kun på bettingsider med Dansk Spillelicens, dette betyder altså at den danske stat har godkendt og udstedt hjemmesiden licens til at være åben på det dansk marked.`
    },
    {
      question: "Hvor land tid tager jeres forløb?",
      answer: `Det tager ca. 5 dage fra du har oprettet dig til du har udbetalt dine gevinster. Alt i alt 2-4 timers arbejde online.`
    },
    {
      question: "Er det mine egne penge jeg spiller for?",
      answer: `Nej, vi sender alle pengene, der skal spilles for, så du har intet at miste.`
    },
    {
      question: "Hvordan bliver jeg affiliate?",
      answer: `Du kan blive affiliate ved at kontakte os på facebook, vi har løbende pladser åbne til vores affiliate program.`
    }
  ];

  return (
    <section className="bg-lightgrey">
      <div className="flex flex-col lg:flex-row items-center gap-32 px-4 w-full max-w-6xl mx-auto">
        <div className="w-full p-4 mb-8">
          <h1 className="font-bold tracking-wide text-center mb-4">Ofte stillede spørgsmål: Velkomstforløb</h1>
          <p className="text-center text-sm mb-4 text-paragraphgray">
            Vi har samlet de mest ofte stillede spørgsmål, så du hurtigt kan finde svar!
          </p>
          <p className="text-center text-sm mb-6 text-paragraphgray">
            Hvis du brænder inde med et spørgsmål angående vores velkomstforløb, så send os en besked på vores facebook side: <a href="https://www.facebook.com/bonusberegner.dk" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left bg-white rounded-lg focus:outline-none"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 mt-2 bg-white border rounded-lg text-sm text-black">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full mx-auto" />
    </section>
  );
};

export default FAQVelkomstforloeb;
