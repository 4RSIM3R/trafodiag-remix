import { useTranslation } from "react-i18next";

export const HomeBanner = () => {
  let { t } = useTranslation();

  return (
    <div id="banner" className="bg-white pt-16 pb-24">
      <div className="px-6 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          {/* <div className="mx-auto px-2 py-1 bg-blue-50 w-48 rounded-sm mb-4">
            <p className="text-base font-semibold leading-7 text-blue-600">
              TAGLINE HERE 🔥
            </p>
          </div> */}
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            Smart, Predictive, and Reliable Way to Ensure{" "}
            <span className="text-blue-600">Transformer Health</span>
          </p>
          <p className="mx-auto max-w-2xl mt-6 text-lg text-gray-600">
            {t('home-banner-title')}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
