import React from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import likeHero from "../../../assets/underTitleOfhero.png";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="heroSection flex flex-col items-center text-white pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        <Heading level="h1">
          <span className="block text-white">Best Accounting Software in</span>
          <span className="block bg-gradient-to-t from-[#2A2355] to-white bg-clip-text text-transparent">
            India, <span className="font-semibold">tech Startup</span>
          </span>
        </Heading>
      </div>

      <Image
        src={likeHero}
        width={128}
        height={19}
        className="mt-4 sm:mt-5 mb-6 sm:mb-9 w-auto h-auto max-w-[128px]"
        alt="Hero section icon"
      />

      <p className="text-[#8F9BB7] mb-6 sm:mb-8 font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] tracking-normal text-center max-w-md">
        Changing how India does its hisabkitab
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center w-full max-w-sm sm:max-w-none">
        <Button variant="trial" />
        <Button variant="pricing" />
      </div>
    </section>
  );
}
