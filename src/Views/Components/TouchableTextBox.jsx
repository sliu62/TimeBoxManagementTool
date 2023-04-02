import { React } from "react";

const TouchableTextBox = (props) => {
  return (
    <div>
      <button
        name={props.name ? props.name : ""}
        style={{
          ...Styles.transparentButton,
          ...props.style,
        }}
        onClick={
          props.onClick
            ? props.onClick
            : () => {
                console.log("No Available Click Event");
              }
        }
      >
        {props.info}
      </button>
    </div>
  );
};

const Styles = {
  transparentButton: {
    cursor: "pointer",
    border: "0.15em solid #3498db",
    borderRadius: "1em",
    backgroundColor: "transparent",
    minHeight: "3em",
    color: "black",
    fontSize: "1em",
    minWidth: "100%",
    // wordBreak: "break-word",

    // boxShadow: "0 6px 6px rgba(0, 0, 0, 0.6)",
  },
};

export default TouchableTextBox;
