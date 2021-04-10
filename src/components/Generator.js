import React, { useState } from "react";
import classes from "./generator.module.css";
import Values from "values.js";
import ColorSection from "./ColorsSection";

const Generator = () => {
  //   useState for value of input
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [colors, setcolors] = useState([]);

  // Function when input focus
  const inputFocus = () => {
    setInputValue("#");
  };

  //   When input color changed function
  const inputColorChange = (e) => {
    setInputValue(e.target.value);
  };

  //   Handling submit button click
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

    try {
      let color = new Values(inputValue).all(10);
      setcolors(color);
      console.log("color: ", color);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  // ********************** Returns
  return (
    <main>
      <section className={classes.headSec}>
        <header>
          <h2>Generate a Color</h2>
        </header>

        <form className={classes.inputSec}>
          <input
            type="text"
            placeholder="#26C485"
            value={inputValue}
            onFocus={inputFocus}
            onChange={inputColorChange}
            className={isError ? classes.error : null}
          />

          <button type="button" onClick={handleSubmit}>
            Generate
          </button>
        </form>
      </section>

      {/* mapping on colors array */}
      <section className={classes.colors}>
        {/* {colors.map((colr, index) => {
          const { rgb, weight, hex } = colr;
          let rgbToReal = rgb.join(",");
          let completeColor = `rgb(${rgbToReal})`;
          let hexColor = `#${hex}`;
          return (
            <section key={index} style={{ backgroundColor: completeColor }}>
              <p>{weight}%</p>
              <p>{hexColor}</p>
            </section>
          );
        })} */}
        <ColorSection colors={colors} />
      </section>
    </main>
  );
};

export default Generator;
