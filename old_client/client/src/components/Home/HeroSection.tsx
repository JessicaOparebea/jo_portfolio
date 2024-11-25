import Image from "next/image";
import React from "react";

export const HeroSection: React.FC = () => (
  <section className="flex flex-wrap gap-10 justify-between items-center px-11 w-full min-h-[651px] max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col self-stretch px-9 my-auto rounded-none min-w-[240px] w-[755px] max-md:px-5 max-md:max-w-full">
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98e76adb4263e425c1c4b84042921e2596498e29d7ef26b50e27bb9b4fec3e28?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637"
        alt="Decorative element"
        width={162}
        height={10}
        className="object-contain max-w-full aspect-[5.41] w-[162px] max-md:ml-2"
      />
      <div className="mt-6 mr-12 text-6xl text-indigo-950 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
        <span className="font-bold text-indigo-950">Hello, I am</span>
        <br />
        <span className="text-7xl font-bold text-indigo-950">
          Jessica Oparebea
        </span>
      </div>
      <p className="mt-6 text-xl text-indigo-950 max-md:max-w-full">
        I am a Biomedical Engineering student with a strong focus on
        computational modeling and research. My academic background has equipped
        me with advanced skills in developing innovative solutions for
        biomedical challenges. Beyond my technical expertise, I am passionate
        about philanthropy and actively contribute to community-focused
        initiatives, leading efforts in education, health, and support for
        underserved populations. My commitment to blending technical excellence
        with social impact drives my pursuit of meaningful contributions both in
        my field and within my community.
      </p>
      <div className="flex gap-5 justify-between items-start mt-10 max-w-full text-base w-[462px]">
        <button className="px-10 py-3.5 rounded-[60px] text-indigo-950 max-md:px-5">
          Contact Me
        </button>
        <button className="px-4 py-3.5 text-black border border-solid border-stone-500 rounded-[60px]">
          View My Portfolio
        </button>
      </div>
    </div>
    <Image
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c71c490f14d58fb50a4f74e8d9717d1d82c3d67ced48abb20b7b644af400574?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637"
      alt="Jessica Oparebea portrait"
      width={455}
      height={10}
      className="object-contain self-stretch my-auto bg-blend-darken aspect-[0.75] min-w-[240px] w-[455px] max-md:max-w-full"
    />
  </section>
);
