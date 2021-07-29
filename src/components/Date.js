import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Date.css";

function DateInput() {
  const firstRender = useRef(true);
  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (!date || firstRender.current) {
      firstRender.current = false;

      return;
    }
    let time = date.getTime();
    time += 3600000 * duration;
    setNewDate(new Date(time));
  }, [duration]);

  useEffect(() => {
    if (!newDate || !date || firstRender.current) {
      firstRender.current = false;
      return;
    }
    let time = (newDate.getTime() - date.getTime()) / 3600000;
    setDuration(time);
  }, [newDate]);

  const handleChange = (e) => {
    let value = e.target.value;
    setDuration(+value.match(/[0-9]+/));
  };

  return (
    <div className="dates">
      <h1>Hello</h1>
      <h2>Date time picker</h2>
      <label htmlFor="fromDate">from date:</label>
      <DateTimePicker disableClock={true} value={date} onChange={setDate} />
      <label htmlFor="duration">Duration in hours:</label>
      <input
        type="text"
        value={duration}
        name="duration"
        id="duration"
        className="duration"
        onChange={handleChange}
      />
      <label htmlFor="toDate">to date:</label>

      <DateTimePicker
        value={newDate}
        disableClock={true}
        onChange={setNewDate}
      />
    </div>
  );
}

export default DateInput;
