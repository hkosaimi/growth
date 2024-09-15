import React from "react";
import { Check } from "lucide-react";
function Pricing() {
  return (
    <div className="flex justify-center  flex-col py-10 items-center gap-5">
      <h1 className="text-4xl ">Pricing</h1>
      <p className="text-lg mb-5 px-10">
        Start free and scale while you grow. No hidden fees. Unlimited users for free.
      </p>
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="w-[400px] px-5 py-10 bg-zinc-100 rounded-lg flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Simple</h1>
          <p>
            Keep track of your contacts, gain valuable insights, analyse live data and performance
            metrics.
          </p>
          <div className="mt-5">
            <h1 className="text-3xl">
              Free <span className="text-lg">*No credit card needed</span>
            </h1>
          </div>
          <hr />
          <p className="flex gap-1">
            <Check /> Real-Time Monitoring
          </p>
          <p className="flex gap-1">
            <Check />
            Track key performance indicators
          </p>
          <p className="flex gap-1">
            <Check />
            Schedule appointments
          </p>
          <p className="flex gap-1">
            <Check />
            Organize, delegate and keep track of tasks
          </p>
          <button className="bg-blue-500 hover:bg-blue-500/70 transition-all duration-300 px-4 py-3 text-white font-bold rounded-lg">
            Get started
          </button>
        </div>
        <div className="w-[400px] px-5 py-10 text-white bg-black rounded-lg flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Premium</h1>
          <p>
            Keep track of your contacts, gain valuable insights, analyse live data and performance
            metrics.
          </p>
          <div className="mt-5">
            <h1 className="text-3xl">
              50 KD <span className="text-lg">/month</span>
            </h1>
          </div>
          <hr />
          <p>Everything from the free plan plus:</p>
          <p className="flex gap-1">
            <Check /> Data-driven decisions
          </p>
          <p className="flex gap-1">
            <Check />
            Data visualization
          </p>
          <p className="flex gap-1">
            <Check />
            Schedule appointments
          </p>

          <button className="bg-blue-500 hover:bg-blue-500/70 transition-all duration-300 px-4 py-3 text-white font-bold rounded-lg">
            Get started
          </button>
        </div>
      </div>
      <h1 className="text-lg px-5 text-center">
        All prices are in KWD and charged per month with applicable taxes added at checkout.
      </h1>
    </div>
  );
}

export default Pricing;
