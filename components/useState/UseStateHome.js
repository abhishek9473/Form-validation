import React, { useState } from "react";
import Navbar from "./Navbar";
import UseStatePage from "./UseStatePage";

function UseStateHome() {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    setTimeout(() => {
      mode === "light" ? setMode("dark") : setMode("light");
    }, 200);
  }

  return (
    <div
      className={`${
        mode === "light"
          ? "bg-gradient-to-tr from-green-500 via-pink-400 to-blue-500  text-black"
          : "bg-sky-800 text-slate-100"
      }`}
    >
      <div>
        <Navbar themeMode={mode} modeFunction={toggleMode} />
        <UseStatePage themeMode={mode} />
      </div>
    </div>
  );
}

export default UseStateHome;
