"use client";

import { useMemo, useRef, useEffect } from "react";

import {cn} from "@/lib/utils";


export const OtpVerify = ({
  otp,
  setOtp,
  isInvalid,
  }: {
  otp: string;
  setOtp: (otp: string) => void;
  isInvalid: boolean;
}) =>{

  const otpRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    otpRef.current[0]?.focus();
  }, []);

  const OtpInput = useMemo(() => {
    const inputs = Array.from({ length: 4 }, (_, i) => (
      <input
        key={i}
        ref={(el) => {
          otpRef.current[i] = el; // Assign ref
        }}
        className={cn(
          "w-10 h-10 text-center text-2xl font-medium rounded-md shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 ",
          isInvalid ? "ring-2 ring-red-500 dark:ring-red-400" : "ring-2 ring-primary-500 dark:ring-primary-400"
        )}
        type={"text"}
        maxLength={1}
        value={otp[i] || ""} // Ensure otp has a value for the current index
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            const newOtp = otp.split(""); // Convert otp string to array
            newOtp[i] = "";
            setOtp(newOtp.join("")); // Update OTP state
            if (i > 0) {
              otpRef.current[i - 1]?.focus(); // Move focus to the previous input
            }
            e.preventDefault();
          }

          if (e.key === "Enter" && otp.length === 4 && otp[3] !== "") {
            // Handle OTP submission
            console.log("OTP submitted: ", otp);
          }
          const value = e.key;
          // Handle only numeric input
          if (/^\d$/.test(value)) {
            const newOtp = otp.split(""); // Convert otp string to array
            newOtp[i] = value; // Update the current index with the new value
            setOtp(newOtp.join("")); // Join array back to string and set OTP state

            // Automatically move to the next input if the current input is filled
            if (i < 3 && value !== "") {
              otpRef.current[i + 1]?.focus();
            }
          } else if (value === "") {
            // If the input is empty, allow the user to clear it
            const newOtp = otp.split("");
            newOtp[i] = ""; // Clear the value at the current index
            setOtp(newOtp.join("")); // Update state to reflect the empty value
          }
        }}
      />
    ));
    return inputs;
  }, [otp, isInvalid]);

  return (
    <div className={"w-full h-auto py-3 px-2 flex items-center justify-center"}>
      <div className={"flex flex-col space-y-4"}>
        <div className={"flex space-x-2 items-center justify-center"}>
          {OtpInput.map((item) => (
            <div key={item.key}>{item} </div>
          ))}
        </div>
      </div>
    </div>
  );
};
