import React from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronsLeft,
  ArrowLeft,
  ArrowRight,
  Trash,
  ChevronRight,
  Check,
} from "react-feather";

export const CheckBtn = ({ handleClick, type }) => {
  return (
    <button className={type && type} onClick={handleClick}>
      <Check size="12px" />
    </button>
  );
};

export const ChevronDownBtn = ({ handleClick, type }) => {
  return (
    <button
      style={{ backgroundColor: "white" }}
      className={type && type}
      onClick={handleClick}
    >
      <ChevronDown size="12px" />
    </button>
  );
};

export const ChevronUpBtn = ({ handleClick, type }) => {
  return (
    <button
      style={{ backgroundColor: "white" }}
      className={type && type}
      onClick={handleClick}
    >
      <ChevronUp size="12px" />
    </button>
  );
};

export const ChevronsLeftBtn = ({ handleClick, type }) => {
  return (
    <button className={type && type} onClick={handleClick}>
      <ChevronsLeft size="12px" />
    </button>
  );
};

export const ChevronRightBtn = ({ handleClick, type }) => {
  return (
    <button className={type && type} onClick={handleClick}>
      <ChevronRight size="12px" />
    </button>
  );
};

export const ArrowLeftBtn = ({ handleClick, type }) => {
  return (
    <button className={type && type} onClick={handleClick}>
      <ArrowLeft size="12px" />
    </button>
  );
};

export const ArrowRightBtn = ({ handleClick, type }) => {
  return (
    <button className={type && type} onClick={handleClick}>
      <ArrowRight size="12px" />
    </button>
  );
};

export const TrashBtn = ({ handleClick, type }) => {
  return (
    <button
      style={{ backgroundColor: "white" }}
      className={type && type}
      onClick={handleClick}
    >
      <Trash size="12px" />
    </button>
  );
};
