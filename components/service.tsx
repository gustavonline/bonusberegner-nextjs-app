import { BiFootball } from "react-icons/bi";
import { HiUserAdd } from "react-icons/hi";
import { BsCashStack } from "react-icons/bs";

export const Service = () => {
  return (
    <>
      <section className="bg-white mt-40 w-full">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="service" className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Simpelt 3-trins forløb
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-xs leading-relaxed text-paragraphgrey">
              Du bliver guidet igennem det hele, så du skal bare følge instrukser
              step-by-step. Vi sender alle pengene, der skal spilles for, så du
              har intet at miste.
            </p>
          </div>
        </div>
      </section>

      <section className="flex bg-lightgrey w-full mt-8 py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="relative">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="/curveddottedline.svg"
                alt="Curved Dotted Line"
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12 px-4">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <HiUserAdd className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  1. Oprettelse
                </h3>
                <p className="mt-4 text-base text-paragraphgrey">
                  Du skal oprette dig på en række bettingsider med vores
                  oprettelsesguide. 👤
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <BiFootball className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  2. Spil
                </h3>
                <p className="mt-4 text-base text-paragraphgrey">
                  Spil 2-3 sportbets med vores step-by-step instrukser. ⚽
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <BsCashStack className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  3. Udbetal
                </h3>
                <p className="mt-4 text-base text-paragraphgrey">
                  Udbetal gevinsterne med vores overblik. Så er du færdig! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full mt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-col items-center sm:items-start w-full max-w-xs">
              <a
                href="https://m.me/bonusberegner.dk?ref=w26328979"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-lg text-white bg-bonusred rounded-lg hover:bg-darkbonusred transition-all duration-300"
              >
                START NU
              </a>
              <p className="text-xs text-paragraphgray text-center w-full mt-1">
                Messenger Onboarding
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
