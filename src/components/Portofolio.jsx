import React from "react";
import notes from "../assets/portfolio/notes.png";
import menu from "../assets/portfolio/menu.png";
import grocery from "../assets/portfolio/grocery.png";
import tours from "../assets/portfolio/tours.png";
import burger from "../assets/portfolio/burger.png";
import travel from "../assets/portfolio/travel.png";
const Portofolio = () => {
  const openLink = (index, linkType) => {
    const links = {
      demo: [
        "https://hasime-notes.netlify.app/",
        "https://hasime-menu.netlify.app/",
        "https://hasime-grocerybud.netlify.app/",
        "https://hasime-burgershop.netlify.app/",
        "https://hasime-travel.netlify.app/",
        "https://hasime-tours.netlify.app/",
      ],
      code: [
        "https://github.com/Hasime1/todo-react",
        "https://github.com/Hasime1/05-menu",
        "https://github.com/Hasime1/10-grocery-bud.git",
        "https://github.com/Hasime1/burger-shop.git",
        "https://github.com/Hasime1/Travel-explore.git",
        "https://github.com/Hasime1/02-tours",
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
      src: grocery,
    },
    {
      id: 4,
      src: burger,
    },
    {
      id: 5,
      src: travel,
    },
    {
      id: 6,
      src: tours,
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
