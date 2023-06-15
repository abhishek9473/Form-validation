import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function UserNumber({ index, register }) {
  const {
    control,
    formState: { errors },
  } = useForm();
  const { append, remove, fields } = useFieldArray({
    control,
    name: "number",
  });

  const dynamicNumber = {};

  return (
    <>
      <div className="flex-grow p-4 space-y-1">
        <div className="flex justify-between">
          <label>Number</label>
          <button
            onClick={() => append(dynamicNumber)}
            type={"button"}
            className="bg-green-400 rounded-md px-2 "
          >
            Add
          </button>
        </div>
        {fields.map((field, i) => (
          <div key={i} className="flex justify-between">
            <input
              className="w-full"
              name=""
              {...register(`users.${index}.number.${i}`)}
            ></input>
            <button
              onClick={() => remove(i)}
              type={"button"}
              className="bg-red-600 text-white font-bold  px-2"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default UserNumber;
