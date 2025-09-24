"use client";

import type React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";


import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/images/big.jpg",
    "/images/two.jpg",
    "/images/118355.jpg",
    "/images/122622.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex justify-center overflow-hidden">
         <Image
        src="/Background.jpg"
        alt="Hero Background"
        fill
        className="object-cover -z-20"
        priority
      />
       <div className="absolute inset-0 bg-black  opacity-30 -z-10"></div>
        {/* Navigation */}
       <div className="flex flex-col w-full">
         <nav className=" w-full flex items-center justify-center  py-2 px-24 max-lg:px-4 relative z-10">
          <div className="flex items-center mt-8">
            <div className="">
              <Image src="/Baisoft.png" alt="Baisoft Global Logo"  width={75} height={75} className="mr-3" />
              {/* <Image src="/baisoft-logo.png" alt="Baisoft Global Logo" width={270} height={270} className="mr-3" /> */}
            </div>
            <div className="text-[60px] max-lg:text-xl font-bold text-white">
              <span className="">Baisoft Global</span>
            </div>
          </div>
          {/* <div className="flex items-center space-x-8 max-lg:space-x-4">
            <a
              href="#"
              className="text-white hover:text-green-400 transition-colors"
            >
              Home
            </a>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-green-400 transition-colors"
            >
              About Us
            </button>
          </div> */}
        </nav>

        {/* Hero Content */}
        <div className="flex items-center justify-center items-center w-full max-lg:items-start max-lg:gap-10 justify-between px-24 max-lg:px-4 max-lg:flex-col mt-20 max-lg:mt-8 max-lg:w-full">
          <div className="flex-1 max-lg:flex-none max-lg:w-full max-lg:mb-16 max-md:mb-5">
            <h1 className="text-6xl font-bold text-white leading-[55px] max-lg:text-left max-lg:text-5xl max-lg:w-full">
              Scalable <br /> and secure <br /> <span className="text-[#2fa7df] italic">Software</span> Solutions
            </h1>
          </div>

          <div className="flex-1 flex max-lg:flex-none justify-center relative max-lg:mx-auto max-lg:w-full">
            {/* Decorative elements */}
            {/* <div className="absolute top-10 right-20 w-8 h-8 border-2 border-green-400 rounded opacity-60"></div>
            <div className="absolute top-32 right-10 w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-green-400 rounded-full opacity-60"></div> */}

          <div className="absolute z-20 top-10 right-20 p-3 shadow-xl outline-2 outline-gray-400 bg-blue-[#000047] text-white rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Icon icon="hugeicons:flash" width="16" height="16" className="text-blue-600" />
              <span className="text-sm font-medium">10x Faster</span>
            </div>
          </div>

          <div className="absolute top-32 right-10 p-3 shadow-xl outline-2 outline-gray-400 z-20 bg-blue-[#000047] text-white rounded-xl backdrop-blur-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
               <Icon icon="hugeicons:source-code" width="16" height="16" className="text-blue-600" />
                <span className="text-sm font-medium">Smart Code Gen</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-1 h-1 bg-blue-600 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 left-10 p-3 shadow-xl outline-2 outline-gray-400 z-10 bg-blue-[#000047] text-white rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Icon icon="hugeicons:database" width="16" height="16" className="text-blue-600"/>
              <span className="text-sm">Auto Deploy</span>
            </div>
          </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#28a8df] rounded-2xl transform rotate-12 scale-110 opacity-20"></div>
              <div className="absolute inset-0 bg-[#28a8df] rounded-2xl transform -rotate-6 scale-105 opacity-15"></div>
              <div className="relative w-96 h-[400px] max-lg:w-full max-lg:h-80 rounded-2xl overflow-hidden border-4 border-white/20">
                <Image
                  src={heroImages[currentImageIndex] || "/placeholder.svg"}
                  alt="Hero image"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-green-400"
                        : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
       </div>

        <div className="absolute bottom-8 max-lg:bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-green-400 transition-colors"
          >
            <div className="text-lg mb-2 max-lg:mb-1  max-lg:text-base">Know More</div>
            <div className="text-[#2fa7df] text-2xl">▼</div>
          </button>
        </div>
      </section>

      <section id="about" className="py-20 px-24 max-lg:px-4  bg-gray-50">
        <div className="mb-8">
          <div className="text-[#2fa7df] text-sm font-semibold tracking-wider mb-4">
            ABOUT
          </div>
          <h2 className="text-4xl max-lg:text-3xl font-semibold text-gray-900 leading-tight">
            {`Creating Tomorrow's Software Solutions, Today!`}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Large image on the left */}
          <div className="col-span-1">
            <div className="rounded-2xl overflow-hidden h-full">
              <Image
                src="/images/big.jpg"
                width={700}
                  height={700}
                alt="Woman at market"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side grid of 4 squares */}
          <div className="grid grid-cols-2 gap-4">
            {/* For Consumers card */}
            <div className="bg-[#A13AE5] rounded-2xl max-lg:p-4 p-4 text-white relative overflow-hidden aspect-square">
              {/* <div className="absolute top-4 right-4 text-white/30 text-6xl max-lg:text-3xl">
                ↗
              </div> */}
              <div className="">
                {/* <h3 className="text-xl font-bold mb-2 max-lg:leading-tight">For Consumers</h3> */}
                <p className="text-[clamp(0.72rem,1.5vw,2rem)]">Transforming businesses with smart, industry-specific, and Ai-powered software solution that are designed to streamline operations, enhance productivity, and drive measurable growth.</p>
              </div>
            </div>

            {/* Person image */}
            <div className="rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/122622.jpg"
                width={700}
                  height={700}
                alt="Woman in store"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Another person image */}
            <div className="rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/118355.jpg"
                width={700}
                  height={700}
                alt="Man in grocery store"
                className="w-full h-full object-cover"
              />
            </div>

            {/* For Merchants card */}
            <div className="bg-[#0b75ae] rounded-2xl max-lg:p-4 p-4 text-white relative overflow-hidden aspect-square">
              {/* <div className="absolute top-4 right-4 text-white/30 text-4xl max-lg:text-3xl">
                ✓
              </div> */}
              <div className="">
                {/* <h3 className="text-xl font-bold mb-2 max-lg:leading-tight">For Business Owners</h3> */}
                <p className="text-[clamp(0.72rem,1.5vw,2rem)]">
                  We deliver dependable software foundations for industries that never stop moving - from HR to Retail, Accounting to Education, Property Management to Hospitality, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 max-lg:px-4 px-24 max-lg:py-12 bg-gray-100">
        <div className="w-full flex justify-between max-md:flex-col max-md:space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="">
              <h2 className="text-3xl  max-lg:text-2xl font-bold text-gray-900 mb-2">
                Interested to know more ?
              </h2>
              <p className="text-gray-600 mb-0">
              {`Share your email address and you'll be the first to know`}
              </p>
            </div>

            <div className="flex items-center gap-4 max-lg:w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="w-[400px] max-lg:w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="">
            <p className="font-bold text-2xl">Contact Us:</p>
            <div className="flex flex-col space-y-3 mt-2">
              <div className="flex items-center space-x-2">
                <Icon icon="hugeicons:mail-01" width="20" height="20" />
                <p className="font-normal">info@baisoftglobal.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Icon icon="hugeicons:call" width="20" height="20" />
                <p className="font-normal">+256 326120212 </p>
              </div>
              <div className="flex items-start space-x-2">
                <Icon icon="hugeicons:location-01" width="20" height="20" />
                <p className="font-normal">Plot 58A, Ntinda II RD, Naguru <br />Kampala - Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 px-24 max-lg:px-4">
        <div className="flex flex-col flex-row max-md:flex-col max-md:w-full max-md:items-start max-md:gap-8 justify-between items-end text-white text-sm">
           
          <div className="max-lg:text-center"> Copyright © {new Date().getFullYear()} Baisoft Global LTD. All Rights Reserved.</div>
         
          {/* <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <button
              onClick={() => setShowTermsPopup(true)}
              className="hover:text-green-400 transition-colors"
            >
              Terms of Use
            </button>
            <span className="text-gray-500">|</span>
            <button
              onClick={() => setShowPrivacyPopup(true)}
              className="hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </button>
          </div> */}
        </div>
      </footer>

      

     
    </div>
  );
}
