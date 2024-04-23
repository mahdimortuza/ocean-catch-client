"use client";
import { useEffect, useState } from "react";

const CountdownClock = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-06-30") - +new Date();
    let timeLeft: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    } = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div>
      <h1 className="text-2xl text-red-500">Offer Ends in:</h1>

      <div className="flex gap-1 mt-4">
        <div className="bg-[#505050] px-2 py-1 text-white rounded-md">
          <span>
            <span className="text-xl font-bold">
              {addLeadingZero(timeLeft.days)}
            </span>{" "}
            <span>Day</span>
          </span>
        </div>

        <div className="bg-[#505050] px-2 py-1 text-white rounded-md">
          <span>
            <span className="text-xl font-bold">
              {addLeadingZero(timeLeft.hours)}
            </span>{" "}
            <span>Hour</span>
          </span>
        </div>

        <div className="bg-[#505050] px-2 py-1 text-white rounded-md">
          <span>
            <span className="text-xl font-bold">
              {addLeadingZero(timeLeft.minutes)}
            </span>{" "}
            <span>Min</span>
          </span>
        </div>

        <div className="bg-[#505050] px-2 py-1 text-white rounded-md">
          <span>
            <span className="text-xl font-bold">
              {addLeadingZero(timeLeft.seconds)}
            </span>{" "}
            <span>Sec</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownClock;
