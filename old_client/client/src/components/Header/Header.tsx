import React from "react";
import { Navigation } from "./Navigation";

export const Header: React.FC = () => (
  <header className="flex flex-wrap gap-10 items-center px-9 w-full text-base text-black border-b border-stone-300 max-md:px-5 max-md:max-w-full">
    <h1 className="grow shrink self-stretch my-auto text-8xl w-[132px] max-md:text-4xl">
      Jessie
    </h1>
    <Navigation />
    <button className="grow shrink gap-2.5 self-stretch px-11 py-6 my-auto text-white rounded-3xl border border-solid bg-indigo-950 border-stone-300 min-h-[67px] w-[154px] max-md:px-5">
      Download CV
    </button>
  </header>
);
