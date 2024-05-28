"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import {
  CheckCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowRightIcon,
  GiftIcon,
  TagIcon,
  ExclamationCircleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import ModalCalculator from "./modalcalculator";
import BonusGuide from "./bonusguide";

export interface Bookmaker {
  name: string;
  offer: string;
  offer_type: string;
  bonus_rules: {
    minimum_odds: string;
    wagering_requirements: string;
    minimum_deposit: string;
    max_deposit: string;
    bonus_code: string;
    bonus_type: string;
    potential_win: string;
  };
  disclaimer: string;
  logo: string;
  link: string;
  rating: string;
  verified: boolean;
  contact_info: {
    email: string;
    live_chat: string;
    phone: string;
  };
  products: string[];
  live_streaming: string;
  license: {
    danish_license: boolean;
    license_year: number;
  };
  founded: number;
  overview: string;
  review: {
    title: string;
    introduction: string;
    freebet_offer: string;
    game_selection: string;
    security_measures: string;
    customer_service: string;
    special_features: string;
    conclusion: string;
    call_to_action: string[];
  };
  responsibility_disclaimer: string;
}

const getColorForOfferType = (offerType: string) => {
  const colorMapping: { [key: string]: string } = {
    Freebet: "bg-blue-500",
    "Matched Deposit": "bg-purple-500",
  };
  return colorMapping[offerType] || "bg-gray-500";
};

const Bookmakers: React.FC = () => {
  const [bookmakers, setBookmakers] = useState<Bookmaker[]>([]);
  const [filteredBookmakers, setFilteredBookmakers] = useState<Bookmaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredBookmakerIndex, setHoveredBookmakerIndex] = useState<
    number | null
  >(null);
  const [sortCriteria, setSortCriteria] = useState<string>("name");
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [selectedBookmakers, setSelectedBookmakers] = useState<Bookmaker[]>([]);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number | null>(
    null
  );
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalHovered, setModalHovered] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    ref: bookmakersRef,
    inView,
  } = useInView({ threshold: [0, 0.25, 0.5, 0.75, 1] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bookmakers_data/bookmakers_data.json");
        const data: Bookmaker[] = await response.json();
        setBookmakers(data);
        setFilteredBookmakers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the JSON data", error);
        setLoading(false);
      }
    };

    fetchData();

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1000);
    };

    if (typeof window !== "undefined") {
      setIsMobileView(window.innerWidth <= 1000);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredBookmakerIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredBookmakerIndex(null);
  };

  const handleToggleBookmaker = (bookmaker: Bookmaker) => {
    setSelectedBookmakers((prevSelected) => {
      if (prevSelected.includes(bookmaker)) {
        return prevSelected.filter((b) => b !== bookmaker);
      } else {
        return [...prevSelected, bookmaker];
      }
    });
  };

  const isBookmakerSelected = (bookmaker: Bookmaker) => {
    return selectedBookmakers.includes(bookmaker);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onRemoveBookmaker = (bookmaker: Bookmaker) => {
    setSelectedBookmakers((prevSelected) =>
      prevSelected.filter((b) => b !== bookmaker)
    );
  };

  const onResetBookmakers = () => {
    setSelectedBookmakers([]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".toggle-bookmaker-button")
      ) {
        setModalVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 lg:p-16 w-full flex flex-col md:flex-row relative">
      <div className="flex justify-center gap-4 flex-1">
        <div className="space-y-4 w-full" ref={bookmakersRef}>
          {filteredBookmakers.map((bookmaker, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row justify-center items-center">
              <div className="relative flex mr-4 mb-4 md:mb-0">
                <button
                  onClick={() => {
                    handleToggleBookmaker(bookmaker);
                  }}
                  onMouseEnter={() => setHoveredButtonIndex(index)}
                  onMouseLeave={() => setHoveredButtonIndex(null)}
                  className={`mb-2 flex text-xs toggle-bookmaker-button ${
                    isBookmakerSelected(bookmaker)
                      ? "text-bonusred"
                      : "text-green-500"
                  }`}
                >
                  {isBookmakerSelected(bookmaker) ? (
                    <>
                      <MinusCircleIcon className="w-10 h-10 hover:text-darkbonusred" />
                    </>
                  ) : (
                    <>
                      <PlusCircleIcon className="w-10 h-10 hover:text-green-600" />
                    </>
                  )}
                </button>
                {!isBookmakerSelected(bookmaker) &&
                  hoveredButtonIndex === index && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-stoneblack bg-opacity-80 text-white text-xs rounded-lg shadow-lg p-2">
                      Klik for at tilføje {bookmaker.name} til din beregning.
                    </div>
                  )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-auto gap-2 border p-4 bg-white shadow-md rounded-lg transition-shadow duration-200 w-full max-w-4xl">
                <div className="col-span-1">
                  <div className="flex flex-wrap space-x-2">
                    {bookmaker.offer_type && (
                      <div
                        className={`flex items-center p-2 mb-2 rounded-full shadow-md text-white ${getColorForOfferType(
                          bookmaker.offer_type
                        )}`}
                      >
                        <GiftIcon className="h-4 w-4 mr-1" />
                        <p className="text-[0.65em] font-medium ">
                          {bookmaker.offer_type}
                        </p>
                      </div>
                    )}
                    {bookmaker.bonus_rules.bonus_type && (
                      <div
                        className={`flex items-center p-2 mb-2 rounded-full shadow-md text-white ${getColorForOfferType(
                          bookmaker.bonus_rules.bonus_type
                        )}`}
                      >
                        <CheckIcon className="h-4 w-4 mr-1" />
                        <p className="text-[0.65em] font-medium ">
                          {bookmaker.bonus_rules.bonus_type}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex flex-wrap justify-end items-start space-x-2">
                    {bookmaker.bonus_rules.minimum_odds && (
                      <div className="flex items-center p-2 mb-2 rounded-full shadow-md text-white bg-blue-500">
                        <TagIcon className="h-4 w-4 mr-1" />
                        <p className="text-[0.65em] font-medium">
                          Min odds: {bookmaker.bonus_rules.minimum_odds}
                        </p>
                      </div>
                    )}
                    {bookmaker.bonus_rules.wagering_requirements && (
                      <div className="flex items-center p-2 mb-2 rounded-full shadow-md text-white bg-yellow-500">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                        <p className="text-[0.65em] font-medium">
                          {bookmaker.bonus_rules.wagering_requirements}
                        </p>
                      </div>
                    )}
                    {bookmaker.bonus_rules.potential_win && (
                      <div className="flex items-center p-2 mb-2 rounded-full shadow-md text-white bg-yellow-500">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                        <p className="text-[0.65em] font-medium">
                          {bookmaker.bonus_rules.potential_win}
                        </p>
                      </div>
                    )}
                    <div className="pl-12 flex flex-col items-end">
                      <p className="text-xs font-light">Bonus bedømmelse:</p>
                      <div className="flex justify-center items-center mb-2">
                        <StarIcon className="h-5 w-5 text-bonusgold mr-2" />
                        <p className="font-semibold">{bookmaker.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1 sm:col-span-2 md:col-span-3">
                  <div className="flex flex-col sm:flex-row items-center">
                    <img
                      src={bookmaker.logo}
                      alt={`${bookmaker.name} logo`}
                      className="h-24 w-auto rounded-lg border border-gray-200 mb-4 sm:mb-0"
                    />
                    <p className="text-xs ml-0 sm:ml-16 mr-0 sm:mr-16 text-center mb-4 sm:mb-0">
                      {bookmaker.disclaimer}
                    </p>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex justify-center p-2 mr-2 mb-2 w-32 rounded-full text-black border">
                        <p className="text-[0.45em]">
                          {bookmaker.bonus_rules.bonus_code}
                        </p>
                      </div>
                      <a
                        href={bookmaker.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-2 w-[12em] text-center flex items-center justify-center"
                      >
                        Gå til {bookmaker.name}
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </a>
                      <p className="text-xs font-medium">{bookmaker.offer}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  {bookmaker.verified && (
                    <div
                      className="relative flex items-center bg-lightgrey p-1 w-24 rounded-full shadow-sm cursor-pointer hover:bg-gray-200"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                      <p className="text-[0.65em] font-medium text-green-500 px-0.5 py-0.5">
                        Verificeret
                      </p>
                      {hoveredBookmakerIndex === index && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-stoneblack bg-opacity-80 text-white text-xs rounded-lg shadow-lg p-2">
                          Vi kontakter hver måned {bookmaker.name} for at få
                          deres vilkår og regler korrigeret. Bonus for dette
                          produkt er ajourført.
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
              </div>
            </div>
          ))}
        </div>
        {!isMobileView && (
          <div className="flex-none">
            <BonusGuide />
          </div>
        )}
      </div>
      {!modalVisible && (
        <div className={`fixed bottom-5 right-5 transition-opacity duration-500`} style={{ opacity: inView ? 1 : 0 }}>
          <button
            onClick={toggleModal}
            className="bg-bonusred text-white p-4 rounded-lg shadow-lg hover:bg-darkbonusred"
          >
            Åbn bonus beregner
          </button>
        </div>
      )}
      {modalVisible && (
        <div
          className={`fixed bottom-5 right-5 w-[25rem] h-[25rem] bg-white border shadow-lg rounded-lg flex flex-col p-4 ${
            modalHovered ? "opacity-100" : "opacity-50"
          }`}
          ref={modalRef}
          onMouseEnter={() => setModalHovered(true)}
          onMouseLeave={() => setModalHovered(false)}
        >
          <div className="flex flex-col bg-lightgrey h-full rounded-lg p-">
            <div className="flex-grow overflow-y-auto">
              <ModalCalculator
                selectedBookmakers={selectedBookmakers}
                onRemoveBookmaker={onRemoveBookmaker}
                onResetBookmakers={onResetBookmakers}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmakers;
