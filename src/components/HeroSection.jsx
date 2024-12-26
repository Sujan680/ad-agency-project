import React from "react";
import profileImg1 from "../assets/profile1.jpeg";
import profileImg2 from "../assets/profile2.jpeg";
import profileImg3 from "../assets/profile3.jpg";
import { IoArrowForward } from "react-icons/io5";
import heroImg from "../assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center bg-emerald-950 text-orange-50 mt-12">
      <div className="w-full p-8 md:w-1/2">
        <div className="mb-4 flex space-x-2">
          <img
            src={profileImg1}
            alt="team member 1"
            className="w-12 h-12 rounded-full border-2 border-orange-50 "
          />
          <img
            src={profileImg2}
            alt="team member 2"
            className="w-12 h-12 rounded-full border-2 border-orange-50 "
          />
          <img
            src={profileImg3}
            alt="team member 3"
            className="w-12 h-12 rounded-full border-2 border-orange-50 "
          />
        </div>
        <h1 className="text-4xl tracking-tighter md:text-5xl lg:text-7xl">
          We create impactful ads that
          <span className="text-orange-500"> elevate </span>
          your brand.
        </h1>
        <button
          className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900 px-4
         py-3 hover:bg-emerald-400 hover:text-emerald-900"
        >
          <span>Know More</span>
          <IoArrowForward />
        </button>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:p-8">
        <img src={heroImg} alt="ad agency image" className="h-auto w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
