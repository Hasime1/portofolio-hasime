import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div pb-8>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am Hasime Merovci. Bachelor of science in informatics engineering. I
          have an enthusiastic outlook towards work in programming. My expertise
          lies in designing and developing web applications using a variety of
          technologies
        </p>
        <br />
        <p className="text-xl">
          I am passionate about using technology to solve real-world problems
          and am always eager to learn about new technologies and techniques.
        </p>
      </div>
    </div>
  );
};

export default About;
