

import React from "react";

const Slider: React.FC = () => {
  return (
    <div className="relative h-[80vh] bg-slate-800">
      {/* Radio Inputs */}
      <input
        className="hidden peer/slider1 checkbox"
        type="radio"
        name="slider"
        id="slider1"
        defaultChecked 
      />
      <input
        className="hidden peer/slider2 checkbox"
        type="radio"
        name="slider"
        id="slider2"
      />
      <input
        className="hidden peer/slider3 checkbox"
        type="radio"
        name="slider"
        id="slider3"
      />

      {/* Slides Container */}
      <div className="relative w-screen h-[100%] flex transition-all duration-500 ease-in-out peer-checked/slider1:-left-0 peer-checked/slider2:-left-[100vw] peer-checked/slider3:-left-[200vw]">
        <div className="relative w-full h-full flex bg-red-900 "></div>
        <div className="relative w-full h-full flex bg-amber-500"></div>
        <div className="relative w-full h-full flex bg-emerald-500"></div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute w-full flex justify-center gap-2 bottom-12">
        <label
          htmlFor="slider1" // Use `htmlFor` instead of `for` in JSX
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 peer-checked/slider1:opacity-100 peer-checked/slider1:w-10"
        ></label>
        <label
          htmlFor="slider2"
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 peer-checked/slider2:opacity-100 peer-checked/slider2:w-10"
        ></label>
        <label
          htmlFor="slider3"
          className="block w-5 h-5 bg-white cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 peer-checked/slider3:opacity-100 peer-checked/slider3:w-10"
        ></label>
      </div>
    </div>
  );
};

export default Slider;