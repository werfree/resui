import React from "react";

const getButtonClass = (type: string | undefined) => {
  switch (type) {
    case "outline":
      return "btn-outline";
    case "green":
      return "btn-success";
    case "yellow":
      return "btn-warning";
    case "red":
      return "btn-error";
    case "blue":
    case "normal":
    default:
      return "";
  }
};
type PropType = {
  type?: "outline" | "normal";
  color?: "blue" | "green" | "yellow" | "red";
};
function Button({ type, color }: PropType) {
  const className = getButtonClass(type) + " " + getButtonClass(color);
  console.log(className);
  return <button className={`btn ${className}`}>Button</button>;
}

export default Button;
