import { useState } from "react";

function FAQ() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <div className="flex flex-col py-20 justify-center items-center gap-5 bg-zinc-100">
      <h1 className="text-4xl">Frequently Asked Questions</h1>
      <div className="flex mt-10 bg-zinc-200 p-5 rounded-lg gap-5 font-bold items-center">
        <h1 className="bg-blue-500 px-5 py-3 text-white rounded-md">All</h1>
        <h1>Getting Started</h1>
        <h1>Pricing</h1>
      </div>
      <div className="mt-10">
        <div className="flex mb-10 justify-around lg:justify-center font-bold items-center text-lg lg:text-2xl gap-5">
          <h1 className="lg:w-1/2 px-5">
            How does the contact management feature help me keep track of clients and partners?
          </h1>
          {!show ? (
            <button onClick={() => setShow(!show)} className="text-5xl">
              +
            </button>
          ) : (
            <button onClick={() => setShow(!show)} className="text-5xl">
              -
            </button>
          )}
        </div>
        {show && (
          <p className="mt-10  text-center text-lg lg:w-1/2 mx-auto">
            Keep track of your contacts, gain valuable insights, analyse live data and performance
            metrics.
          </p>
        )}
        <hr />
        <div className="flex justify-around lg:justify-center font-bold items-center text-lg lg:text-2xl gap-5 my-10">
          <h1 className="lg:w-1/2 px-5">
            Can I customize the dashboards and reporting feature to display the metrics that are
            most important to my business?
          </h1>
          {!show2 ? (
            <button onClick={() => setShow2(!show2)} className="text-5xl">
              +
            </button>
          ) : (
            <button onClick={() => setShow2(!show2)} className="text-5xl">
              -
            </button>
          )}
        </div>
        {show2 && (
          <p className="mt-10 px-5 text-center text-lg lg:w-1/2 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad culpa enim blanditiis rem
            ipsum aliquam, unde iste fugit praesentium eos?
          </p>
        )}
        <hr />
      </div>
    </div>
  );
}

export default FAQ;
