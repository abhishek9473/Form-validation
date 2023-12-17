import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Name is required"),
  usercontact: yup
    .string()
    .required("contact is required")
    .min(10, "Invalid")
    .max(10, "Invalid"),
  useremail: yup.string().required("email is required"),
  gender: yup.string().nullable("gender error").required("fill gender"),
  city: yup.string().required("this feild is required"),
  term_and_condition: yup.boolean().oneOf([true]),
  language: yup.array().min(1, "select one"),
});

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function userData(data) {
    console.log(data);
  }

  return (
    <>
      <div className="bg-gray-400 h-screen pt-4">
        <form
          onSubmit={handleSubmit(userData)}
          className="mx-auto bg-orange-200 w-2/4"
        >
          <div className="p-14 space-y-4">
            <div>
              <label htmlFor="username">Name</label>
              <input
                className={`w-full `}
                id={"username"}
                {...register("username")}
              ></input>
              <p className="absolute text-red-600 text-sm">
                {errors.username?.message}
              </p>
            </div>

            <div>
              <label htmlFor="useremail">E-Mail</label>
              <input
                className={`w-full `}
                id={"useremail"}
                {...register("useremail")}
              ></input>
              <p className="absolute text-red-600 text-sm">
                {errors.useremail?.message}
              </p>
            </div>

            <div>
              <label htmlFor="usercontact">Contact-no</label>
              <input
                className={`w-full `}
                id={"usercontact"}
                {...register("usercontact")}
              ></input>
              <p className="absolute text-red-600 text-sm">
                {errors.usercontact?.message}
              </p>
            </div>

            {/* gride box start here */}
            <div className="grid grid-flow-row grid-cols-10 grid-rows-4 pt-2">
              {/* dropdown */}
              <div className="flex flex-col col-span-4 row-span-2">
                <div className="flex justify-between">
                  <label htmlFor="city">
                    City{" "}
                    <span className="text-red-500 font-bold text-xl absolute">
                      {errors.city && "*"}
                    </span>{" "}
                  </label>
                  <select {...register("city")} className="w-full ml-2">
                    <option value="">Select your option</option>
                    <option value={"raxaul"}>raxaul</option>
                    <option value={"motihari"}>motihari</option>
                    <option value={"muzaffarpur"}>muzaffarpur</option>
                    <option value={"patna"}>patna</option>
                    <option value={"hajipur"}>hajipur</option>
                  </select>
                </div>
              </div>

              {/* select box name feild */}
              <div className="border-l border-black col-end-11 col-span-5 row-span-4">
                <div className="font-semibold pl-3">
                  Select the language you know
                  <span className="text-red-500 font-bold text-xl absolute">
                    {errors.language && "*"}
                  </span>
                </div>

                <div className="space-x-2 pl-4">
                  <input
                    type={"checkbox"}
                    id={"hindi"}
                    value="hindi"
                    {...register("language")}
                  />
                  <label htmlFor="hindi">Hindi</label>
                </div>

                <div className="space-x-2 pl-4">
                  <input
                    type={"checkbox"}
                    id={"english"}
                    value="english"
                    {...register("language")}
                  />
                  <label htmlFor="english">English</label>
                </div>

                <div className="space-x-2 pl-4">
                  <input
                    type={"checkbox"}
                    id={"bhojpuri"}
                    value="bhojpuri"
                    {...register("language")}
                  />
                  <label htmlFor="bhojpuri">Bhojpuri</label>
                </div>
              </div>

              {/* radio-button */}
              <div className="row-start-3 col-span-4 row-span-2">
                <div>
                  Gender
                  <span className="text-red-500 font-bold text-xl absolute">
                    {errors.gender && "*"}
                  </span>
                </div>
                <div className="space-x-6">
                  <span>
                    <input
                      type={"radio"}
                      name={"gender"}
                      id={"male"}
                      value={"male"}
                      {...register("gender")}
                    ></input>
                    <label htmlFor="male">Male</label>
                  </span>

                  <span>
                    <input
                      type={"radio"}
                      name={"gender"}
                      id={"female"}
                      value={"female"}
                      {...register("gender")}
                    ></input>
                    <label htmlFor="female">Female</label>
                  </span>

                  <span>
                    <input
                      type={"radio"}
                      name={"gender"}
                      id={"other"}
                      value={"other"}
                      {...register("gender")}
                    ></input>
                    <label htmlFor="other">Other</label>
                  </span>
                </div>
              </div>
            </div>
            {/* gride box end here */}

            {/* check-box */}
            <div className="">
              <input
                type={"checkbox"}
                id={"terms"}
                {...register("term_and_condition")}
              ></input>
              <label htmlFor="terms" className="ml-2">
                I Agree this page{" "}
                <span className="text-red-500 font-bold text-xl absolute">
                  {errors.term_and_condition && "*"}
                </span>
              </label>
            </div>

            {/* buttons */}
            <div className="space-x-6">
              <button
                type={"submit"}
                className="bg-blue-900 font-semibold px-3 rounded-md text-white hover:bg-blue-700"
              >
                Submit
              </button>
              <button
                type={"reset"}
                className="bg-green-700 font-semibold px-3 rounded-md text-white hover:bg-green-600"
              >
                Clear
              </button>
              <button
                onClick={() => reset()}
                className="bg-red-600 font-semibold px-3 rounded-md text-white hover:bg-red-500"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
