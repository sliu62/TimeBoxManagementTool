import React, { useState, useEffect } from "react";

import TaskList from "../Components/TaskList";

import Schedule from "../Components/Schedule";
import Header from "../Components/Header";

import scheduleSchma from "../../Resources/data/scheduleSchema.json";

const Home = () => {
  const [registeredTask, setRegisteredTask] = useState({
    taskName: "",
    topPriority: false,
  });

  // an array of objects that stores each time slot with corresponding task
  const [timeslots, setTimeSlots] = useState([]);

  // load the schedule schema from the json file then render the schema
  useEffect(() => {
    setTimeSlots(scheduleSchma);
  }, []);

  return (
    <div>
      <Header />
      <div style={Styles.frame}>
        <TaskList
          setRegisteredTask={setRegisteredTask}
          registeredTask={registeredTask}
          timeslots={timeslots}
        />

        <Schedule
          registeredTask={registeredTask}
          timeslots={timeslots}
          setTimeSlots={setTimeSlots}
        />
      </div>
    </div>
  );
};

const Styles = {
  frame: {
    display: "flex",
    justifyContent: "space-around",
    alignContent: "space-around",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    paddingRight: "1.5em",
    flexWrap: "wrap",
  },
};

export default Home;
