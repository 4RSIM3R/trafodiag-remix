import { useTranslation } from "react-i18next";

export const HomeFeature = () => {
  const { t } = useTranslation();

  return (
    <div id="feature" className="pb-24 px-6 lg:px-4">
      <div className="">
        <div className="mx-auto max-w-4xl sm:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            {t("home.feature.title")}
          </p>
          <p className="mx-auto max-w-2xl mt-6 text-lg text-gray-600">
            {t("home.feature.subtitle")}
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
            <img
              alt=""
              src="/assets/cost.png"
              className="h-80 object-cover object-left"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-blue-600">
                {t("home.feature.effectiveness.title")}
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                {t("home.feature.effectiveness.subtitle")}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                {t("home.feature.effectiveness.description")}
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
        </div>
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
            <img
              alt=""
              src="/assets/realtime.png"
              className="h-80 object-cover object-left lg:object-right"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-blue-600">
                {t("home.feature.real_time.title")}
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                {t("home.feature.real_time.subtitle")}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                {t("home.feature.real_time.description")}
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
            <img
              alt=""
              src="/assets/ai.png"
              className="h-80 object-cover object-left"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-blue-600">
                {t("home.feature.ai_driven.title")}
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                {t("home.feature.ai_driven.subtitle")}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                {t("home.feature.ai_driven.description")}
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg bg-white" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <img
              alt=""
              src="/assets/report.png"
              className="h-80 object-cover object-center"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-blue-600">
                {t("home.feature.comprehensive.title")}
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                {t("home.feature.comprehensive.subtitle")}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                {t("home.feature.comprehensive.description")}
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
            <img
              alt=""
              src="/assets/friendly.png"
              className="h-80 object-cover object-center"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-blue-600">
                {t("home.feature.user_friendly.title")}
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                {t("home.feature.user_friendly.subtitle")}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                {t("home.feature.user_friendly.description")}
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
        </div>
      </div>
    </div>
  );
};
