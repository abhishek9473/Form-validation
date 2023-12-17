import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  users: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Name is required"),
      number: yup.string().required("number is required"),
    })
  ),
});

export default function DynamicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  const userlist = {
    name: "",
    number: "",
  };

  useEffect(() => {
    return append(userlist);
  }, []);

  const fromSubmitdata = (data) => {
    console.log("submit data", data);
  };

  return (
    <>
      <div className=" py-7">
        <div className="bg-gray-300 w-3/5 mx-auto py-1">
          {/* form start */}
          <form onSubmit={handleSubmit(fromSubmitdata)}>
            <div className=" m-10">
              <div className="space-y-3">
                <div className="font-bold text-2xl text-blue-800">
                  Users List
                </div>

                <div>
                  {/* dynamic input feild start */}

                  {fields.map((field, i) => (
                    <div
                      key={i}
                      className="shadow-md border border-slate-200 p-2 space-y-2 "
                    >
                      <div className="flex justify-between h-14">
                        <div className="flex-grow px-4">
                          <label>Name</label>
                          <input
                            name={`users[${i}]name`}
                            {...register(`users.${i}.name`)}
                            className="w-full"
                          />
                          <p className="absolute text-red-600 text-sm">
                            {errors.users?.[i]?.name?.message}
                          </p>
                        </div>
                        <div className="flex-grow px-4">
                          <label>Number</label>
                          <input
                            name={`users[${i}]number`}
                            {...register(`users.${i}.number`)}
                            className="w-full"
                          />
                          <p className="absolute text-red-600 text-sm">
                            {errors.users?.[i]?.number?.message}
                          </p>
                        </div>
                      </div>
                      <div className="px-4 flex justify-end">
                        <button
                          onClick={() => remove(i)}
                          type="button"
                          className="bg-red-400 rounded-md px-2 "
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* dynamic feild end */}
                </div>

                {/* buttons */}
                <div className="space-x-5">
                  <button
                    type="submit"
                    className="bg-green-600 text-white rounded-md px-4"
                  >
                    submit
                  </button>
                  <button
                    onClick={() => append(userlist)}
                    type={"button"}
                    className="bg-blue-600 text-white rounded-md px-4"
                  >
                    Add one
                  </button>
                </div>
                {/* buttons end */}
              </div>
            </div>
          </form>
          {/* form end here */}
        </div>
      </div>
    </>
  );
}
