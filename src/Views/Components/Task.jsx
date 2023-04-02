import { React } from "react";
import TouchableTextBox from "./TouchableTextBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
  const registerTask = () => {
    props.setRegisteredTask(props.task);
  };

  const deleteTask = () => {
    props.deleteTask(props.task);
  };

  let { taskName } = props.task;

  const { topPriority } = props.task;

  taskName = <span>{taskName}</span>;

  if (topPriority === true) {
    taskName = (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#506cf7" }} />
        <span> {taskName}</span>
      </span>
    );
  }

  // dynamically control the height of the textbox based on the size of the word
  // with a minimum of 3em

  return (
    <div>
      <TouchableTextBox
        info={taskName}
        onClick={props.deleteMode ? deleteTask : registerTask}
        style={{
          ...Styles.TouchableTextBoxStyle,
          borderColor: props.currentRegisteredTask ? "red" : "#3498db",
        }}
      />
    </div>
  );
};

const Styles = {
  TouchableTextBoxStyle: {
    fontWeight: "bold",
  },
};

export default Task;
