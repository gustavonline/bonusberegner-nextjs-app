export default function Announcebar() {
  return (
      <div className="relative w-full">
        <nav className="px-4 py-2">
          <div className="text-center mx-auto py-1">
            <p className="text-xs text-center tracking-tight">
              Bonusberegner.dk er en annonceside.{" "}
              <a href="#" className="text-blue-400 hover:text-blue-600">
                Sådan tjener vi penge
              </a>
            </p>
          </div>

          {/* Feature list, responsive centered in columns */}
          <div className="h-8 w-full mx-auto flex justify-between items-center mt-4 mb-4 md:mt-0 md:mb-0">
            <div className="w-full grid grid-cols-3 place-items-center gap-x-4">
              <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-1 space-y-1 md:space-y-0">
                <span role="img" aria-label="Check">✅</span>
                <span className="text-xs text-center tracking-tight">Nemt og hurtigt overblik</span>
              </div>
              <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-1 space-y-1 md:space-y-0">
                <span role="img" aria-label="Check">✅</span>
                <span className="text-xs text-center tracking-tight">Danmarks bedste sportsbonusser</span>
              </div>
              <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-1 space-y-1 md:space-y-0">
                <span role="img" aria-label="Check">✅</span>
                <span className="text-xs text-center tracking-tight">+1000 besøgende hver dag</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
};
