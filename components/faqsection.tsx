'use client';

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Hvilken bookmaker skal jeg vælge?",
      answer: `Der er mange faktorer der spiller ind over hvilken bookmaker du skal vælge, i sidste ende er det selvfølgelig helt dit eget valg.

      Først, skal du kigge på designet og 'the feel' du får fra hjemmesiden, alle bookmakere udbyder som regel de samme casino spille maskiner og sportsbets, så det vigtigste er hvor godt du kan lide looket.
      
      Derefter, er det en god idé at sammenligne hvilke startbonusser de forskellige sider har og beslutte hvilken du helst vil starte med. Vi har samlet de allerbedste bookmakere og velkomstbonusser i en simpel og overskuelig sammenligning.`
    },
    {
      question: "Hvad betyder gennemspilningskrav?",
      answer: `De fleste bookmakere har særlige gennemspilningskrav på deres bonusser. Det er generelt et krav om hvor mane gange dine bonuspenge skal gennemspilles, før du kan udbetale dem.

      Hvis du f.eks. har fået en velkomstbonus som lyder 100% på føste indbetaling op til 1000kr. med gennemspilningskrav på 8x bonuspenge, og indbetaler 1000kr. Skal du spille for 8 x 1000kr. = 8000kr. før du kan udbetale dine penge.

      For at lære mere om de forskellige bookmakeres bonus gennemspilningskrav, anbefaler vi at du tjekker vores bonus sammenligning ud her.`
    },
    {
      question: "Hvordan indbetaler jeg til en bookmaker?",
      answer: `Så snart du er oprettet er det meget enkelt at indbetale penge, og komme igang med at spille. De flest bookmakere har disse indbetalingsmetoder:
      
      - Kreditkort
      - Bankoverførsel
      - MobilePay
      - Paysafecard
      - Skrill

      Du vælger selvfølgelig bare den metode du foretrækker, men husk at være opmærksom på hvilke metoder er gyldige til din ønskede velkomstbonus.`
    },
    {
      question: "Hvor lang tid tager en udbetaling?",
      answer: `Det kan variere fra få minutter til flere dage, alt efter hvilken udbetalingsmetode du gør brug af.

      Du skal huske at være opmærksom på om din konto er verificeret inden du forsøger at udbetale, hvis ikke kan det nemlig forlænge processen.`
    }
  ];

  return (
    <section className="bg-lightgrey">
      <div className="flex flex-col lg:flex-row items-center gap-32 px-4 w-full max-w-6xl mx-auto">
        <div className="w-full p-4 mb-8">
          <h1 className="font-bold tracking-wide text-center mb-4">Spørgsmål & svar: online sportsbetting</h1>
          <p className="text-center text-sm mb-4 text-paragraphgray">
            Vi har samlet de mest ofte stillede spørgsmål, så du kan starte din bettingkarriere med så meget medvind som muligt!
          </p>
          <p className="text-center text-sm mb-6 text-paragraphgray">
            Hvis du har flere spørgsmål er du altid velkommen til at sende en email til os på: <a href="mailto:hej@bonusberegner.dk" className="text-blue-500 underline">hej@bonusberegner.dk</a>
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
                  <div className="p-4 mt-2 bg-white border rounded-lg text-sm text-paragraphgray">
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

export default FAQSection;
