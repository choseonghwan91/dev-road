import React from "react";
import styles from "../src/styles/Home.module.scss";

export default function Main() {
  return (
    <div className={styles.roadMap}>
      <div className={styles.lineContainer}>
        <svg
          viewBox="0 0 388 976"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            d="M217.5 1C155.333 17.5 40.2999 56.9 77.4999 82.5C124 114.5 383.5 103.5 386.5 161C389.5 218.5 -10.4999 205 1.50006 273C13.5001 341 386.5 293.5 386.5 402.5C386.5 511.5 1.50006 484.5 1.50006 559.5C1.50006 634.5 374.5 590.5 374.5 682.5C374.5 774.5 11.5 699.5 14.5 789C17.5 878.5 374.5 824 374.5 886.5C374.5 949 221.5 925.5 201.5 946.5C185.5 963.3 200.833 998.833 210.5 1014.5"
            stroke="black"
          />
        </svg>
      </div>
      <section className="one">
        <h1 className="scroll" data-rate=".2" date-direction="vertical">
          omg scroll
        </h1>
      </section>
      <section className="two">
        <h1 className="scroll" data-rate=".2" date-direction="vertical">
          omg scroll
        </h1>
      </section>
    </div>
  );
}
