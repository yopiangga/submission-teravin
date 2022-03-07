import React from "react";
import { useNavigate } from "react-router-dom";

export function Btn1Active(props) {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(props.path);
  };
  return (
    <button
      onClick={routeChange}
      className="text-grey-900 bg-gray-200 rounded-md border text-xs font-medium px-5 h-8 flex gap-3 items-center"
    >
      {props.icon}
      {props.title}
    </button>
  );
}
