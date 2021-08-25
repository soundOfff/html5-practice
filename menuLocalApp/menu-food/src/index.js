import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./data";
import { useState } from "react";

const DisplayCards = (props) => {
  return data
    .filter((card) => {
      if (props.filterCategory === "all") {
        return card;
      } else {
        return card.category === props.filterCategory;
      }
    })
    .map((card) => {
      return (
        <div className="row-span-1 row-col-1 p-4  flex flex-row ">
          <img
            alt="food"
            className="h-full w-1/3 border-2 border-yellow-600 mr-8 rounded-lg"
            src={card.img}
          ></img>
          <div id="content-txt" className="pr-6 pt-2">
            <div className="flex flex-row items-center justify-between">
              <h2 className="font-bold text-lg">{card.title}</h2>
              <p className="font-bold text-yellow-500">{card.price}</p>
            </div>
            <hr></hr>
            <p className="text-center text-gray-500 pt-6 ">{card.desc}</p>
          </div>
        </div>
      );
    });
};
const buttons = ["All", "BreakFast", "Lunch", "Shakes"];

const DisplayButton = (props) => {
  return buttons.map((btn) => (
    <button
      className="font-semibold focus:outline-none"
      onClick={(event) => props.onClick(event.target.innerHTML)}
    >
      {btn}
    </button>
  ));
};

const App = () => {
  const [category, setCategory] = useState("all");

  const changeCategory = (cat) => {
    const formatCat = cat.toLowerCase();
    setCategory(formatCat);
  };

  return (
    <div className=" h-full w-full text-center">
      <div id="title" className="">
        <h1 className=" text-4xl font-bold  ">Menu App!</h1>
        <div className="mt-2 ml-auto mr-auto h-1 w-24 bg-yellow-400"></div>
      </div>
      <div
        id="menu-selection"
        className="text-yellow-400 mt-10 ml-auto mr-auto h-12 w-72 flex flex-row items-center justify-between "
      >
        <DisplayButton onClick={changeCategory} />
      </div>
      <div
        id="card-conteiner"
        className="ml-auto mr-auto mt-4 h-full w-3/4 grid grid-rows-5 grid-cols-2 "
      >
        <DisplayCards filterCategory={category} />
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
