export const HomeFeature = () => {
  return (
    <div id="feature" className="pb-24 px-6 lg:px-0">
      <div className="">
        <div className="mx-auto max-w-4xl sm:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            Features to Elevate Transformer Health and Performance
          </p>
          <p className="mx-auto max-w-2xl mt-6 text-lg text-gray-600">
            Simplify diagnostics, gain real-time insights, and optimize
            maintenance with Trafodiag's powerful tools designed to keep your
            transformers running smoothly.
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
            <img
              alt=""
              src="https://tailwindui.com/plus/img/component-images/bento-01-performance.png"
              className="h-80 object-cover object-left"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-indigo-600">
                Effectiveness
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                Cost-Effective Maintenance
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Optimize maintenance schedules, reduce downtime, and save costs
                by preventing unexpected failures.
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
              src="https://tailwindui.com/plus/img/component-images/bento-01-releases.png"
              className="h-80 object-cover object-left lg:object-right"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-indigo-600">
                Real-Time
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                Real-Time Monitoring
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Access real-time data on transformer health, oil quality, and
                gas levels, all in one intuitive dashboard.
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
              src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png"
              className="h-80 object-cover object-left"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-indigo-600">
                AI-Driven
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                AI-Driven Diagnostics
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Harness the power of artificial intelligence to predict
                transformer failures before they happen.
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
              src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
              className="h-80 object-cover object-center"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-indigo-600">
                Comprehensive
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                Comprehensive Report
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Generate actionable insights and detailed reports for informed
                decision-making.
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
              src="https://tailwindui.com/plus/img/component-images/bento-01-network.png"
              className="h-80 object-cover object-center"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-indigo-600">
                User Friendly
              </h3>
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                User Friendly Interface
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Easy to use with customizable dashboards tailored to your needs.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
        </div>
      </div>
    </div>
  );
};
