import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import Calendar from "react-calendar";

const CalendarModal = (props) => {
  return (
    <Modal show={props.showCalendar} onHide={props.closeCalendar} centered>
      <Modal.Header>
        <Modal.Title>Select a date</Modal.Title>
      </Modal.Header>
      <ModalBody style={Styles.calendar}>
        <Calendar
          onChange={props.setDate}
          showWeekNumbers
          value={props.date}
          minDate={new Date()}
        />
      </ModalBody>
    </Modal>
  );
};

const Styles = {
  calendar: {
    display: "flex",
    justifyContent: "center",
  },
};

export default CalendarModal;
