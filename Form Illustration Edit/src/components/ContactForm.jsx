import React, { useState } from "react";
import { useFormik } from "formik";
import InputForm from "./InputForm";
import BtnSubmit from "./BtnSubmit";
import Display from "./Display";
const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

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
    } else if (values.firstName.length > 15 || values.firstName.length < 3) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20 || values.lastName.length < 3) {
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
    } else if (values.cityDrive.length > 20 || values.cityDrive.length < 3) {
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

  const toggleModal = () => {
    setShowModal(
      !!formik.values.car &&
        !(
          (formik.values.firstName.length >= 15 &&
            formik.values.firstName.length < 4) ||
          !formik.values.firstName.length
        ) &&
        !(
          (formik.values.lastName.length >= 20 &&
            formik.values.lastName.length < 4) ||
          !formik.values.lastName.length
        ) &&
        !(
          !formik.values.email ||
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
        ) &&
        !(formik.values.password.length <= 7 || !formik.values.password) &&
        !(
          ((formik.values.contact.length <= 8 ||
            formik.values.contact.length >= 15) &&
            formik.values.contact.length <= 100) ||
          !formik.values.contact
        ) &&
        !(
          (formik.values.cityDrive.length >= 20 &&
            formik.values.cityDrive.length < 4) ||
          !formik.values.cityDrive
        )
        ? true
        : null
    );
  };
  console.log(formik.values);
  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="flex justify-between mb-3">
          <h2 className="text-md font-bold">Become a driver</h2>
          <span className="border-b pb-[0.25rem] cursor-pointer">
            Sign up to ride
          </span>
        </div>
        <section className="mb-4">
          <div className="flex">
            <span className="mr-4">
              <InputForm
                type="radio"
                name="car"
                handleChange={formik.handleChange}
                formValue={formik.values.car}
                label="I have a car"
                id="haveCar"
                value="Has Car"
              />
            </span>
            <span className="">
              <InputForm
                type="radio"
                name="car"
                handleChange={formik.handleChange}
                formValue={formik.values.car}
                label="I need a car"
                id="needCar"
                value="Needs Car"
              />
            </span>
          </div>
          {formik.touched.car && formik.errors.car ? (
            <div className="error__message">{formik.errors.car}</div>
          ) : null}
        </section>
        <InputForm
          type="text"
          name="firstName"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          formValue={formik.values.firstName}
          label="First name"
          error={formik.errors.firstName}
          visited={formik.touched.firstName}
        />
        <InputForm
          type="text"
          name="lastName"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          formValue={formik.values.lastName}
          label="Last name"
          error={formik.errors.lastName}
          visited={formik.touched.lastName}
        />
        <InputForm
          type="email"
          name="email"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          formValue={formik.values.email}
          label="Email"
          error={formik.errors.email}
          visited={formik.touched.email}
        />
        <InputForm
          type={!showpws ? "password" : "text"}
          name="password"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          formValue={formik.values.password}
          label="Password"
          error={formik.errors.password}
          visited={formik.touched.password}
          showpws={showpws}
          togglePassword={togglePassword}
        />
        <InputForm
          type="text"
          name="contact"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          formValue={formik.values.contact.replace(/\D/g, "")}
          label="Phone number"
          error={formik.errors.contact}
          visited={formik.touched.contact}
        />
        <InputForm
          type="text"
          name="cityDrive"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          formValue={formik.values.cityDrive}
          label="City you'll drive in"
          error={formik.errors.cityDrive}
          visited={formik.touched.cityDrive}
        />
        <InputForm
          type="text"
          name="inviteCode"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          formValue={formik.values.inviteCode}
          label="Invite code(optional)"
        />
        <p className="text-[0.75rem] py-3">
          By proceeding, I agree to Uber's{" "}
          <span className="privacy">Terms of Use</span> and acknowledge that I
          have read the <span className="privacy">Privacy Policy</span>.
        </p>
        <p className="text-[0.75rem] pb-3">
          I also agree that Uber or its representatives may contact me by email,
          phone or SMS(Including by automated means) at the email address or
          number I provide, including for marketing purposes.
        </p>
        <BtnSubmit
          handleClick={toggleModal}
          firstName={formik.values.firstName}
          lastName={formik.values.lastName}
          password={formik.values.password}
          email={formik.values.email}
          contact={formik.values.contact}
          cityDrive={formik.values.cityDrive}
          car={formik.values.car}
        />
        <span className="block pt-3 text-[0.75rem]">
          Already have an account?{" "}
          <span className="underline cursor-pointer">Sign in</span>
        </span>
        {showModal && (
          <Display
            handleClick={toggleModal}
            firstName={formik.values.firstName}
            lastName={formik.values.lastName}
            password={formik.values.password}
            email={formik.values.email}
            contact={formik.values.contact}
            cityDrive={formik.values.cityDrive}
            car={formik.values.car}
            showModal={showModal}
            handleSubmit={formik.handleSubmit}
            editForm={editForm}
          />
        )}
      </form>
    </>
  );
};

export default ContactForm;
