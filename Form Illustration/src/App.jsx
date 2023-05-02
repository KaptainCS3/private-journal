import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
const App = () => {
  return (
    <div className="bg-[rgb(245,232,231)] w-[80%] mx-auto my-16 min-h[100vh]">
      <div className="flex justify-between w-full px-24">
        <div className="w-[45%] py-8">
          <h1 className="text-3xl w-[55%] mb-4 font-text">
            Opportunity is everywhere
          </h1>
          <p className="text-sm text-[#222]">
            Make the most of your time on the road on the platform with the
            largest network of active riders.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
