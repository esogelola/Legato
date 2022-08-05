import { Listbox } from "@headlessui/react";
import React from "react";
import { useState } from "react";

function Payment() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="p-6 border rounded-md flex flex-col space-y-6">
      <div className="space-y-6">
        <h1 className="text-lg font-semibold">Payment</h1>
        {!expanded && (
          <div className="flex flex-row ">
            <div className="w-full">
              <p className="text-gray-500 text-md font-semibold">
                Select your payment method of choice.
              </p>
            </div>

            <div className="w-full flex justify-end">
              <button
                className={`p-3 text-center text-gray-500 focus:ring-1 focus:ring-gray-300 ease-linear duration-100 rounded-lg `}
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
      {expanded && (
        <>
          <div className="border-b-2 my-4"></div>
          <div className="w-full flex justify-end">
            <button
              className={`p-3 text-center rounded-lg text-white bg-gray-900 hover:bg-black `}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Payment;
