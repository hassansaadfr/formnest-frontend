import React from "react";
import { Loader } from "react-feather";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 400,
        alignItems: "center",
      }}
    >
      <Loader />
      <p>Chargement</p>
    </div>
  );
};

export default Loading;
