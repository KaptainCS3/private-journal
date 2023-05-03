import React from "react";

const Modal = () => {
  return (
    <>
      <section className="absolute w-[25rem] h-[10rem] shadow-2xl z-100 bg-white flex items-center justify-evenly top-[60%] left-1/2 trans">
        <div className="flex flex-col w-[25rem] items-center">
          <p className="my-3 font-bold">Are you sure you want to Submit?</p>
          <div className="flex w-[25rem]">
            <button className="p-5 bg-[#f5e8e7] w-1/2 mx-4 text-xl">Confirm</button>
            <button className="p-5 bg-[#f5e8e7] w-1/2 mx-4 text-xl">Edit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
