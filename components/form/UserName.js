import React from "react";
import { useFormContext } from "react-hook-form";

export default function UserName() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <div className="bg-gray-300 h-10 text-xl font-semibold pl-5 pt-1">
          Name-Form
        </div>
        <div className="bg-gray-200 p-5">
          <div>
            <label htmlFor="userfirstname">
              First-Name
              <span className="text-red-500 font-bold text-xl absolute">
                {errors.userfirstname && "*"}
              </span>
            </label>
            <input
              className={`w-full `}
              id={"userfirstname"}
              {...register("userfirstname")}
            ></input>
          </div>
          <div>
            <label htmlFor="usermiddlename">
              Middle-Name
              <span className="text-red-500 font-bold text-xl absolute">
                {errors.usermiddlename && "*"}
              </span>
            </label>
            <input
              className={`w-full `}
              id={"usermiddlename"}
              {...register("usermiddlename")}
            ></input>
          </div>
          <div>
            <label htmlFor="userlastname">
              Last-Name
              <span className="text-red-500 font-bold text-xl absolute">
                {errors.userlastname && "*"}
              </span>
            </label>
            <input
              className={`w-full `}
              id={"userlastname"}
              {...register("userlastname")}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
