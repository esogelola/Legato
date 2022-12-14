import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  label: string;
  type: string;
  placeholder: string;
  name: string;
}
function Input({
  handleChange,
  error,
  label,
  type,
  placeholder,
  name,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
          className={
            error
              ? `block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md`
              : `shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md`
          }
          placeholder={placeholder}
          defaultValue=""
          aria-invalid="true"
          aria-describedby="email-error"
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {type == "password" && (
        <p className="mt-2 text-sm text-gray-600" id="email-error">
          Minimum 6 characters
        </p>
      )}
    </div>
  );
}

export default Input;
