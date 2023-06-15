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
              <Link href={"/"}>LOGO</Link>
            </div>
            <div className="grow font-medium align-middle">
              <ul className="flex space-x-5 justify-end ">
                <Link href={"/"}>
                  <li className="hover:cursor-pointer">Home</li>
                </Link>
                <Link href={"/form"}>
                  <li className="hover:cursor-pointer">Form</li>
                </Link>
                <Link href={"/form/form2"}>
                  <li className="hover:cursor-pointer">Form-2</li>
                </Link>
                <Link href={"/form/nestedForm"}>
                  <li className="hover:cursor-pointer">Nested-Form</li>
                </Link>
                <Link href={"/form/dynamicForm"}>
                  <li className="hover:cursor-pointer">Dynamic-Form</li>
                </Link>
                <Link href={"/form/dynamic2"}>
                  <li className="hover:cursor-pointer">DynamicForm-2</li>
                </Link>
                <Link href={"/form/useformcontext"}>
                  <li className="hover:cursor-pointer">formcontext</li>
                </Link>
              </ul>
            </div>

            <button
              onClick={modeFunction}
              className="text-white border rounded-md bg-fuchsia-800 border-black px-2"
            >
              MODE
            </button>
          </div>
        </div>
        {/* navbar end here */}
      </div>
    </>
  );
}

export default Navbar;
