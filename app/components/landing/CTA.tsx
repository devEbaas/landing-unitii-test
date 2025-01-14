'use client'

import Image from "next/image";

export function CTA() {
  const openUnitii = () => {
    window.open(
      "https://srv601906.hstgr.cloud/signin",
      "_self",
      "noopener noreferrer"
    );
  };
  return (
    <div className="bg-transparent  sm:bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-transparent sm:bg-white px-6 pt-16 sm:shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="hidden sm:absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
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
                <stop stopColor="#1e3a8a" />
                <stop offset={1} stopColor="#06b6d4" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Start Today: Connect with the People You Need
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-500">
              Discover a network of talented individuals ready to help you
              achieve your goals. From innovative ideas to successful projects,
              it all starts with the right connection.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <div
                onClick={openUnitii}
                className="rounded-md bg-[#2563EB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <p className="text-white text-xl">Get started</p>
              </div>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              alt="App screenshot"
              src="/screenshot.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}