import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "../../components/useState/Navbar";

const schema = yup.object().shape({
  username: yup.string().required("Name is required"),

  contact: yup
    .number()
    .min(100, "invalid")
    .typeError("only numbers allowed")
    .required("contact is required"),

  email: yup.string().email().required("email is required"),
  userpassword: yup
    .string()
    .required("passowrd is required")
    .min(3, "minimum 3 words are required")
    .max(8, "maximum 8 words allowed"),
  userconfirmpassword: yup.string().oneOf([yup.ref("userpassword"), null]),
});

export default function UserForm() {
  const test = {
    username: "name1",
    contact: 12345,
    email: "test@mail.com",
    userpassword: 1234,
    userconfirmpassword: 1234,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function dataSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-teal-500 h-screen">
        <form
          onSubmit={handleSubmit(dataSubmit)}
          className="w-[40rem] bg-gray-300 px-20 py-10 mt-6 space-y-6 h-max "
        >
          <div className="text-3xl font-bold text-center">User Data</div>

          <div>
            <label htmlFor="username">Name</label>
            <input
              className={`w-full ${
                errors.username ? "border border-red-700 bg-red-100" : null
              }`}
              name={"username"}
              id={"username"}
              {...register("username")}
            ></input>
            <p className="absolute text-red-600 text-sm">
              {errors.username?.message}
            </p>
          </div>

          <div>
            <label htmlFor="contact">Mobile Number</label>
            <input
              className={`w-full ${
                errors.contact ? "border border-red-700 bg-red-100" : null
              }`}
              name={"contact"}
              id={"contact"}
              {...register("contact")}
            ></input>
            <p className="absolute text-red-600 text-sm">
              {errors.contact?.message}
            </p>
          </div>

          <div>
            <label htmlFor="email">Email-id</label>
            <input
              className={`w-full ${
                errors.email ? "border border-red-700 bg-red-100" : null
              }`}
              type={"email"}
              name={"email"}
              id={"email"}
              {...register("email")}
            ></input>
            <p className="absolute text-red-600 text-sm">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <label htmlFor="userpassword">Password</label>
            <input
              className={`w-full ${
                errors.userpassword ? "border border-red-700 bg-red-100" : null
              }`}
              type={"password"}
              name={"userpassword"}
              id={"userpassword"}
              {...register("userpassword")}
            ></input>
            <p className="absolute text-red-600 text-sm">
              {errors.userpassword?.message}
            </p>
          </div>

          <div>
            <label htmlFor="userconfirmpassword">Confirm Password</label>
            <input
              className={`w-full ${
                errors.userconfirmpassword || errors.userpassword
                  ? "border border-red-700 bg-red-100"
                  : null
              }`}
              type={"password"}
              name={"userconfirmpassword"}
              id={"userconfirmpassword"}
              {...register("userconfirmpassword")}
            ></input>
            <p className="absolute text-red-600 text-sm">
              {errors.userconfirmpassword
                ? "password doesnot match"
                : null || errors.userpassword
                ? "confirm password required"
                : null}
            </p>
          </div>

          <div className="space-x-6">
            <button
              type={"submit"}
              className="bg-teal-900 px-2 text-white rounded-md"
            >
              Submit
            </button>
            <button
              type={"reset"}
              className="bg-teal-900 px-2 text-white rounded-md"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
