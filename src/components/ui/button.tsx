import clsx from "clsx";
import React from "react";
import styles from "@/styles/button.modules.scss";

const Button = () => {
  return (
    <>
      <button
        className={clsx("button is-primary", styles.clickButton)}
        onClick={(e) => {
          handleButtonClick();
        }}
      >
        クリックする
      </button>
    </>
  );
};

export default Button;
