import React from "react";
import { Table } from "react-bootstrap";
import TouchableTextBox from "./TouchableTextBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Schedule = (props) => {
  // if a task has been selected from the task side, add it to the time slot, and it will append to the state
  const registerTask = (event) => {
    if (props.registeredTask !== null) {
      const updatedSchedule = props.timeslots.map((schedule) => {
        if (schedule.time === event.currentTarget.name) {
          return { ...schedule, task: props.registeredTask };
        }
        return schedule;
      });
      props.setTimeSlots(updatedSchedule);
    }
  };

  // render the list of schedule when first load or being updated
  const renderSchedule = (period, timeBelongs) => {
    return props.timeslots.map((schedule) => {
      if (schedule.period === period && schedule.timeBelongs === timeBelongs) {
        let taskDisplay = <span>{schedule.task.taskName}</span>;

        if (schedule.task.topPriority === true) {
          taskDisplay = (
            <span>
              <FontAwesomeIcon icon={faStar} style={{ color: "#506cf7" }} />
              <span> {schedule.task.taskName}</span>
            </span>
          );
        }

        return (
          <tr key={schedule.time}>
            <th>{schedule.time}</th>
            <td>
              <TouchableTextBox
                name={schedule.time}
                info={taskDisplay}
                onClick={registerTask}
                style={Styles.TouchableTextBoxStyle}
              />
            </td>
          </tr>
        );
      }
    });
  };

  return (
    <div style={Styles.mainFrame}>
      <div style={Styles.frame}>
        <Table style={Styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>{renderSchedule("00", "Morning")}</tbody>
        </Table>
        <Table style={Styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>{renderSchedule("30", "Morning")}</tbody>
        </Table>
      </div>
      <div style={Styles.frame}>
        <Table style={Styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>{renderSchedule("00", "Afternoon")}</tbody>
        </Table>
        <Table style={Styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>{renderSchedule("30", "Afternoon")}</tbody>
        </Table>
      </div>
    </div>
  );
};

const Styles = {
  frame: {
    // border: "0.2em solid black",
    // borderRadius: "1em",
    //width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    flexWrap: "wrap",
  },
  mainFrame: {
    // border: "0.2em solid black",
    // borderRadius: "1em",
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    flexWrap: "wrap",
    flex: "2",
  },
  table: {
    width: "20%",
    textAlign: "center",
    fontSize: "1em",
  },
  TouchableTextBoxStyle: {
    width: "15em",
    fontSize: "1em",
    fontWeight: "bold",
  },
  scheduleTitle: {
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default Schedule;
