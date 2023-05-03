import React from "react";

const Modal = (props) => {
  return (
    <>
      <section className="w-[25rem] h-[10rem] shadow-2xl bg-white flex items-center justify-evenly my-[15rem] mx-auto">
        <div className="flex flex-col w-[25rem] items-center">
          <p className="my-3 font-bold">Are you sure you want to Submit?</p>
          <div className="flex w-[25rem]">
            <button
              onSubmit={props.handleSubmit}
              className="p-5 bg-[#f5e8e7] w-1/2 mx-4 text-xl"
            >
              Confirm
            </button>
            <button
              type="button"
              className="p-5 bg-[#f5e8e7] w-1/2 mx-4 text-xl"
              onClick={props.editForm}
            >
              Edit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
