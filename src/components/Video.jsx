import React from "react";

function Video() {
  return (
    <div className="flex justify-center items-center flex-col gap-7 bg-black py-10 text-white">
      <h1 className="text-4xl px-5 text-start leading-[50px]">
        See how it works and get started in less <br /> than 2 minutes
      </h1>
      <img src="/images/video.png" alt="" />
      <button className="bg-blue-500 hover:bg-blue-500/70 transition-all duration-300 px-4 py-3 text-white font-bold rounded-lg">
        Get Started
      </button>
    </div>
  );
}

export default Video;
