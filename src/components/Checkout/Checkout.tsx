import React from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import { useState } from "react";
import Account from "./Account";
import Summary from "./Summary";
import Payment from "./Payment";

function Checkout() {
  let location = useLocation().pathname;
  // Check if user is logged in
  // if loggedin change location to
  const [currentState, setState] = useState(0);
  const buyLink = location.includes("buy");
  return (
    <div className="bg-white container mx-auto flex flex-col p-4 space-y-8 md:p-10 md:px-24 xl:px-48  w-full">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <Account buyLink={buyLink} />
      <Summary />
      {buyLink && <Payment />}
    </div>
  );
}

export default Checkout;
