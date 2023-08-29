import { ChangeEvent, useState } from "react";

export default function InputLogic() {
  const [hours, setHours] = useState<number | "">(0);
  const [minutes, setMinutes] = useState<number | "">(0);
  const [seconds, setSeconds] = useState<number | "">(0);

  function handleHoursChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value === "") {
      setHours("");
      return;
    }

    const hours = parseInt(event.target.value);

    if (hours > 23) {
      setHours(23);
    } else if (hours < 0) {
      setHours(0);
    } else {
      setHours(hours);
    }
  }

  function handleMinutesChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value === "") {
      setMinutes("");
      return;
    }

    const minutes = parseInt(event.target.value);

    if (minutes > 59) {
      setMinutes(59);
    } else if (minutes < 0) {
      setMinutes(0);
    } else {
      setMinutes(minutes);
    }
  }

  function handleSecondsChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value === "") {
      setSeconds("");
      return;
    }

    const seconds = parseInt(event.target.value);

    if (seconds > 59) {
      setSeconds(59);
    } else if (seconds < 0) {
      setSeconds(0);
    } else {
      setSeconds(seconds);
    }
  }

  function normalizeHours(event: ChangeEvent<HTMLInputElement>) {
    const hours = event.target.value;

    if (hours === "") {
      setHours(0);
    }
  }

  function normalizeMinutes(event: ChangeEvent<HTMLInputElement>) {
    const minutes = event.target.value;

    if (minutes === "") {
      setMinutes(0);
    }
  }

  function normalizeSeconds(event: ChangeEvent<HTMLInputElement>) {
    const seconds = event.target.value;

    if (seconds === "") {
      setSeconds(0);
    }
  }

  return {
    hours,
    minutes,
    seconds,
    handleHoursChange,
    handleMinutesChange,
    handleSecondsChange,
    normalizeHours,
    normalizeMinutes,
    normalizeSeconds,
  };
}
