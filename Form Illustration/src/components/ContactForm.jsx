import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    car: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    cityDrive: "",
    inviteCode: "",
  });
  //   .replace(/\D/g, ""),
  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      car: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      cityDrive: "",
      inviteCode: "",
    });
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checked" ? checked : value,
    }));
  };
  return (
    <>
      <form className="py-8 px-8 w-[50%] bg-[#f5f5f5]">
        <div className="flex justify-between mb-3">
          <h2 className="text-md font-bold">Become a driver</h2>
          <span className="border-b pb-[0.25rem]">Sign up to ride</span>
        </div>
        <section className="mb-4">
          <span className="mr-4">
            <input
              type="radio"
              id="haveCar"
              name="car"
              value="Has Car"
              onChange={handleChange}
              checked={formData.car === "Has Car"}
            />
            <label htmlFor="haveCar" className="pl-2">
              I have a car
            </label>
          </span>
          <>
            <input
              type="radio"
              id="needCar"
              name="car"
              value="Needs Car"
              onChange={handleChange}
              checked={formData.car === "Needs Car"}
            />
            <label htmlFor="needCar" className="pl-2">
              I need a car
            </label>
          </>
        </section>
        <div className="flex flex-col w-full py-[0.25rem]">
          <label htmlFor="firstName" className="font-medium">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="py-[0.25rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div className="flex flex-col w-full py-[0.25rem]">
          <label htmlFor="lastName" className="font-medium">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="py-[0.25rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div className="flex flex-col w-full py-[0.25rem]">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="py-[0.25rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="flex flex-col w-full py-[0.25rem] relative">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="py-[0.25rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="flex flex-col w-full py-[0.25rem]">
          <label htmlFor="phoneNumber" className="font-medium">
            Phone number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="PhoneNumber"
            className="py-[0.25rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </div>
        <div className="flex flex-col w-full py-[0.25rem]">
          <label htmlFor="cityDrive" className="font-medium">
            City you'll drive in
          </label>
          <input
            type="text"
            id="cityDrive"
            name="cityDrive"
            className="py-[0.25rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={handleChange}
            value={formData.cityDrive}
          />
        </div>
        <div className="flex flex-col w-full py-[0.25rem]">
          <label htmlFor="inviteCode" className="font-medium">
            Invite code(optional)
          </label>
          <input
            type="text"
            id="inviteCode"
            name="inviteCode"
            className="py-[0.25rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={handleChange}
            value={formData.inviteCode}
          />
        </div>
        <p className="text-[0.75rem] py-3">
          By proceeding, I agree to Uber's{" "}
          <span className="text-blue-800 underline cursor-pointer">
            Terms of Use
          </span>{" "}
          and acknowledge that I have read the{" "}
          <span className="text-blue-800 underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
        <p className="text-[0.75rem] pb-3">
          I also agree that Uber or its representatives may contact me by email,
          phone or SMS(Including by automated means) at the email address or
          number I provide, including for marketing purposes.
        </p>
        <button className="px-4 py-3 bg-black text-white cursor-pointer">
          Sign up to drive
        </button>
        <span className="block pt-3 text-[0.75rem]">
          Already have an account?{" "}
          <span className="underline cursor-pointer">Sign in</span>
        </span>
      </form>
    </>
  );
};

export default ContactForm;
