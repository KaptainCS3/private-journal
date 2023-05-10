import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const InputForm = (props) => {
  return (
    <div
      className={`${
        props.type === "radio" ? "flex flex-row-reverse" : "form__input"
      } ${props.name === "password" ? "relative" : ""}`}
    >
      <label
        htmlFor={props.type === "radio" ? props.id : props.name}
        className={`${props.type === "radio" ? "label__radio" : "label__form"}`}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.type === "radio" ? props.value : props.formValue}
        id={props.type === "radio" ? props.id : props.name}
        checked={
          props.type === "radio" ? props.formValue === props.value : null
        }
        className={`${props.type === "radio" ? "cursor-pointer" : "input"}`}
      />
      {props.visited && props.error ? (
        <div className="error__message">{props.error}</div>
      ) : null}
      {props.name === "password" ? (
        <span className="absolute right-0 -top-[0.1rem]">
          {props.showpws && props.formValue ? (
            <FontAwesomeIcon
              icon={faEye}
              className="password"
              onClick={props.togglePassword}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="password"
              onClick={props.togglePassword}
            />
          )}
        </span>
      ) : null}
    </div>
  );
};

export default InputForm;
