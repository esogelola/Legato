import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { validateEmail } from "../../utils/StringUtils";
import Input from "./Input";

interface AccountProps {
  buyLink: boolean;
}
function Account({ buyLink }: AccountProps) {
  const error = false;
  const [emailValid, setEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState(0);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handleNext = () => {
    if (stage == 0) {
      setStage(1);
    }
  };

  return (
    <section className="p-6 border rounded-md flex flex-col space-y-6">
      <div className="">
        <h1 className="text-lg font-semibold">Account</h1>
        <p>Create an account or login by entering your email below.</p>
      </div>

      <Input
        handleChange={handleEmailChange}
        error={error}
        label={"Email"}
        placeholder={"you@example.com"}
        type={"email"}
        name={"email"}
      />
      {stage > 0 && (
        <div className="ease-linear duration-300 space-y-6">
          <Input
            handleChange={handleEmailChange}
            error={error}
            label={"Full Name"}
            type={"text"}
            placeholder={"e.g. Jean-Luc Picard"}
            name={"fname"}
          />
          <Input
            handleChange={handleEmailChange}
            error={error}
            label={"Password"}
            type={"password"}
            placeholder={"123456"}
            name={"password"}
          />
        </div>
      )}
      <div className="w-full flex justify-end">
        <button
          disabled={!emailValid}
          onClick={handleNext}
          className={
            emailValid
              ? `p-3 text-center rounded-lg text-white bg-blue-900 hover:bg-indigo-700 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1  ease-linear duration-300`
              : `p-3 text-center rounded-lg text-white bg-gray-200 `
          }
        >
          {stage == 0 ? "Continue" : "Create Account"}
        </button>
      </div>
    </section>
  );
}

export default Account;
