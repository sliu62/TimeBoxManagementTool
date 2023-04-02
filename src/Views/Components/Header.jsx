import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div style={styles.titleDisplay}>
        <FontAwesomeIcon style={styles.imageSize} icon={faBusinessTime} />
        <p style={styles.titleFont}>My Time Box - Schedule Management Tool</p>
      </div>
      <div style={styles.barColor}></div>
    </div>
  );
};

const styles = {
  titleDisplay: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "1em",
  },
  imageSize: {
    width: "5rem",
    height: "5rem",
    marginRight: "2em",
    color: "#2d64e3",
  },
  titleFont: {
    fontSize: "3rem",
    color: "#2d64e3",
    fontWeight: "bold",
  },
  barColor: {
    // backgroundColor: "#506cf7",
    borderStyle: "solid",
    borderWidth: "0.5rem",
    color: "#2d64e3",
  },
};

export default Header;
