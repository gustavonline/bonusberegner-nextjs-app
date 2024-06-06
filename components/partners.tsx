import React from "react";

const partners = [
  {
    id: 1,
    name: "NordicBet",
    image: "nordicbet.png",
    width: 150,
    height: 100,
  },
  {
    id: 2,
    name: "LeoVegas",
    image: "leovegas.png",
    width: 150,
    height: 100,
  },
  {
    id: 3,
    name: "ComeOn",
    image: "comeon.png",
    width: 150,
    height: 100,
  },
  {
    id: 4,
    name: "888Sport",
    image: "888sport.png",
    width: 150,
    height: 100,
  },
  {
    id: 5,
    name: "Unibet",
    image: "unibet.png",
    width: 150,
    height: 100,
  },
  {
    id: 6,
    name: "bet365",
    image: "bet365.png",
    width: 150,
    height: 100,
  },
];

const Partners = () => {
  return (
    <section className="bg-white py-4 mt-20 mb-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-16px text-center">
            <span className="text-paragraphgray font-bold">VORES SAMARBEJDSPARTNERE</span>
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="relative flex justify-center items-center p-2">
              <div className="absolute inset-0"></div>
              <img
                src={`/bookmakers_data/logos/${partner.image}`}
                alt={partner.name}
                style={{
                  width: `${partner.width}px`,
                  height: `${partner.height}px`,
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
                className="relative z-10 bg-lightgray opacity-65 rounded-lg shadow-lg hover:opacity-100 transition-opacity cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
