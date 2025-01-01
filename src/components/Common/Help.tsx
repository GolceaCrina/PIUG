import React from "react";

const HelpButton = () => {
  const handleClick = () => {
    alert("Cum te putem ajuta? Contactează-ne pentru suport!");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Help"
      className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F736D] text-white shadow-lg transition-all hover:bg-[#174F4C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F736D]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 8.25a3 3 0 016 0c0 1.657-1.343 3-3 3v3m0 4h.008v-.008H12v.008z"
        />
      </svg>
    </button>
  );
};

export default HelpButton;
