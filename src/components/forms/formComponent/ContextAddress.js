import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

function ContextAddress() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "adress",
  });

  const newAdress = {
    usercity: "",
    userpincode: "",
    userstate: "",
  };

  return (
    <>
      <div>
        <div className="bg-gray-300 h-10 text-xl font-semibold px-5 py-1 flex justify-between">
          <span>Adress-Form</span>
          <button
            onClick={() => append(newAdress)}
            type={"button"}
            className="bg-blue-600 text-white rounded-md px-2 py-0 text-sm"
          >
            +Add
          </button>
        </div>

        {/* dynamic adress field start */}
        {fields.map((field, i) => (
          <div key={i} className="bg-gray-200 p-5">
            <div>
              <label htmlFor="usercity">
                City
                <span className="text-red-500 font-bold text-xl absolute">
                  {errors.adress?.[i]?.usercity && "*"}
                </span>
              </label>
              <input
                name={`adress[${i}]city`}
                className={`w-full `}
                id={"usercity"}
                {...register(`adress.${i}.usercity`)}
              ></input>
            </div>
            <div>
              <label htmlFor="userpincode">
                PinCode
                <span className="text-red-500 font-bold text-xl absolute">
                  {errors.adress?.[i]?.userpincode && "*"}
                </span>
              </label>
              <input
                name={`adress[${i}]pincode`}
                className={`w-full `}
                id={"userpincode"}
                {...register(`adress.${i}.userpincode`)}
              ></input>
            </div>
            <div>
              <label htmlFor="userstate">
                State
                <span className="text-red-500 font-bold text-xl absolute">
                  {errors.adress?.[i]?.userstate && "*"}
                </span>
              </label>
              <input
                name={`adress[${i}]state`}
                className={`w-full `}
                id={"userstate"}
                {...register(`adress.${i}.userstate`)}
              ></input>
            </div>
            <button
              onClick={() => remove(i)}
              type="button"
              className="bg-red-400 rounded-md px-2 mt-1 "
            >
              Delete
            </button>
          </div>
        ))}
        {/* dynamic field end here */}
      </div>
    </>
  );
}

export default ContextAddress;
