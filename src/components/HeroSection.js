import React from "react";
import HeroImage from "../assests/images/hero.jpg";
const HeroSection = () => {
  return (
    <div className="md:mx-auto md:container px-4 dark:bg-gray-900">
      <div className="pt-10 md:pt-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center pb-12">
            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
              <div className="py-2 text-color">
                <div
                  role="heading"
                  className="text-2xl dark:text-white  lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black"
                >
                  <span className="text-green-600">About</span> Okoa Maisha na Health Info
                  <span className="text-green-700">.</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold">
                Empowering You with Knowledge on{" "}
                <span className="text-green-700">
                  Non-Communicable Diseases
                </span>
              </h1>
                <p
                  role="contentinfo"
                  className="text-md dark:text-white lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8"
                >
                   Discover comprehensive information and resources to manage and
                   prevent non-communicable diseases. Stay informed, stay healthy..
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <img
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src={HeroImage}
                alt="A girl enjoying in sunlight"
                role="img"
              />
              <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                <div className="flex items-center justify-between w-full sm:w-full mb-8">
                  <h2 className="text-2xl font-serif font-bold text-green-600">
                    Explore, Learn, About Non-Communicable Diseases
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
