import React from "react";
import ContactForm from "./components/ContactForm";
import "./App.css";
const App = () => {
  return (
    <div className="bg-[#f5e8e7] w-[80%] mx-auto my-16 sm:w-full sm:mx-0 sm:my-0 sm:h-auto md:w-full md:mx-0 md:my-0 md:h-auto">
      <div className="flex justify-between w-full px-24 sm:flex-col sm:w-full sm:px-0 md:flex-col md:w-full md:px-0">
        <div className="w-[45%] py-8 flex flex-col justify-between sm:w-full sm:flex-row sm:justify-between sm:items-center sm:px-8 md:w-full md:flex-row md:justify-between md:items-center md:px-8">
          <div className="sm:pr-4 md:pr-4">
            <h1 className="text-3xl w-[55%] mb-4 font-text sm:w-1/2 sm:text-2xl md:w-1/2 md:text-2xl">
              Opportunity is everywhere
            </h1>
            <p className="text-sm text-[#222]">
              Make the most of your time on the road on the platform with the
              largest network of active riders.
            </p>
          </div>
          <div className="sm:pl-4 md:pl-4">
            <img src="/assets/undraw_sign_up_n6im.svg" alt="" />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
