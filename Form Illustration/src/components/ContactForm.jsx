import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import Modal from "./Modal";
const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(true);
  };

  const editForm = () => {
    setShowModal(false);
  };

  const [showpws, setShowpws] = useState(false);
  const togglePassword = () => {
    setShowpws(!showpws);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.car) {
      errors.car = "Required";
      // Do you Need a Car? or Do you Have a Car?
    }

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    if (!values.contact) {
      errors.contact = "Required";
    } else if (
      (values.contact.length <= 8 || values.contact.length >= 15) &&
      values.contact.length <= 100
    ) {
      errors.contact = "Must be 9 characters and max character is 15";
    }

    if (!values.cityDrive) {
      errors.cityDrive = "Required";
    } else if (values.cityDrive.length > 20) {
      errors.cityDrive = "Must be 20 characters or less";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      car: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      contact: "",
      cityDrive: "",
      inviteCode: "",
    },
    validate,
    onSubmit: (values) => {
      alert(
        `You've successfully submitted: ${JSON.stringify(values, null, 500)}`
      );
      formik.resetForm();
      setShowModal(false);
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="py-8 px-8 w-[50%] bg-[#f5f5f5] sm:w-full md:w-full"
      >
        <div className="flex justify-between mb-3">
          <h2 className="text-md font-bold">Become a driver</h2>
          <span className="border-b pb-[0.25rem] cursor-pointer">
            Sign up to ride
          </span>
        </div>
        <section className="mb-4">
          <span className="mr-4">
            <input
              className="cursor-pointer"
              type="radio"
              id="haveCar"
              name="car"
              value="Has Car"
              onChange={formik.handleChange}
              checked={formik.values.car === "Has Car"}
            />
            <label htmlFor="haveCar" className="pl-2 cursor-pointer">
              I have a car
            </label>
          </span>
          <span className="">
            <input
              className="cursor-pointer"
              type="radio"
              id="needCar"
              name="car"
              value="Needs Car"
              onChange={formik.handleChange}
              checked={formik.values.car === "Needs Car"}
            />
            <label htmlFor="needCar" className="pl-2 cursor-pointer">
              I need a car
            </label>
          </span>
          {formik.touched.car && formik.errors.car ? (
            <div className="text-red-500 pt-[0.25rem]">{formik.errors.car}</div>
          ) : null}
        </section>
        {/* Input field and labels */}
        <div className="flex flex-col w-full py-[0.25rem]">
          <label
            htmlFor="firstName"
            className="font-medium cursor-pointer mb-[0.25rem]"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="py-[0.45rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 pt-[0.25rem]">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        {/* Input field and labels */}
        <div className="flex flex-col w-full py-[0.25rem]">
          <label
            htmlFor="lastName"
            className="font-medium cursor-pointer mb-[0.25rem]"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="py-[0.45rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 pt-[0.25rem]">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
        {/* Input field and labels */}
        <div className="flex flex-col w-full py-[0.25rem]">
          <label
            htmlFor="email"
            className="font-medium cursor-pointer mb-[0.25rem]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="py-[0.45rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 pt-[0.25rem]">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        {/* Input field and labels */}
        <div className="flex flex-col w-full py-[0.25rem] relative">
          <label
            htmlFor="password"
            className="font-medium cursor-pointer mb-[0.25rem]"
          >
            Password
          </label>
          <input
            type={!showpws ? "password" : "text"}
            id="password"
            name="password"
            className="py-[0.45rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 pt-[0.25rem]">
              {formik.errors.password}
            </div>
          ) : null}
          {showpws && formik.values.password ? (
            <FontAwesomeIcon
              icon={faEye}
              className="absolute top-0 right-0 mt-[2.75rem] mr-5 cursor-pointer"
              onClick={togglePassword}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="absolute top-0 right-0 mt-[2.75rem] mr-5 cursor-pointer"
              onClick={togglePassword}
            />
          )}
        </div>
        {/* Input field and labels */}
        <div className="flex flex-col w-full py-[0.25rem]">
          <label
            htmlFor="contact"
            className="font-medium cursor-pointer mb-[0.25rem]"
          >
            Phone number
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="py-[0.45rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact.replace(/\D/g, "")}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div className="text-red-500 pt-[0.25rem]">
              {formik.errors.contact}
            </div>
          ) : null}
        </div>
        {/* Input field and labels */}
        <div className="flex flex-col w-full py-[0.25rem]">
          <label
            htmlFor="cityDrive"
            className="font-medium cursor-pointer mb-[0.25rem]"
          >
            City you'll drive in
          </label>
          <input
            type="text"
            id="cityDrive"
            name="cityDrive"
            className="py-[0.45rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cityDrive}
          />
          {formik.touched.cityDrive && formik.errors.cityDrive ? (
            <div className="text-red-500 pt-[0.25rem]">
              {formik.errors.cityDrive}
            </div>
          ) : null}
        </div>
        {/* Input field and labels */}
        <div className="flex flex-col w-full py-[0.25rem]">
          <label
            htmlFor="inviteCode"
            className="font-medium cursor-pointer mb-[0.25rem]"
          >
            Invite code(optional)
          </label>
          <input
            type="text"
            id="inviteCode"
            name="inviteCode"
            className="py-[0.45rem] bg-[#E5E5E5] px-4 outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.inviteCode}
          />
          {formik.touched.inviteCode && formik.errors.inviteCode ? (
            <div className="text-red-500 pt-[0.25rem]">
              {formik.errors.inviteCode}
            </div>
          ) : null}
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
        <button
          onClick={toggleModal}
          type="button"
          className="px-4 py-3 bg-black text-white cursor-pointer"
        >
          Sign up to drive
        </button>
        <span className="block pt-3 text-[0.75rem]">
          Already have an account?{" "}
          <span className="underline cursor-pointer">Sign in</span>
        </span>
        {showModal && (
          <div className="w-full min-h-[100vh] fixed top-0 left-0 background">
            <Modal handleSubmit={formik.handleSubmit} editForm={editForm} />
          </div>
        )}
      </form>
    </>
  );
};

export default ContactForm;
