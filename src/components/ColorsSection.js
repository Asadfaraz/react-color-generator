import React, { useState, useEffect } from "react";
import classes from "./colors.module.css";

const ColorsSection = (props) => {
  const { rgb, weight, hex } = props.color;
  const index = props.index;
  console.log(index, " index");

  // Converting raw rgb to rgb and hex to #hex
  let rgbToReal = rgb.join(",");
  let completeColor = `rgb(${rgbToReal})`;
  let hexColor = `#${hex}`;

  // usestate for is mouse over so button appear on the section
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  // mouse over on section function
  const sectionMouseHover = () => {
    // console.log("mover Hover!!!");
    setIsMouseOver(true);
  };

  const sectionMouseLeave = () => {
    setIsMouseOver(false);
  };

  const copyClickHandle = () => {
    setIsAlert(true);
    setIsMouseOver(false);

    navigator.clipboard.writeText(hexColor);
  };
  // handling copied text to disappear after 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isAlert]);

  // *************** Returns
  return (
    <>
      <section
        style={{
          backgroundColor: completeColor,
          color: index >= 10 && "white",
        }}
        className={classes.colorSection}
        onMouseOver={sectionMouseHover}
        onMouseLeave={sectionMouseLeave}
        onClick={copyClickHandle}
      >
        <p>{weight}%</p>
        <p>{hexColor}</p>
        {isMouseOver && <p className={classes.copyPara}>Click to copy</p>}
        {isAlert && <p>Copied</p>}
      </section>
    </>
  );
};

export default ColorsSection;
