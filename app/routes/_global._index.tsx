import { Button } from "~/components/ui/button";
import { HomeBanner } from "~/partials/home-banner";
import { HomeClient } from "~/partials/home-client";
import { HomeCta } from "~/partials/home-cta";
import { HomeFeature } from "~/partials/home-feature";

export default function Index() {
  return (
    <>
      <HomeBanner />
      <HomeFeature />
      <HomeClient />
      <HomeCta />
    </>
  );
}
