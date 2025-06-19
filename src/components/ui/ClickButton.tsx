import clsx from "clsx";
import React from "react";
import styles from "@/styles/button.module.scss";

const ClickButton = (props: any) => {
  console.log(props);
  const { onClick, children, nyaa } = props;

  return (
    <>
      <button
        className={clsx("button is-primary", styles.clickButton)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ClickButton;
