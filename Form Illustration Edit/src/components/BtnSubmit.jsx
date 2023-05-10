import React from "react";

const BtnSubmit = (props) => {
  return (
    <>
      <button
        onClick={props.handleClick}
        type={
          !!props.car &&
          !(
            (props.firstName.length >= 15 && props.firstName.length < 3) ||
            !props.firstName.length
          ) &&
          !(
            (props.lastName.length >= 20 && props.lastName.length < 3) ||
            !props.lastName.length
          ) &&
          !(
            !props.email ||
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)
          ) &&
          !(props.password.length <= 7 || !props.password) &&
          !(
            ((props.contact.length <= 8 || props.contact.length >= 15) &&
              props.contact.length <= 100) ||
            !props.contact
          ) &&
          !(
            (props.cityDrive.length >= 20 && props.cityDrive.length < 3) ||
            !props.cityDrive
          )
            ? "button"
            : "submit"
        }
        className="px-4 py-3 bg-black text-white cursor-pointer"
      >
        Sign up to drive
      </button>
    </>
  );
};

export default BtnSubmit;
