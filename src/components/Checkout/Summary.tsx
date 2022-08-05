import { Listbox } from "@headlessui/react";
import React from "react";
import { useState } from "react";
const paymentTerms = [
  { id: 1, name: "$5/mo", term: "monthly" },
  { id: 2, name: "$50/yr", term: "annual", unavailable: true },
];
function Summary() {
  const [selectedTerm, setSelectedTerm] = useState(paymentTerms[0]);
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="p-6 border rounded-md flex flex-col space-y-6">
      <div className="space-y-6">
        <h1 className="text-lg font-semibold">Summary</h1>
        {!expanded && (
          <div className="flex flex-row">
            <div className="flex flex-wrap items-center bulleted w-1/2">
              <span className="text-gray-500 text-md font-semibold">
                Legato Free
              </span>
              <span className="text-gray-500 text-sm">Free</span>
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
        {expanded && (
          <article className="mb-4">
            <div className="flex justify-between align-middle">
              <div className="flex justify-center align-middle">
                <div className="bg-gray-100 w-12 h-12 rounded-lg items-center justify-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-slate-600"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0a1 1 0 011 1v2a1 1 0 01-2 0V1a1 1 0 011-1zM3 3a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1h-2a1 1 0 110-2h2a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3V4a3 3 0 013-3h2a1 1 0 010 2H3zm2.818 2.817C6.394 5.242 7.176 5 8 5c.821 0 1.603.238 2.18.813.578.576.82 1.36.82 2.187 0 .825-.238 1.609-.815 2.186C9.607 10.763 8.824 11 8 11c-.827 0-1.61-.241-2.186-.818C5.24 9.605 5 8.822 5 8c0-.825.242-1.607.818-2.183zm1.414 1.415C7.125 7.34 7 7.558 7 8c0 .445.124.663.23.77.106.105.323.23.77.23.45 0 .667-.125.77-.229.105-.104.23-.32.23-.771 0-.448-.125-.665-.231-.77C8.663 7.124 8.445 7 8 7c-.442 0-.66.124-.768.232z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <header>
                    <span className="text-gray-600 font-bold">
                      Legato Membership
                    </span>
                    <div className="flex flex-wrap items-center bulleted ">
                      <span className="text-gray-500 text-sm">$5.00/mo</span>
                      <span className="text-gray-500 text-sm">$50.00/yr</span>
                      <span className="text-gray-500 text-sm">3 products</span>
                    </div>
                  </header>
                </div>
              </div>
              <div className="text-sm text-gray-300">
                <div className="form-group">
                  <label className="sr-only">Payment</label>
                  <Listbox value={selectedTerm} onChange={setSelectedTerm}>
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md  border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      {selectedTerm.name}
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {paymentTerms.map((term) => (
                        <Listbox.Option
                          key={term.id}
                          value={term}
                          disabled={term.unavailable}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-400"
                            }`
                          }
                        >
                          {term.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
              </div>
            </div>
          </article>
        )}
        {expanded && (
          <>
            <div className="border-b-2 my-4"></div>
            <div className="mt-5 sm:flex sm:items-center">
              <div className="w-full ">
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                  placeholder="Discount code"
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-3 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Apply
              </button>
            </div>
          </>
        )}
      </div>
      {expanded && (
        <>
          <div className="border-b-2 my-4"></div>
          <div className="w-full flex justify-end">
            <button
              className={`p-3 text-center rounded-lg text-white bg-gray-900 hover:bg-black `}
            >
              Save & Continue
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Summary;
