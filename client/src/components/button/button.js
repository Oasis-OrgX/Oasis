import React from "react";
import "./Button.css";

const STYLES = ["btn--green-solid", "btn--green-outline", "btn--white-solid"];

const SIZES = [
  "btn--sign-up-size",
  "btn--try-it-out-size",
  "btn--get-started-size",
];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
