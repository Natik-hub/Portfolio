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
        It’s a pleasure to meet you. My name is Natnael Kibru I’m a self-employed digital marketer 
        and software developer at a tech startup called Yaltopia tech. I am confident in my ability 
        to complete tasks assigned to me in a timely manner. Eager to take on new challenges and prepared 
        to learn new things to expand and grow my knowledge, skills and abilities.
         Possess excellent communication skills and have an eye for detail.
          Flexible to work in any environment as required. I believe I have necessary skills and knowledge required to help you. 
          I have my CV and LinkedIn profile on the sidebar.

        </p>
      </div>
    </div>
  );
};

export default About;
