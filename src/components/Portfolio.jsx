import React from "react";
import installNode from "../assets/portfolio/installNode.jpg";
import cafeWebsite from "../assets/portfolio/cafeWebsite.png";
import blogApp from '../assets/portfolio/blogApp.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cafeWebsite,
      href: "https://github.com/Natik-hub/CafeWebsite",
    },
    {
      id: 2,
      src: installNode,
      href: "",
    },
    {
      id: 3,
      src: blogApp,
      href: "https://blog-app-chi-bay.vercel.app/",
    },

  
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a 
                href={href} 
                target="_blank" 
                rel="noreferrer"> 
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
               
                <a 
                href='https://github.com/Natik-hub?tab=repositories' 
                target="_blank" 
                rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                 </a>
               
              </div>
            </div>
          ))}
           <div>
            <h1 className="flex items-center justify-center text-4xl font-bold ">More to Come</h1>
        </div>
        </div>
      </div>
    </div>
  );
};
  
export default Portfolio;
