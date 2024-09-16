import React from "react";

function Footer() {
  return (
    <div className="bg-black flex-col px-5 lg:flex-row gap-14 text-white flex py-20 justify-around">
      <div className="text-5xl text-center">Growth</div>
      <div className="flex justify-between  gap-10">
        <div className="flex flex-col gap-2 [&>p]:text-white/80 lg:text-lg">
          <h1 className="font-bold mb-3">Company</h1>
          <p>About Us</p>
          <p>Our Process</p>
          <p>Join Our Team</p>
        </div>
        <div className="flex flex-col gap-2 [&>p]:text-white/80 lg:text-lg">
          <h1 className="font-bold mb-3">Resources</h1>
          <p>News</p>
          <p>Research</p>
          <p>Recent Projects</p>
        </div>
        <div className="flex flex-col gap-2 [&>p]:text-white/80 lg:text-lg">
          <h1 className="font-bold mb-3">Contact</h1>
          <p>hello@growthapp.com</p>
          <p>twitter</p>
          <p>Whatapp</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
