import React from "react";
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ContextName from "./formComponent/ContextName";
import ContextInfo from "./formComponent/ContextInfo";
import ContextAddress from "./formComponent/ContextAddress";

function ContextForm() {
  const schema = yup.object().shape({
    userfirstname: yup.string().required("Name is required"),
    usermiddlename: yup.string().required("Name is required"),
    userlastname: yup.string().required("Name is required"),

    usergmail: yup.string().email().required("email is required"),
    usercontact: yup.string().required("number is required"),

    adress: yup.array().of(
      yup.object().shape({
        usercity: yup.string().required("Name is required"),
        userpincode: yup.string().required("number is required"),
        userstate: yup.string().required("number is required"),
      })
    ),
  });

  const consoledata = (data) => {
    console.log(data);
  };
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="min-h-screen py-10 bg-gradient-to-r from-yellow-100 via-cyan-200 to-yellow-100 ">
        <div className="bg-teal-500 p-4 w-1/2  mx-auto ">
          <div className="text-2xl font-bold text-center">User Information</div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(consoledata)}>
              <div className="space-y-5">
                <ContextName/>
                <ContextInfo/>
                <ContextAddress/>
              </div>
              <div className="my-3 space-x-4">
                <button
                  type={"submit"}
                  className="bg-blue-900 font-semibold px-3 rounded-md text-white hover:bg-blue-700"
                >
                  Submit
                </button>
                <button
                  type={"reset"}
                  className="bg-blue-900 font-semibold px-3 rounded-md text-white hover:bg-blue-700"
                >
                  Clear
                </button>
                <button
                  onClick={() => methods.reset()}
                  className="bg-blue-900 font-semibold px-3 rounded-md text-white hover:bg-blue-700"
                >
                  Reset
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}

export default ContextForm;
