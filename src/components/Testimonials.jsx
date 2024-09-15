import React from "react";

function Testimonials() {
  return (
    <div className="bg-[rgb(17,17,17)] gap-10  py-10 px-5 lg:px-52 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl ">
        Don't just take our word for it see the success
        <br /> stories from businesses just like yours.
      </h1>
      <div className="flex gap-5 justify-center flex-col lg:flex-row">
        <div className="bg-white rounded-xl justify-between lg:w-[300px] h-[300px] text-black flex flex-col gap-5 px-5 py-5">
          <h1 className="text-lg lg:text-md">
            “Our business has seen a significant increase in productivity since we started using the
            Growth app.”
          </h1>
          <div className="text-lg">
            <h1 className="font-bold">Katherine Smith</h1>
            <h1>Capodopera</h1>
          </div>
        </div>
        <div className="bg-white rounded-xl lg:w-[300px] h-[300px] justify-between  text-black flex flex-col gap-5 px-5 py-5">
          <h1 className="text-lg lg:text-md">
            “As a small business owner, it's important to have a tool that can help me keep track of
            everything. The Growth app has been a lifesaver for me, allowing me to manage my
            contacts, schedule appointments, and track progress all in one place..”
          </h1>
          <div className="text-lg">
            <h1 className="font-bold">Johnathan Lee</h1>
            <h1>Red Bolt</h1>
          </div>
        </div>
        <div className="bg-white rounded-xl lg:w-[300px] h-[300px] justify-between  text-black flex flex-col gap-5 px-5 py-5">
          <h1 className="text-lg lg:text-md">
            “The dashboards and reporting feature has provided valuable insights into our
            performance and helped us make data-driven decisions. It's a game changer for us.”
          </h1>
          <div className="text-lg">
            <h1 className="font-bold">David Wilson</h1>
            <h1>Slide</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
