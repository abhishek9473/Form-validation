import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const navActiveLink = ({isActive}) => {
        return {
            fontWeight : isActive ? "bold" : "normal",
            // textDecoration : isActive ? "underline" : "none"
        }
    }
  return (
    <>
      <div className="sticky top-0">
        {/* navbar start */}
        <div className="space-y-2 bg-cyan-400">
          <div className="flex mx-10 space-x-10 py-2 align-middle">
            <div className="font-bold hover:cursor-pointer text-2xl">
              <NavLink style={navActiveLink} to={"/"}>
                HOME
              </NavLink>
            </div>
            <div className="grow font-medium align-middle">
              <ul className="flex space-x-5 justify-end ">
                <NavLink style={navActiveLink} to={"/basicForm"}>
                  <li className="hover:cursor-pointer">Basic-Form</li>
                </NavLink>
                <NavLink style={navActiveLink} to={"/simpleForm"}>
                  <li className="hover:cursor-pointer">Simple-Form</li>
                </NavLink>
                <NavLink style={navActiveLink} to={"/nestedForm"}>
                  <li className="hover:cursor-pointer">Nested-Form</li>
                </NavLink>
                <NavLink style={navActiveLink} to={"/dynamicForm"}>
                  <li className="hover:cursor-pointer">Dynamic-Form</li>
                </NavLink>
                <NavLink style={navActiveLink} to={"/nestedDynamicForm"}>
                  <li className="hover:cursor-pointer">Nested-Dynamic</li>
                </NavLink>
                <NavLink style={navActiveLink} to={"/useformcontext"}>
                  <li className="hover:cursor-pointer">formcontext</li>
                </NavLink>
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
