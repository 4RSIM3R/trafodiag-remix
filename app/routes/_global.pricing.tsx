import { CheckIcon, MinusIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { Button } from "~/components/ui/button";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: "$19",
    mostPopular: false,
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "#",
    priceMonthly: "$49",
    mostPopular: true,
  },
  {
    name: "Scale",
    id: "tier-scale",
    href: "#",
    priceMonthly: "$99",
    mostPopular: false,
  },
];
const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Edge content delivery",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Custom domains",
        tiers: { Starter: "1", Growth: "3", Scale: "Unlimited" },
      },
      {
        name: "Team members",
        tiers: { Starter: "3", Growth: "20", Scale: "Unlimited" },
      },
      {
        name: "Single sign-on (SSO)",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Advanced analytics",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Basic reports",
        tiers: { Starter: false, Growth: true, Scale: true },
      },
      {
        name: "Professional reports",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
      {
        name: "Custom report builder",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "24/7 online support",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Quarterly workshops",
        tiers: { Starter: false, Growth: true, Scale: true },
      },
      {
        name: "Priority phone support",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
      {
        name: "1:1 onboarding tour",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <div className="bg-white pt-16 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Pricing
            </h2>
            <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Pricing that grows with you
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>

          {/* xs to lg */}
          <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
            {tiers.map((tier) => (
              <section
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200"
                    : "",
                  "p-8"
                )}
              >
                <h3
                  id={tier.id}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-2 flex items-baseline gap-x-1 text-gray-900">
                  <span className="text-4xl font-semibold">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold">/month</span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300",
                    "mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  )}
                >
                  Buy plan
                </a>
                <ul
                  role="list"
                  className="mt-10 space-y-4 text-sm leading-6 text-gray-900"
                >
                  {sections.map((section) => (
                    <li key={section.name}>
                      <ul role="list" className="space-y-4">
                        {section.features.map((feature) =>
                          feature.tiers[tier.name] ? (
                            <li key={feature.name} className="flex gap-x-3">
                              <CheckIcon
                                aria-hidden="true"
                                className="h-6 w-5 flex-none text-blue-600"
                              />
                              <span>
                                {feature.name}{" "}
                                {typeof feature.tiers[tier.name] ===
                                "string" ? (
                                  <span className="text-sm leading-6 text-gray-500">
                                    ({feature.tiers[tier.name]})
                                  </span>
                                ) : null}
                              </span>
                            </li>
                          ) : null
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* lg+ */}
          <div className="isolate mt-20 hidden lg:block">
            <div className="relative -mx-8">
              {tiers.some((tier) => tier.mostPopular) ? (
                <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                  <div
                    style={{
                      marginLeft: `${
                        (tiers.findIndex((tier) => tier.mostPopular) + 1) * 25
                      }%`,
                    }}
                    aria-hidden="true"
                    className="flex w-1/4 px-4"
                  >
                    <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                  </div>
                </div>
              ) : null}
              <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                <caption className="sr-only">Pricing plan comparison</caption>
                <colgroup>
                  <col className="w-1/4" />
                  <col className="w-1/4" />
                  <col className="w-1/4" />
                  <col className="w-1/4" />
                </colgroup>
                <thead>
                  <tr>
                    <td />
                    {tiers.map((tier) => (
                      <th
                        key={tier.id}
                        scope="col"
                        className="px-6 pt-6 xl:pt-8"
                      >
                        <div className="text-sm font-semibold leading-7 text-gray-900">
                          {tier.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <span className="sr-only">Price</span>
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.id} className="px-6 pt-2">
                        <div className="flex items-baseline gap-x-1 text-gray-900">
                          <span className="text-4xl font-semibold">
                            {tier.priceMonthly}
                          </span>
                          <span className="text-sm font-semibold leading-6">
                            /month
                          </span>
                        </div>
                        {tier.mostPopular ? (
                          <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-500">
                            Buy Plan
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            className="mt-4 w-full border-blue-600 text-blue-600"
                          >
                            Buy Now
                          </Button>
                        )}
                      </td>
                    ))}
                  </tr>
                  {sections.map((section, sectionIdx) => (
                    <Fragment key={section.name}>
                      <tr>
                        <th
                          scope="colgroup"
                          colSpan={4}
                          className={classNames(
                            sectionIdx === 0 ? "pt-8" : "pt-16",
                            "pb-4 text-sm font-semibold leading-6 text-gray-900"
                          )}
                        >
                          {section.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                        </th>
                      </tr>
                      {section.features.map((feature) => (
                        <tr key={feature.name}>
                          <th
                            scope="row"
                            className="py-4 text-sm font-normal leading-6 text-gray-900"
                          >
                            {feature.name}
                            <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                          </th>
                          {tiers.map((tier) => (
                            <td key={tier.id} className="px-6 py-4">
                              {typeof feature.tiers[tier.name] === "string" ? (
                                <div className="text-center text-sm leading-6 text-gray-500">
                                  {feature.tiers[tier.name]}
                                </div>
                              ) : (
                                <>
                                  {feature.tiers[tier.name] === true ? (
                                    <CheckIcon
                                      aria-hidden="true"
                                      className="mx-auto h-5 w-5 text-blue-600"
                                    />
                                  ) : (
                                    <MinusIcon
                                      aria-hidden="true"
                                      className="mx-auto h-5 w-5 text-gray-400"
                                    />
                                  )}

                                  <span className="sr-only">
                                    {feature.tiers[tier.name] === true
                                      ? "Included"
                                      : "Not included"}{" "}
                                    in {tier.name}
                                  </span>
                                </>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
