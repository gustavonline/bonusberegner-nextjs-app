import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Bookmaker } from "./bookmakers";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ModalCalculator: React.FC<{
  selectedBookmakers: Bookmaker[];
  onRemoveBookmaker: (bookmaker: Bookmaker) => void;
  onResetBookmakers: () => void;
}> = ({ selectedBookmakers, onRemoveBookmaker, onResetBookmakers }) => {
  const totalDeposit = selectedBookmakers.reduce(
    (sum, bookmaker) => sum + parseInt(bookmaker.bonus_information.max_deposit),
    0
  );

  const totalBonus = selectedBookmakers.reduce(
    (sum, bookmaker) => sum + parseInt(bookmaker.bonus_information.max_deposit),
    0
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        <h1 className="font-bold mb-4 text-center tracking-wide">
          Bonus beregner:
        </h1>
        <p className="text-gray-700 mb-4 text-center">
          Med vores unikke beregner og ajourført data kan du nemt få et overblik
          over din samlede bonus og indsats. Følg disse enkle trin:
        </p>
        <ul className="list-decimal list-inside text-gray-700 space-y-2 w-full">
          <li className="flex items-start">
            <span className="text-bonusred mr-2 text-xl font-extrabold">
              01
            </span>
            <p>Scroll ned igennem listen over Danmarks bedste bookmakers.</p>
          </li>
          <li className="flex items-start">
            <span className="text-bonusred mr-2 text-xl font-extrabold">
              02
            </span>
            <div className="flex items-center">
              <p>Klik på plus</p>
              <PlusCircleIcon className="w-10 h-10 text-green-500 mx-2" />
              <p>over bookmakers logo for at tilføje bonus.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-bonusred mr-2 text-xl font-extrabold">
              03
            </span>
            <p>Se det samlede resultat nedenunder.</p>
          </li>
        </ul>
        <div className="mt-4 text-gray-700 w-full">
          <h2 className="text-lg font-bold mb-2">Bookmakers:</h2>
          <div className="flex flex-wrap justify-start gap-2">
            {selectedBookmakers.map((bookmaker, index) => (
              <div key={index} className="relative group">
                <a
                  href={bookmaker.affiliate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={bookmaker.logo_path}
                    alt={`${bookmaker.name} logo`}
                    className="h-10 w-auto rounded-lg border border-gray-200 cursor-pointer"
                  />
                </a>
                <button
                  onClick={() => onRemoveBookmaker(bookmaker)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 rounded-lg shadow-2xl">
        <p className="mb-2">
          <span className="font-bold">Samlede indsats:</span> {totalDeposit} kr
        </p>
        <p className="mb-2">
          <span className="font-bold">Samlede bonus:</span> {totalBonus} kr
        </p>
        <p className="mb-2">
          <span className="font-bold">Total at spille for:</span>{" "}
          {totalDeposit + totalBonus} kr
        </p>
        <button
          onClick={onResetBookmakers}
          className="mt-4 bg-bonusred text-white px-4 py-2 rounded hover:bg-darkbonusred w-full"
        >
          Nulstil beregner
        </button>
      </div>
    </div>
  );
};

export default ModalCalculator;