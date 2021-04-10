import React, { useState } from "react";
import classes from "./generator.module.css";

const Generator = () => {
  return (
    <main>
      <section className={classes.headSec}>
        <header>
          <h2>Generate a Color</h2>
        </header>

        <article className={classes.inputSec}>
          <input type="text" placeholder="#26C485" />
          <button type="button">Generate</button>
        </article>
      </section>

      <section className={classes.colors}>{/* <p>para 1</p> */}</section>
    </main>
  );
};

export default Generator;
