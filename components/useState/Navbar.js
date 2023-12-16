import React from "react";
import Link from "next/link";

function Navbar(props) {
  const { themeMode, modeFunction } = props; // themeMOde == light
  return (
    <>
      <div className="sticky top-0">
        {/* navbar start */}
        <div
          className={`space-y-2 ${
            themeMode == "dark" ? "bg-[#120e4d]" : "bg-cyan-400"
          }`}
        >
          <div className="flex mx-10 space-x-10 py-2 align-middle">
            <div className="font-bold hover:cursor-pointer text-2xl">
              <Link href={"/"}>HOME</Link>
            </div>
            <div className="grow font-medium align-middle">
              <ul className="flex space-x-5 justify-end ">
                <Link href={"/form/basicForm"}>
                  <li className="hover:cursor-pointer">Basic-Form</li>
                </Link>
                <Link href={"/form/simpleForm"}>
                  <li className="hover:cursor-pointer">Simple-Form</li>
                </Link>
                <Link href={"/form/nestedForm"}>
                  <li className="hover:cursor-pointer">Nested-Form</li>
                </Link>
                <Link href={"/form/dynamicForm"}>
                  <li className="hover:cursor-pointer">Dynamic-Form</li>
                </Link>
                <Link href={"/form/nestedDynamicForm"}>
                  <li className="hover:cursor-pointer">Nested-Dynamic</li>
                </Link>
                <Link href={"/form/useformcontext"}>
                  <li className="hover:cursor-pointer">formcontext</li>
                </Link>
              </ul>
            </div>

            <div className="flex flex-col text-center bg-teal-600 font-medium text-white px-1">
              <span>submit form</span>
              <span>and see in console</span>
            </div>
          </div>
        </div>
        {/* navbar end here */}
      </div>
    </>
  );
}

export default Navbar;
