import React from "react";
import Modal from "./Modal";
const Display = (props) => {
  return (
    <>
      {!!props.car &&
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
        ) && (
          <div className="w-full min-h-[100vh] fixed top-0 left-0 background">
            <Modal
              handleSubmit={props.handleSubmit}
              editForm={props.editForm}
            />
          </div>
        )}
    </>
  );
};

export default Display;
