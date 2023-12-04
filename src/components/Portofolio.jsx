import React from "react";
import notes from "../assets/portfolio/notes.png";
import menu from "../assets/portfolio/menu.png";
import tours from "../assets/portfolio/tours.png";
import calculator from "../assets/portfolio/calculator.png";
import birthday from "../assets/portfolio/birthday.png";
import colorgenerator from "../assets/portfolio/colorgenerator.png";

const Portofolio = () => {
  const openLink = (index, linkType) => {
    const links = {
      demo: [
        "https://hasime-notes.netlify.app/",
        "https://hasime-menu.netlify.app/",
        "https://hasime-tours.netlify.app/",
        "https://hasime-calculator.netlify.app/",
        "https://hasime-birthday-buddy.netlify.app/",
        "https://hasime-colorgenerator.netlify.app/",
      ],
      code: [
        "https://github.com/Hasime1/todo-react",
        "https://github.com/Hasime1/05-menu",
        "https://github.com/Hasime1/02-tours",
        "https://github.com/Hasime1/Calculator",
        "https://github.com/Hasime1/01-birthday-buddy",
        "https://github.com/Hasime1/09-color-generator",
      ],
    };

    window.open(links[linkType][index], "_blank");
  };

  const portofolios = [
    {
      id: 1,
      src: notes,
    },
    {
      id: 2,
      src: menu,
    },
    {
      id: 3,
      src: tours,
    },
    {
      id: 4,
      src: calculator,
    },
    {
      id: 5,
      src: birthday,
    },
    {
      id: 6,
      src: colorgenerator,
    },
  ];

  return (
    <div
      name="portofolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portofolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portofolios.map(({ id, src }, index) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openLink(index, "demo")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openLink(index, "code")}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
