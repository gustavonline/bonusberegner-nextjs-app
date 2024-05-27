"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Anmeldelser",
    description: "Anmeldelser af bookmakers",
    href: "#",
    icon: BookmarkSquareIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="p-4">
      <nav
        className="mx-auto flex w-full items-center bg-lightgrey rounded-lg justify-between px-4 h-20"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Bonusberegner.dk</span>
            <img
              className="h-14 w-auto hover:opacity-50 transition:50"
              src="/bb-logo.svg"
              alt="small logo bonusberegber BB"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="pl-6 sm:block hidden">
            <button className="relative overflow-hidden bg-white button-move-glow text-bonusred font-medium rounded-lg transition-all before:absolute before:inset-0 before:bg-bonusred before:z-0 before:h-full before:w-0 before:transition-width before:duration-500 hover:before:w-full hover:text-white px-4 py-1 text-sm h-12">
              <span className="relative z-10">Sammenlign bonusser</span>
            </button>
          </div>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative" ref={dropdownRef}>
            <Popover.Button
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-paragraphgray-900 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              🧠 Bliv klogere på
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-paragraphgray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              show={dropdownOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-lightgrey"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-lightgrey group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-black group-hover:text-bonusred"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-paragraphgray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-paragraphgray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="#"
            className="text-sm font-semibold leading-6 text-paragraphgray-900"
          >
            🇩🇰 Bookmakers
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-paragraphgray-900"
          >
            🏆 Generel viden
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="relative overflow-hidden bg-white button-move-glow text-bonusred font-medium rounded-lg transition-all before:absolute before:inset-0 before:bg-bonusred before:z-0 before:h-full before:w-0 before:transition-width before:duration-500 hover:before:w-full hover:text-white px-4 py-1 text-sm h-12">
            <span className="relative z-10">Sammenlign bookmakers</span>
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-lightgrey px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Bonusberegner.dk</span>
              <img
                className="h-14 w-auto"
                src="/bb-logo.svg"
                alt="small logo bonusberegber BB"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-white">
                        🧠 Bliv klogere på
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-white"
                >
                  🇩🇰 Bookmakers
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-white"
                >
                  🏆 Generel viden
                </a>
              </div>
              <div className="py-6">
                <button className="relative overflow-hidden bg-white button-move-glow text-bonusred font-medium rounded-lg transition-all before:absolute before:inset-0 before:bg-bonusred before:z-0 before:h-full before:w-0 before:transition-width before:duration-500 hover:before:w-full hover:text-white px-4 py-1 text-sm h-12">
                  <span className="relative z-10">Sammenlign bookmakers</span>
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
