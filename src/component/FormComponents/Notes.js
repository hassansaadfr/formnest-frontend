import React, { useState } from "react";

const noteStyle = (value, selected, notEditable) => {
  return {
    borderWidth: "0.1px",
    borderColor: "#63929e",
    borderStyle: "solid",
    padding: "10px",
    textAlign: "center",
    cursor: notEditable ? "default" : "pointer",
    borderBottomLeftRadius: value === "1" ? 6 : 0,
    borderTopLeftRadius: value === "1" ? 6 : 0,
    borderBottomRightRadius: value === "5" ? 6 : 0,
    borderTopRightRadius: value === "5" ? 6 : 0,
    backgroundColor: selected === value ? "#F0A097" : "transparent",
  };
};

const Notes = ({ selectedValue, notEditable, handleChange }) => {
  const [selected, setSelected] = useState(selectedValue);

  const setSelectedValue = (val) => {
    if (!notEditable) {
      setSelected(val);
      handleChange(val);
    }
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={noteStyle("1", selected, notEditable)}
        onClick={() => setSelectedValue("1")}
      >
        1
      </div>
      <div
        style={noteStyle("2", selected, notEditable)}
        onClick={() => setSelectedValue("2")}
      >
        2
      </div>
      <div
        style={noteStyle("3", selected, notEditable)}
        onClick={() => !notEditable && setSelectedValue("3")}
      >
        3
      </div>
      <div
        style={noteStyle("4", selected, notEditable)}
        onClick={() => setSelectedValue("4")}
      >
        4
      </div>
      <div
        style={noteStyle("5", selected, notEditable)}
        onClick={() => setSelectedValue("5")}
      >
        5
      </div>
    </div>
  );
};

Notes.defaultProps = {
  selected: null,
  notEditable: true,
};

export default Notes;
