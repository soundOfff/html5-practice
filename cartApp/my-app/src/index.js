import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./data";

const calculeItems = (arrayItems) => {
  var total = 0;
  arrayItems.map((item) => {
    total += item.amount;
  });
  return total;
};

const ShoppingCart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
};

const DisplayItemCarts = (props) => {
  function handleDown(item) {
    console.log("Abajo");
    props.update(item, false);
  }

  function handleUp(item) {
    console.log("Arriba");
    props.update(item, true);
  }

  return props.datos.map((item) => {
    return (
      <div
        id="cartContainer"
        className="w-full h-1/5 flex  justify-between p-4"
      >
        <div className="h-full w-1/2 flex items-center ">
          <img
            className="h-full w-22"
            src={item.img}
            alt={`${item.title}`}
          ></img>
          <div className="h-full w-1/2">
            <h3 className="font-bold text-gray-700">{item.title}</h3>
            <p className="font-bold text-gray-400">{`$${item.price}`}</p>
            <button className="text-md tracking-widest bg-transparent text-gray-300 font-semibold">
              remove
            </button>
          </div>
        </div>
        <div className="h-full w-1/12 flex-row text-center">
          <button onClick={() => handleUp(item)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <p>{item.amount}</p>
          <button onClick={() => handleDown(item)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  });
};

const App = () => {
  const bagData = data;
  const [bag, setBag] = useState(bagData);

  const updateBag = (item, isUp) => {
    const newItem = item;
    isUp ? (newItem.amount += 1) : (newItem.amount -= 1);
    let newBag = bag;
    newBag[item.id - 1] = newItem;
    //prevState de Previous State, estado anterior.
    setBag((prevState) => {
      return newBag;
    });
    console.log(bag);
  };

  return (
    <div id="main" className="h-full w-full">
      <div
        id="upBar"
        className="h-1/6 w-full bg-blue-600 flex items-center justify-center"
      >
        <div className="h-3/4 w-2/5 flex items-center justify-between">
          <h1 className="text-6xl text-white font-bold">ShopCart</h1>
          <ShoppingCart />
        </div>
      </div>
      <div id="middleContent" className="h-5/6 w-full bg-gray-250 ">
        <div
          id="bagContent"
          className="h-full w-full flex items-center justify-center"
        >
          <div className="w-1/2 h-full flex-row pt-20">
            <h1 className="text-6xl text-gray-600 font-bold text-center p-5">
              Your Cart
            </h1>

            {/* { calculeItems(bag) <= 0 ? } */}
            <DisplayItemCarts datos={bag} update={updateBag} />

            <div className="h-1 bg-gray-700"></div>
            <div className="h-12 w-full flex items-center justify-between">
              {/* cambiar valores */}
              <h1 className="text-2xl font-bold text-gray-700">Total </h1>
              <h1 className="text-2xl font-bold text-gray-700">{`$ ${0.0}`}</h1>
            </div>
            <div className="h-8 w-32 mx-auto">
              <button className="h-8 w-32 border border-black bg-white rounded shadow-xl">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
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

/*const DisplayCards = (props) => {
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
*/
