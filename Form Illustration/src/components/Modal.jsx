import React from 'react'

const Modal = () => {
  return (
    <>
      <section className="absolute w-[25rem] h-[10rem] shadow-2xl z-100 bg-white flex items-center justify-evenly top-[60%] left-1/2 trans">
        <button className="p-5 bg-[#f5e8e7] w-1/2 mx-4">
          Confirm 
        </button>
        <button className="p-5 bg-[#f5e8e7] w-1/2 mx-4">Edit</button>
      </section>
    </>
  );
}

export default Modal