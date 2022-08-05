import React from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import legatoLogo from "../assets/legato.png";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const links = [
  { name: "Courses", to: "/courses" },
  { name: "Membership", to: "/membership" },
  { name: "Certificate", to: "/certificate" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      <div className="border-b-2 border-gray-100">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img className="h-10 w-auto sm:h-15 " src={legatoLogo} alt="" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* TODO: Create responsive menu  */}
          {open && (
            <div className="relative">
              {" "}
              <Link
                to="signin"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-indigo-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1  ease-linear duration-300"
              >
                Login
              </Link>
            </div>
          )}
          <nav className="hidden md:flex space-x-10">
            {links.map((item, key) => (
              <Link
                key={key}
                to={item.to}
                className="text-base font-medium text-gray-800 hover:text-gray-900 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <Link
              to="signin"
              className="whitespace-nowrap text-base font-medium text-gray-800 hover:text-gray-900"
            >
              Login
            </Link> */}
            <Link
              to="signin"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-indigo-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1  ease-linear duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
