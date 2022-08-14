import React from "react";

function Button(props) {
  return (
    <button
      className={`${
        props.outline
          ? `bg-white border-pink1 border-2 text-pink1 font-bold`
          : props.color ? props.color : "bg-pink1"
      } px-12 py-3 rounded-full ${props.size ? props.size : 'w-full'}
      text-white text-base shadow-lg flex justify-center items-center ${props.addClass}`}
    >
      <div>
        <span className="text-sm">{props.title}</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </button>
  );
}

export default Button;
