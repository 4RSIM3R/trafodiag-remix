import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { PlayIcon } from "lucide-react";
import { Modal } from "flowbite-react";
import ReactPlayer from 'react-player/youtube'

export const HomeBanner = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div id="banner" className="bg-white pt-16 pb-24">
      <div className="px-6 lg:px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            {t("home.banner.title")}{" "}
            <span className="text-blue-600">{t("home.banner.health")}</span>
          </p>
          <p className="mx-auto max-w-2xl mt-6 text-lg text-gray-600">
            {t("home.banner.subtitle")}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Thumbnail or placeholder image */}
          <div
            className="cursor-pointer mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            onClick={handleOpenModal}
          >
            <img
              src="/assets/dashboard.png"
              width={2432}
              height={1442}
              className="rounded-xl"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button>
                <PlayIcon className="h-8 w-8" />
              </Button>
            </div>
          </div>
          <Modal dismissible show={open} onClose={() => setOpen(false)} size="5xl" className="p-0 overflow-hidden" >
            <Modal.Header>How Trafodiag Works?</Modal.Header>
            <Modal.Body className="scrollbar-hidden " >
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full rounded-lg" controls>
                  <source
                    src="/assets/teaser.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Modal.Body>
          </Modal>
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
