import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Navbar from "../../components/useState/Navbar";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),

  // language: yup.object().oneOf([true]),

  // language: yup.object().shape({
  //     hindi: yup.boolean(),
  //     english: yup.boolean(),
  //     bhojpuri: yup.boolean(),
  // }).oneOf([true]),

  user: yup.object().shape({
    age: yup.string().required("*"),
    number: yup.string().required("*"),
    city: yup.string().required("*"),
  }),
});

export default function form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function userData(data) {
    console.log(data);
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-400 h-screen pt-4">
        <form
          onSubmit={handleSubmit(userData)}
          className="mx-auto bg-teal-300 w-2/4"
        >
          <div className="p-14 space-y-4">
            <div>
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                className={`w-full `}
                id={"name"}
                {...register("name")}
              ></input>
              <p className="absolute text-red-600 text-sm">
                {errors.name?.message}
              </p>
            </div>

            {/* checkbox start*/}
            <div className="pt-2">
              <div className="font-semibold ">
                Select the language you know
                <span className="text-red-500 font-bold text-xl absolute">
                  {errors.language && "*"}
                </span>
              </div>

              <div className="space-x-2">
                <input
                  type={"checkbox"}
                  id={"hindi"}
                  {...register("language.hindi")}
                />
                <label htmlFor="hindi">Hindi</label>
              </div>

              <div className="space-x-2">
                <input
                  type={"checkbox"}
                  id={"english"}
                  {...register("language.english")}
                />
                <label htmlFor="english">English</label>
              </div>

              <div className="space-x-2">
                <input
                  type={"checkbox"}
                  id={"bhojpuri"}
                  {...register("language.bhojpuri")}
                />
                <label htmlFor="bhojpuri">Bhojpuri</label>
              </div>
            </div>
            {/* check box end here */}

            {/* user nested info data */}
            <div className="pt-2 space-y-2">
              <div className="font-semibold ">
                User-info
                {/* <span className="text-red-500 font-bold text-xl absolute">{errors.user && '*'}</span> */}
              </div>

              <div className="space-x-2">
                <label htmlFor="userage" className="font-semibold">
                  Age
                  <span className="text-red-500 font-bold text-xl absolute">
                    {errors.user?.age?.message}
                  </span>
                </label>
                <input
                  className={`w-2/5 `}
                  id={"userage"}
                  {...register("user.age")}
                ></input>
              </div>
              <div className="space-x-2">
                <label htmlFor="usernumber" className="font-semibold">
                  Number
                  <span className="text-red-500 font-bold text-xl absolute">
                    {errors.user?.number?.message}
                  </span>
                </label>
                <input
                  className={`w-2/5 `}
                  id={"usernumber"}
                  {...register("user.number")}
                ></input>
              </div>
              <div className="space-x-2">
                <label htmlFor="usercity" className="font-semibold">
                  Home-town
                  <span className="text-red-500 font-bold text-xl absolute">
                    {errors.user?.city?.message}
                  </span>
                </label>
                <input
                  className={`w-2/5 `}
                  id={"usercity"}
                  {...register("user.city")}
                ></input>
              </div>
            </div>
            {/* user nested data end here */}

            {/* buttons */}
            <div className="space-x-2">
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
              <button className="bg-red-600 font-semibold px-3 rounded-md text-white hover:bg-red-500">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
