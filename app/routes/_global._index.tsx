import { Button } from "~/components/ui/button";
import { HomeBanner } from "~/partials/home-banner";
import { HomeFeature } from "~/partials/home-feature";

export default function Index() {
  return (
    <>
      <HomeBanner />
      <HomeFeature />
      <div id="client" className="px-6 lg:px-0">
        <div className="">
          <div className="mx-auto max-w-4xl sm:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
              What Our Customers Say About Trafodiag
            </p>
            <p className="mx-auto max-w-2xl mt-6 text-lg text-gray-600">
              See how Trafodiag revolutionizes transformer management with real
              insights from our users, highlighting the power of predictive
              analytics and real-time monitoring.
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-6 pb-24">
          <div className="lg:col-span-4 relative">
            <div className="w-full h-96 relative">
              <img
                src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/01/2023/04/06/PLN-NP-ist-1081238363.jpg"
                alt="Jolotundo Background"
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
              <div className="relative  flex flex-col justify-between h-full p-6">
                <p className="text-lg text-white font-medium">REVIEW</p>
                <div>
                  <p className=" text-white text-lg font-normal leading-relaxed italic">
                    "NextSales stands as a testament to the power of design
                    inspiration and careful color selection, offering a visually
                    striking and intuitive experience for users"
                  </p>
                  <p className="text-white text-lg mt-2 font-semibold">
                    Yoppy Yunhasnawa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 relative lg:col-span-2 p-6 bg-blue-600 rounded-md flex flex-col justify-between">
            <p className="capitalize text-lg text-white">FACTS & NUMBERS</p>
            <div>
              <p className="text-9xl text-white">89%</p>
              <p className="text-2xl text-white">
                of customers recomended trafodiag as their main
              </p>
            </div>
          </div>
          <div className="h-96 relative lg:col-span-2 p-6 bg-blue-600 rounded-md flex flex-col justify-between">
            <p className="capitalize text-lg text-white">SUCCESS STORIES</p>
            <img
              className="grow max-h-44 object-cover rounded-sm"
              src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/01/2023/04/06/PLN-NP-ist-1081238363.jpg"
              alt=""
            />{" "}
            {/* make this image height dynamic, */}
            <p className="text-white">
              In making this dashboard, inspiration from top references like
              Comvi Sales and various Dribbble designs
            </p>
            <div>
              <Button variant="secondary">Read Study Case</Button>
            </div>
          </div>
          <div className="h-96 relative lg:col-span-4 p-6 bg-gray-200 rounded-md flex flex-col justify-between">
            <div>
              <p className="text-lg font-medium">REVIEW</p>
              <p className="text-2xl font-normal italic mt-2">
                "NextSales stands as a testament to the power of design
                inspiration and careful color selection, offering a visually
                striking and intuitive experience for users"
              </p>
            </div>
            <p className="text-lg font-semibold">Yoppy Yunhasnawa</p>
          </div>
        </div>
      </div>
      <div id="cta" className="pb-24 px-6 lg:px-0">
        <div className="relative isolate overflow-hidden bg-blue-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#FFFFFF" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start Your Trafodiag Journey
            </h2>
            <p className="mt-6 text-pretty text-lg text-white">
              Let’s begin optimizing your transformer health with Trafodiag! Do
              you want to prevent failures, reduce downtime, and save on
              maintenance costs? Trafodiag is the solution!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button variant="secondary">Contact Sales</Button>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
