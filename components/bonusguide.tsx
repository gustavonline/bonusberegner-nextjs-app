import { LightBulbIcon, CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

const BonusGuide = () => {
  return (
    <div className="shadow border rounded-lg w-64">
      <div className="p-4">
        <h1 className="font-bold tracking-wide text-center mb-2">Bonus guiden:</h1>
        <p className="text-paragraphgray text-center text-sm mb-4">
          Lær hvordan du får mest ud af din bonus. Vi har samlet de bedste tips og tricks til dig, så du kan være sikker på at få en nem oprettelse hos de bedste danske bookmakers.
        </p>
        
        <div className="mb-4">
          <h2 className="font-semibold mb-2 flex items-center">
            <LightBulbIcon className="h-5 w-5 mr-2" /> Tips og Tricks
          </h2>
          <ul className="text-sm text-paragraphgray list-disc list-inside">
            <li className="mb-1">Læs altid betingelserne for bonusser.</li>
            <li className="mb-1">Sammenlign bonusser fra forskellige bookmakers.</li>
            <li className="mb-1">Udnyt velkomstbonusser til at maksimere din gevinst.</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h2 className="font-semibold mb-2 flex items-center">
            <CheckCircleIcon className="h-5 w-5 mr-2" /> Sådan gør du
          </h2>
          <ol className="text-sm text-paragraphgray list-decimal list-inside">
            <li className="mb-1">Vælg en bookmaker med en attraktiv bonus.</li>
            <li className="mb-1">Opret en konto og følg registreringsprocessen.</li>
            <li className="mb-1">Indtast eventuelle bonuskoder, hvis nødvendigt.</li>
            <li className="mb-1">Foretag din første indbetaling for at aktivere bonussen.</li>
          </ol>
        </div>
        
        <div>
          <h2 className="font-semibold mb-2 flex items-center">
            <InformationCircleIcon className="h-5 w-5 mr-2" /> Yderligere Information
          </h2>
          <p className="text-sm text-paragraphgray">
            Husk at holde øje med kampagner og tilbud, der kan give dig ekstra fordele. Tilmeld dig nyhedsbreve fra bookmakers for at være blandt de første, der får besked om nye bonusser.
          </p>
        </div>
        <button className="w-full h-9 text-xs rounded-lg text-white bg-bonusred hover:bg-darkbonusred mt-6">
            Lær mere
        </button>
        <p className="text-xs text-center text-paragraphgray">i vores "🧠 Bliv klogere på" sektion</p>
      </div>
    </div>
  );
};

export default BonusGuide;