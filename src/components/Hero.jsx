import React from "react";
import { LaptopMinimal } from "lucide-react";
import hero from "/images/hero-bg.png";

function Hero() {
  return (
    <div className="flex flex-col px-5 lg:w-[65%] mx-auto pb-5  mt-20">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold leading-[60px] ">
          A powerful solution to grow <br /> your startup. Fast!
        </h1>
        <p className="text-lg">
          Organize, collaborate, and track progress seamlessly with our <br /> one-stop-shop startup
          growth tool.
        </p>
        <div className="flex gap-3 z-50">
          <button className="bg-blue-500 hover:bg-blue-500/70 transition-all duration-300 px-4 py-3 text-white font-bold rounded-lg">
            Get Started
          </button>
          <button className="bg-zinc-100 hover:bg-zinc-100/70 transition-all duration-300 flex gap-2 px-4 py-3 text-black font-bold rounded-lg">
            <LaptopMinimal /> Book a demo
          </button>
        </div>
      </div>
      <div className="relative lg:bottom-20">
        <img src={hero} />
      </div>
    </div>
  );
}

export default Hero;
