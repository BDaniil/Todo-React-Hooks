import * as React from "react";
import { useState, useEffect } from "react";
import { Temporal } from "@js-temporal/polyfill";

import "../styles/Clock.css"

export default function Clock() {
  const [currentTime, setCurrentTime] = useState("");
  const [selectedClient, setSelectedClient] = useState("Europe/Chisinau");

  const checkLocation = localStorage.getItem("Location");

  useEffect(() => {
    updateTime();
    localStorage.setItem("Location", JSON.stringify(selectedClient));
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedClient]);

  useEffect(() => {
    setSelectedClient(JSON.parse(checkLocation));
  }, []);

  function updateTime() {
    let zonedtime = Temporal.Now.zonedDateTimeISO();
    let changeZone = zonedtime.withTimeZone(selectedClient);
    let time = changeZone.toPlainTime();
    setCurrentTime(time.round("second").toString());
  }

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
  }

  return (
    <div className="Clock">
      <h1>{currentTime}</h1>

      <select
        name="pets"
        id="pet-select"
        value={selectedClient}
        onChange={handleSelectChange}
      >
        <option value="Europe/Chisinau">Europe/Chisinau</option>
        <option value="Europe/Paris">Europe/Paris</option>
        <option value="America/Los_Angeles">America/Los_Angeles</option>
        <option value="Asia/Singapore">Asia/Singapore</option>
        <option value="Asia/Tokyo">Asia/Tokyo</option>
        <option value="Asia/Kolkata">Asia/Kolkata</option>
      </select>
    </div>
  );
}
