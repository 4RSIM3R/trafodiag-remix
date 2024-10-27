"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { ChevronDownIcon, GlobeIcon, PhoneIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('header.home'), href: "/" },
    { name: t('header.feature'), href: "/feature" },
    { name: t('header.pricing'), href: "/pricing" },
    { name: t('header.about'), href: "/about" },
  ];

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-6 px-6 lg:px-0"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Trafodiag</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <GlobeIcon className="h-5 w-5" />
                <span>{i18n.language == "en" ? "EN" : "ID"}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2">
              <div className="grid gap-1">
                <Button
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                  variant="ghost"
                  className="justify-start"
                >
                  <img
                    className="h-4 w-3"
                    src="https://flagicons.lipis.dev/flags/4x3/gb-eng.svg"
                    alt=""
                  />
                  <span>ENGLISH</span>
                </Button>
                <Button
                  onClick={() => {
                    i18n.changeLanguage("id");
                  }}
                  variant="ghost"
                  className="justify-start"
                >
                  <img
                    className="h-4 w-3"
                    src="https://flagicons.lipis.dev/flags/4x3/id.svg"
                    alt=""
                  />
                  <span>INDONESIA</span>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <GlobeIcon className="h-5 w-5" />
                      <span>English</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-2">
                    <div className="grid gap-1">
                      <Button variant="ghost" className="justify-start">
                        <span>English</span>
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        <span>Idnonesia</span>
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
