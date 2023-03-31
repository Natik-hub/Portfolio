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
        It’s a pleasure to meet you. My name is Natnael Kibru and I have a degree in software engineering. I was self-employed as a software developer and digital marketer at a tech startup called Yaltopia tech. I have more than a year of experience developing websites. I have confidence in my ability to complete tasks assigned to me in a timely manner. I'm also a fast learner so I'm ready to learn new things if needed. I have good communication abilities and flexible to work in any environment as required. All in All, I believe I have necessary skills and knowledge required to help you. 
          I have my CV and LinkedIn profile on the sidebar.

        </p>
      </div>
    </div>
  );
};

export default About;
