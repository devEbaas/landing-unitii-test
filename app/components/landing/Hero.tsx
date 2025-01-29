'use client'

export function Hero() {

  
  const openUnitii = () => {
    window.open(
      "https://srv601906.hstgr.cloud/signin",
      "_self",
      "noopener noreferrer"
    );
  };
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 md:pt-0 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4A90E2] to-[#50E3C2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 pb-0 sm:py-48 lg:py-56 lg:pb-24">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
            >
              Connecting Innovators Worldwide
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="700"
              className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
            >
              Discover the power of AI-driven matching to bring your ideas to
              life with the perfect collaborators.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div
                data-aos="fade-in"
                data-aos-delay="1000"
                onClick={openUnitii}
                className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:cursor-pointer"
              >
                <p className="text-white text-xl">Get started</p>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4A90E2] to-[#50E3C2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}