import React from "react";

const CardContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "300px 300px 300px 300px",
        gridGap: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
