import React from "react";
import { useState } from "react";

function UseStatePage(props) {
  const [text, setText] = useState("");

  const textChange = (event) => setText(event.target.value);

  const upperCaseText = () => setText(text.toUpperCase());
  const lowerCaseText = () => setText(text.toLowerCase());
  const reverseCaseText = () => setText(text.split("").reverse().join(""));
  const clearText = () => setText("");

  return (
    <>
      <div className="  h-[100vh]">
        <div className="text-center font-bold text-4xl">Enter text here</div>
        <div className="flex justify-center">
          <div>
            <textarea
              className={`border border-black ${
                props.themeMode === "light"
                  ? "bg-white text-black"
                  : "bg-gray-400 text-black"
              }`}
              value={text}
              rows={12}
              cols={100}
              onChange={textChange}
            ></textarea>
            <div className="space-x-10">
              <button
                onClick={reverseCaseText}
                className={`${
                  props.themeMode === "light"
                    ? "bg-blue-500"
                    : "bg-slate-900 text-white"
                } text-white rounded-md px-4 mt-2 mb-4`}
              >
                Reverse
              </button>
              <button
                onClick={upperCaseText}
                className={`${
                  props.themeMode === "light"
                    ? "bg-blue-500"
                    : "bg-slate-900 text-white"
                } text-white rounded-md px-4 mt-2 mb-4`}
              >
                Upper Case
              </button>
              <button
                onClick={lowerCaseText}
                className={`${
                  props.themeMode === "light"
                    ? "bg-blue-500"
                    : "bg-slate-900 text-white"
                } text-white rounded-md px-4 mt-2 mb-4`}
              >
                Lower Case
              </button>
              <button
                onClick={clearText}
                className={`${
                  props.themeMode === "light"
                    ? "bg-blue-500"
                    : "bg-slate-900 text-white"
                } text-white rounded-md px-4 mt-2 mb-4`}
              >
                Clear
              </button>
            </div>
            <div>
              <p className="font-bold text-xl max-w-fit">
                Your Text Preview ({text.split(" ").length} words and{" "}
                {text.length} characters)
              </p>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseStatePage;
