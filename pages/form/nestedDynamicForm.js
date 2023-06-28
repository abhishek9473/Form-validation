import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import UserNumber from "../../components/form/UserNumber";
import Navbar from "../../components/useState/Navbar";

export default function nestedDynamicForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { append, remove, fields } = useFieldArray({
    control,
    name: "users",
  });

  const userList = {
    name: "",
    number: "",
  };

  return (
    <>
      <Navbar />
      <div className="pt-7 min-h-screen bg-gradient-to-tr from-teal-300 via-yellow-100 to-lime-300">
        <div className="bg-gray-300 w-3/5 mx-auto p-5">
          {/* form start */}
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="space-x-6 py-1">
              <span className="text-4xl py-2 font-bold text-blue-900">
                Users list
              </span>
              <button
                onClick={() => append(userList)}
                type={"button"}
                className="bg-indigo-600 text-white px-2 rounded-md"
              >
                +add
              </button>
            </div>

            {/* ///// dynamic start here */}
            {fields.map((data, index) => (
              <div key={index} className="shadow-md border border-neutral-200">
                <div className="px-4 font-semibold">
                  person-{index + 1} data
                </div>
                <div className="flex ">
                  <div className="flex-grow p-4 space-y-1">
                    <label>Name</label>
                    <input
                      className="w-full"
                      {...register(`users.${index}.name`)}
                    ></input>
                  </div>
                  <UserNumber index={index} register={register} />
                </div>
                <div className="flex justify-end px-4">
                  <button
                    onClick={() => remove(index)}
                    type="button"
                    className="px-2 rounded-md bg-red-600 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {/* //////////dynamic end here */}
            <div>
              <button
                type={"submit"}
                className="bg-blue-900 font-semibold px-3 rounded-md text-white hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
