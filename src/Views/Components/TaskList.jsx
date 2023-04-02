import React, { useState } from "react";
import Task from "./Task";
import TouchableTextBox from "./TouchableTextBox";
import TaskModal from "./TaskModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEraser,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import DateDisplay from "./DateDisplay";

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [deleteMode, setDeleteMode] = useState(false);

  const displayModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // register the task to be empty string, select a cell, and it will remove the registered task on the schedule
  const eraseTask = () => {
    props.setRegisteredTask({
      taskName: "",
      topPriority: false,
    });
  };

  // delete a current task from the tasks list
  const deleteTask = (currentTask) => {
    props.setRegisteredTask({
      taskName: "",
      topPriority: false,
    });
    const updatedList = tasks.filter(
      (task) => task.taskName !== currentTask.taskName
    );
    setTasks(updatedList);
    setDeleteMode();
  };

  const triggerDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  // load the mock data when it loads the page for the first time
  // useEffect(() => {
  //   setTasks(require("../../Resources/data/tasks.json"));
  // }, []);

  // useEffect(() => {}, [props.setRegisteredTask]);

  const renderTask = tasks.map((task) => {
    return (
      <li key={task.taskName} style={Styles.liFormat}>
        <Task
          task={task}
          setRegisteredTask={props.setRegisteredTask}
          currentRegisteredTask={
            props.registeredTask.taskName === task.taskName ? true : false
          }
          deleteMode={deleteMode}
          deleteTask={deleteTask}
        />
      </li>
    );
  });

  return (
    <div style={Styles.frame}>
      <div style={Styles.childFlexControl}>
        <div style={Styles.displayDate}>
          <DateDisplay />
        </div>
        {tasks.length <= 0 && (
          <p
            style={{ fontSize: "1em", fontWeight: "bold", textAlign: "center" }}
          >
            There is currently no task, click ADD NEW TASK to add some!
          </p>
        )}
        <ul style={Styles.ulformat}>{renderTask}</ul>
        <TouchableTextBox
          style={{
            marginBottom: "1em",
            fontSize: "1.25em",
            fontWeight: "bold",
          }}
          info={
            <span style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                icon={faPlus}
                style={{ color: "#506cf7" }}
                fontSize="1.5em"
              />
              <span> Add New Task</span>
            </span>
          }
          onClick={displayModal}
        />
        <TouchableTextBox
          style={{
            marginBottom: "1em",
            fontSize: "1.25em",
            fontWeight: "bold",
            borderColor:
              props.registeredTask.taskName === "" ? "red" : "#3498db",
          }}
          info={
            <span style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                icon={faEraser}
                style={{ color: "#506cf7" }}
                fontSize="1.5em"
              />
              <span> Erase Tasks</span>
            </span>
          }
          onClick={eraseTask}
        />
        <TouchableTextBox
          style={{
            marginBottom: "1em",
            fontSize: "1.25em",
            fontWeight: "bold",
            borderColor: deleteMode ? "red" : "#3498db",
          }}
          info={
            <span style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ color: "#506cf7" }}
                fontSize="1.5em"
              />
              <span> Delete Tasks</span>
            </span>
          }
          onClick={triggerDeleteMode}
        />
        <TaskModal
          show={showModal}
          updateTask={addTask}
          closeModal={closeModal}
          newTask={true}
        />
      </div>
    </div>
  );
};

// the width takes 35% of the screen while the flex content will take 85% of the 35%
// in the Task component, the task component will take 100% of the 85%
const Styles = {
  liFormat: {
    paddingBottom: "1em",
  },
  frame: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    flex: "1",
    minWidth: "20em",
  },
  ulformat: {
    listStyleType: "none",
    padding: "0",
  },
  childFlexControl: {
    flexBasis: "50%",
  },
};

export default TaskList;
