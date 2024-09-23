import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-green-600 text-white">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
          Enhance Your Health Knowledge Today
          <br />
          Discover comprehensive information about various diseases.
        </h2>
        <a
          className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-green-800 rounded-full shadow-xl border border-transparent hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-green-500"
          href="/"
        >
          Learn More
        </a>
        <div className="mt-14 xl:mt-20">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            <div className="px-5 py-2">
              <a href="/">Contact Us</a>
            </div>
            <div className="px-5 py-2">
              <a href="/">Pricing Information</a>
            </div>
            <div className="px-5 py-2">
              <a href="/">Privacy Policy</a>
            </div>
            <div className="px-5 py-2">
              <a href="/">Terms of Service</a>
            </div>
            <div className="px-5 py-2">
              <a href="/">Follow Us on Twitter</a>
            </div>
          </nav>
          <p className="mt-7 text-base">
            © 2024 Your Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
