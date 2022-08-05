import React from "react";
import { numberWithCommas } from "../utils/NumberUtils";
import { truncateString } from "../utils/StringUtils";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Hacker News",
    img: "https://d31ezp3r8jwmks.cloudfront.net/5cb2GfeGFCg149YnJUtfkeeE",
    description:
      "Learn to build a news app just like Hacker News with React, Ionic, and Firebase.",
    to: "",
  },
  {
    title: "Product Hunt",
    img: "https://d31ezp3r8jwmks.cloudfront.net/rlw4f6csosj61i9zdxxwuwcvbd0h",
    description:
      "Want to learn React? The best way is to build real startups. In this course, we'll build a curation app like Product Hunt, with React, Ionic, and Firebase. Released September 15, 2020. Join 5,318 students on SolidSail.",
    to: "",
  },
  {
    title: "Reddit",
    img: "https://d31ezp3r8jwmks.cloudfront.net/idlhu2mtimexz3tm74yb63puwir8",
    description:
      "Learn to build a messaging app for teams just like Slack with React, Ionic, and Firebase.",
    to: "",
  },
  {
    title: "Slack",
    img: "https://d31ezp3r8jwmks.cloudfront.net/r3uEPK7kBhouRXpv7QCuqbdK",
    description:
      "Learn to build a marketplace app just like Airbnb with React, Ionic, and Firebase.",
    to: "",
  },
  {
    title: "Airbnb",
    img: "https://d31ezp3r8jwmks.cloudfront.net/oo7DVtdYBQ3k9nqJJaCXbmcM",
    description:
      "Learn to build an on-demand app just like Uber with React, Ionic, and Firebase.",
    to: "",
  },
  {
    title: "Uber",
    img: "https://d31ezp3r8jwmks.cloudfront.net/ZeMJ7CSVLaPN66mUuZF5uVwn",
    description:
      "Learn to build a news app just like Hacker News with React, Ionic, and Firebase.",
    to: "",
  },
];
function Home() {
  const navigate = useNavigate();

  const students: string = numberWithCommas(6352);
  return (
    <div className="bg-white">
      <section className="py-6 ">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Master React by Building Real Startups
          </h1>
          <p className="text-xl font-small text-center">
            The fastest way to learn to code is to build real products. We share
            detailed tutorials designed to build lean, fullstack applications
            just like real startups.
          </p>
          <p className="text-lg font-small text-center">
            Join <span className="font-bold">{students}</span> students on
            Legato today!
          </p>

          <div className="w-2/3">
            <a
              href="checkout/cart/buy"
              className="w-full flex items-center justify-center px-4 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-blue-900 hover:bg-indigo-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1  ease-linear duration-300"
            >
              Get Access with Legato Membership
            </a>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48  w-full">
          <div className="bg-white rounded-lg p-12 flex flex-col items-center justify-center space-y-2 shadow-lg  md:w-full ">
            <p className="text-blue-600 font-bold">Starting at $5/mo</p>
            <h1 className="text-4xl font-medium leading-none text-center">
              Legato Membership
            </h1>
            <p className="text-lg font-small text-center text-gray-600">
              Legato Membership gives you access to all current and future
              courses through a monthly membership plan for{" "}
              <span className="font-bold">$5/month</span>.
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 py-2">
              <a
                href="checkout/cart/new"
                className="px-8 py-3 text-lg font-semibold rounded bg-blue-900 text-white hover:bg-indigo-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1  ease-linear duration-300"
              >
                Get started
              </a>
              <a
                href="/membership"
                className="px-8 py-3 text-lg font-semibold rounded bg-blue-900 text-white hover:bg-indigo-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1  ease-linear duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 w-full">
        <div className="container mx-auto flex flex-col p-4 space-y-8 md:p-10 md:px-24 xl:px-48  w-full">
          <h1 className="text-4xl font-medium">Courses</h1>
          <div className="flex  flex-wrap flex-row justify-evenly ">
            {courses.map((item) => (
              <div className="space-y-2 shadow-lg p-6 lg:w-1/4 mx-2 my-2 flex flex-col">
                <img className=" w-auto  rounded-lg " src={item.img} alt="" />
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p>{truncateString(item.description, 160)}</p>
                <button className=" px-2 py-2 border border-transparent rounded-md  shadow-sm text-base font-medium text-white  bg-blue-900 hover:bg-indigo-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1  ease-linear duration-300">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
