import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, My name is Natnael Kibru. 
        I am a passionate Software Engineer with a strong background in frontend development and Power Platform solutions. With a degree in Software Engineering, I have gained hands-on experience through my work at Yaltopia Tech, where I developed dynamic websites, and remotely working with private clients based in the U.S. as a Power Platform Developer. Over the past few years, I have honed my ability to create user-friendly and efficient applications while leveraging the Power Platform suite to deliver impactful business solutions.
        I am a fast learner, committed to continuously improving my technical skills and adapting to new challenges. I pride myself on my strong communication skills, teamwork, and adaptability, which allow me to thrive in any working environment. With a keen eye for detail and a drive to meet deadlines, I am always ready to take on new opportunities and contribute to projects that make a difference.

        </p>
      </div>
    </div>
  );
};

export default About;
