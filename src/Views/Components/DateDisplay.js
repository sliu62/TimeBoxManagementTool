import React, { useState } from "react";
import CalendarModal from "./CalendarModal";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const DateDisplay = () => {
  const [date, setDate] = useState(new Date());

  const [showCalendar, setShowCalendar] = useState(false);

  const openCalendar = () => {
    setShowCalendar(true);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <div>
      <div style={Styles.structure}>
        <span style={Styles.date}>Date: {date.toLocaleDateString()}</span>
        <Button variant="primary" onClick={openCalendar}>
          <FontAwesomeIcon style={Styles.buttonSize} icon={faCalendarDays} />
        </Button>
      </div>
      <CalendarModal
        date={date}
        setDate={setDate}
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
        closeCalendar={closeCalendar}
      />
    </div>
  );
};

const Styles = {
  structure: {
    textAlign: "center",
    paddingBottom: "2.5em",
  },
  date: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5em",
    paddingRight: "0.5em",
  },
  buttonSize: {
    fontSize: "1em",
  },
};

export default DateDisplay;
