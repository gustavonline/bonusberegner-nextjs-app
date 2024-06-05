export default function Velkomstforloeb() {
  return (
<section className="mt-12">
      <div className="flex flex-col items-center gap-4 mb-8 px-4 w-full">
        <h1 className="text-[41px] sm:text-6xl max-w-4xl font-bold transition-all text-center tracking-tight leading-[50px] sm:leading-[60px]">
          <span>Start din </span>
          <span className="text-transparent bg-clip-text leading-12 bg-gradient-to-r from-bonusred to-bonusgold">
            online indkomst{" "}
          </span>
          <span>med ArbingLink i dag!</span>
        </h1>
        <p className="text-center text-paragraphgray max-w-xl sm:text-l tracking-tight">
          Gennemfør forløb, henvis venner og tjen mindst 1500 kr. online 🤩
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <a
            href="#_"
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-bonusred rounded-full sm:w-auto sm:mb-0 hover:bg-darkbonusred"
          >
            Opret dig nu
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#onboarding-image"
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-bonusred border rounded-full border-lightgrey border-2  sm:w-auto sm:mb-0 hover:bg-lightgrey"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        id="onboarding-image"
        className="w-full mx-auto mt-12 text-center md:w-10/12"
      >
        <div className="relative z-0 w-11/12 sm:w-full mx-auto mt-8">
          <div className="relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-center flex-none px-4 bg-lightgrey rounded-b-none h-11 rounded-xl"></div>
            {/* Image for small screens */}
            <img
              src="/hero-image-small.png"
              alt="onboarding example small"
              className="w-full block sm:hidden"
            />
            {/* Image for medium and up screens */}
            <img
              src="/hero-image-large.png"
              alt="onboarding example large"
              className="w-full hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}