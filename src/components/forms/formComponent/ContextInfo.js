import React from "react";
import { useFormContext } from "react-hook-form";

function ContextInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <div className="bg-gray-300 h-10 text-xl font-semibold pl-5 pt-1">
          Information-Form
        </div>
        <div className="bg-gray-200 p-5">
          <div>
            <label htmlFor="usergmail">
              Gmail account
              <span className="text-red-500 font-bold text-xl absolute">
                {errors.usergmail && "*"}
              </span>
            </label>
            <input
              className={`w-full `}
              id={"usergmail"}
              {...register("usergmail")}
            ></input>
          </div>
          <div>
            <label htmlFor="usercontact">
              Contact
              <span className="text-red-500 font-bold text-xl absolute">
                {errors.usercontact && "*"}
              </span>
            </label>
            <input
              className={`w-full `}
              id={"usercontact"}
              {...register("usercontact")}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContextInfo;
