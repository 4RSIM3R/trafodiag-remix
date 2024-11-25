import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";

export const HomeClient = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="client" className="px-6 lg:px-4">
        <div className="">
          <div className="mx-auto max-w-4xl sm:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
              {t("home.testimony.title")}
            </p>
            <p className="mx-auto max-w-2xl mt-6 text-lg text-gray-600">
              {t("home.testimony.subtitle")}
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-6 pb-24">
          <div className="lg:col-span-4 relative">
            <div className="w-full h-96 relative">
              <img
                src="/assets/trafo.jpg"
                alt="Jolotundo Background"
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
              <div className="relative  flex flex-col justify-between h-full p-6">
                <p className="text-lg text-white font-medium">REVIEW</p>
                <div>
                  <p className=" text-white text-lg font-normal leading-relaxed italic">
                    {t("home.testimony.client.first.review")}
                  </p>
                  <p className="text-white text-lg mt-2 font-semibold">
                    {t("home.testimony.client.first.name")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 relative lg:col-span-2 p-6 bg-blue-600 rounded-md flex flex-col justify-between">
            <p className="capitalize text-lg text-white">
              {t("home.testimony.fact.title")}
            </p>
            <div>
              <p className="text-9xl text-white">89%</p>
              <p className="text-2xl text-white">
                {t("home.testimony.fact.subtitle")}
              </p>
            </div>
          </div>
          <div className="h-96 relative lg:col-span-2 p-6 bg-blue-600 rounded-md flex flex-col justify-between">
            <p className="capitalize text-lg text-white">{t("home.testimony.success.title")}</p>
            <img
              className="grow max-h-44 object-cover rounded-sm"
              src="/assets/trafo.jpg"
              alt=""
            />{" "}
            {/* make this image height dynamic, */}
            <p className="text-white">
            {t("home.testimony.success.subtitle")}
            </p>
          </div>
          <div className="h-96 relative lg:col-span-4 p-6 bg-gray-200 rounded-md flex flex-col justify-between">
            <div>
              <p className="text-lg font-medium">REVIEW</p>
              <p className="text-2xl font-normal italic mt-2">
                {t("home.testimony.client.second.review")}
              </p>
            </div>
            <p className="text-lg font-semibold">
              {t("home.testimony.client.second.name")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
