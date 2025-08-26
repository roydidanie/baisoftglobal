"use client";

import type React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  const heroImages = [
    "/images/big.jpg",
    "/images/two.jpg",
    "/images/118355.jpg",
    "/images/122622.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Popup = ({
    isOpen,
    onClose,
    title,
    children,
  }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="text-gray-700 leading-relaxed">{children}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 h-dvh relative overflow-hidden">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 px-24 max-md:px-4">
          <div className="flex items-center">
            <div>
              <img src="/baisoft-logo.png" alt="Baisoft Global Logo" className="w-10 h-10 mr-3" />
            </div>
            <div className="text-2xl max-md:text-xl font-bold text-white">
              <span className="">Baisoft Global</span>
            </div>
          </div>
          <div className="flex items-center space-x-8 max-md:space-x-4">
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
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex items-center max-md:items-start max-md:gap-10 justify-between px-24 max-md:px-4 max-md:flex-col mt-20 max-md:mt-8 max-md:w-full">
          <div className="flex-1 max-md:flex-none max-md:w-full">
            <h1 className="text-7xl font-bold text-white leading-tight max-md:text-left max-md:text-5xl max-md:w-full">
              Scalable <br /> and secure <span className="text-[#2fa7df] italic">Software</span> solutions
              <br />
              
            </h1>
          </div>

          <div className="flex-1 flex max-md:flex-none justify-center relative">
            {/* Decorative elements */}
            <div className="absolute top-10 right-20 w-8 h-8 border-2 border-green-400 rounded opacity-60"></div>
            <div className="absolute top-32 right-10 w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>

            {/* Thumbs up icon */}
            <div className="absolute top-16 right-32 text-green-400 text-2xl opacity-60">
              👍
            </div>

            {/* Paper plane icon */}
            <div className="absolute bottom-32 left-20 text-green-400 text-xl opacity-60">
              ✈️
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full transform rotate-12 scale-110 opacity-20"></div>
              <div className="absolute inset-0 bg-green-300 rounded-full transform -rotate-6 scale-105 opacity-15"></div>
              <div className="relative w-96 h-96 max-md:w-full max-md:h-80 rounded-full overflow-hidden border-4 border-white/20">
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

        <div className="absolute bottom-8 max-md:bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-green-400 transition-colors"
          >
            <div className="text-lg mb-2 max-md:mb-1  max-md:text-base">Know More</div>
            <div className="text-[#2fa7df] text-2xl">▼</div>
          </button>
        </div>
      </section>

      <section id="about" className="py-20 px-24 max-md:px-4  bg-gray-50">
        <div className="mb-8">
          <div className="text-[#2fa7df] text-sm font-semibold tracking-wider mb-4">
            ABOUT
          </div>
          <h2 className="text-4xl max-md:text-3xl font-semibold text-gray-900 leading-tight">
            Building the next generation Software solutions
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
            <div className="bg-green-400 rounded-2xl max-md:p-4 p-6 text-white relative overflow-hidden aspect-square">
              <div className="absolute top-4 right-4 text-white/30 text-6xl max-md:text-3xl">
                ↗
              </div>
              <div className="mt-8 max-md:mt-1">
                <h3 className="text-xl font-bold mb-2 max-md:leading-tight">For Consumers</h3>
                <p className="text-green-100">We take your worries away.</p>
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
            <div className="bg-[#0b75ae] rounded-2xl max-md:p-4 p-6 text-white relative overflow-hidden aspect-square">
              <div className="absolute top-4 right-4 text-white/30 text-4xl max-md:text-3xl">
                ✓
              </div>
              <div className="mt-8 max-md:mt-1">
                <h3 className="text-xl font-bold mb-2 max-md:leading-tight">For Business Owners</h3>
                <p className="text-orange-100">
                  Streamlining processes for business growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 max-md:px-4 px-24 max-md:py-12 bg-gray-100">
        <div className="w-full mx-auto text-left flex items-center justify-between max-md:flex-col max-md:gap-6">
          <div>
            <h2 className="text-3xl  max-md:text-2xl font-bold text-gray-900 mb-2">
              Interested to know more ?
            </h2>
            <p className="text-gray-600 mb-0">
             {`Share your email address and you'll be the first to know`}
            </p>
          </div>

          <div className="flex items-center gap-4 max-md:w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="w-[400px] max-md:w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
            <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 px-24 max-md:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-white text-sm">
          <div className="max-md:text-center"> Copyright © {new Date().getFullYear()} Baisoft Global. All Rights Reserved.</div>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
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
          </div>
        </div>
      </footer>

      <Popup
        isOpen={showTermsPopup}
        onClose={() => setShowTermsPopup(false)}
        title="Terms of Use"
      >
        <div className="space-y-4">
          <p>
            <strong>Last updated:</strong> August 2025
          </p>

          <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
          <p>
            {`By accessing and using Baisoft Global's services, you accept and agree to be
            bound by the terms and provision of this agreement.`}
          </p>

          <h3 className="text-lg font-semibold">2. Use License</h3>
          <p>
           {` Permission is granted to temporarily download one copy of Baisoft Global's
            materials for personal, non-commercial transitory viewing only. This
            is the grant of a license, not a transfer of title.`}
          </p>

          <h3 className="text-lg font-semibold">3. Disclaimer</h3>
          <p>
           {` The materials on Baisoft Global's website are provided on an 'as is' basis.
            Baisoft Global makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.`}
          </p>

          <h3 className="text-lg font-semibold">4. Limitations</h3>
          <p>
           {` In no event shall Baisoft Global or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on Baisoft Global's website.`}
          </p>

          <h3 className="text-lg font-semibold">5. Payment Terms</h3>
          <p>
            All payment processing services are subject to additional terms and
            conditions. Users agree to comply with all applicable laws and
            regulations regarding payment processing.
          </p>

          <h3 className="text-lg font-semibold">6. Contact Information</h3>
          <p>
            If you have any questions about these Terms of Use, please contact
            us at info@baisoftglobal.com
          </p>
        </div>
      </Popup>

      <Popup
        isOpen={showPrivacyPopup}
        onClose={() => setShowPrivacyPopup(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p>
            <strong>Last updated:</strong> August 2025
          </p>

          <h3 className="text-lg font-semibold">1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, use our payment services, or contact us for
            support. This may include your name, email address, phone number,
            and payment information.
          </p>

          <h3 className="text-lg font-semibold">
            2. How We Use Your Information
          </h3>
          <p>
            We use the information we collect to provide, maintain, and improve
            our payment processing services, process transactions, send you
            technical notices and support messages, and communicate with you
            about products, services, and promotional offers.
          </p>

          <h3 className="text-lg font-semibold">3. Information Sharing</h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy. We may share your information with trusted
            partners who assist us in operating our website and conducting our
            business.
          </p>

          <h3 className="text-lg font-semibold">4. Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction. All payment data is encrypted and processed through
            secure channels.
          </p>

          <h3 className="text-lg font-semibold">5. Cookies and Tracking</h3>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on our website, analyze usage patterns, and deliver
            personalized content and advertisements.
          </p>

          <h3 className="text-lg font-semibold">6. Your Rights</h3>
          <p>
            You have the right to access, update, or delete your personal
            information. You may also opt out of certain communications from us.
            To exercise these rights, please contact us at privacy@Baisoft Global.com
          </p>

          <h3 className="text-lg font-semibold">7. Changes to This Policy</h3>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the Last updated date.
          </p>

          <h3 className="text-lg font-semibold">8. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at info@baisoftglobal.com
          </p>
        </div>
      </Popup>
    </div>
  );
}
