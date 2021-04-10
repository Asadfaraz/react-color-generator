import React, { useState } from "react";
import classes from "./colors.module.css";

const ColorsSection = (props) => {
  const colors = props.colors;
  return (
    <>
      {colors.map((colr, index) => {
        const { rgb, weight, hex } = colr;

        let rgbToReal = rgb.join(",");
        let completeColor = `rgb(${rgbToReal})`;
        let hexColor = `#${hex}`;
        return (
          <section
            key={index}
            style={{
              backgroundColor: completeColor,
              color: index >= 10 && "white",
            }}
          >
            <p>{weight}%</p>
            <p>{hexColor}</p>
          </section>
        );
      })}
    </>
  );
};

export default ColorsSection;
