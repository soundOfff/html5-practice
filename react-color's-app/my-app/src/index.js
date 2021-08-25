import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Color selector //

const formatColor = (color) => {
  return "#" + color;
};

const InputNewColor = (props) => {
  const [color, setColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (color[0] === "#") {
      props.addNewColor(color);
    }
    if (!color.includes("#")) {
      const formatCol = formatColor(color);
      props.addNewColor(formatCol);
    }
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-4 absolute top-1/4">
      <input
        placeholder="Put code color..."
        className=" px-8 py-3 bg-gray-200 focus:outline-none rounded-xl"
        style={{
          borderTopRightRadius: "25%",
          borderBottomRightRadius: "25%",
          borderTopLeftRadius: "25%",
          borderBottomLeftRadius: "25%",
        }}
        value={color}
        required
        onChange={(event) => setColor(event.target.value)}
      ></input>
      <button className="text-white p-3 rounded-lg bg-blue-500 m-2">
        Add Color
      </button>
    </form>
  );
};

const EditForm = (props) => {
  return (
    <form
      className="edit-form"
      style={{ display: props.displayForm ? "block" : "none" }}
    >
      <input placeholder="Input your edit"></input>
      <button>Save {props.editColor}</button>
    </form>
  );
};

const DisplayButton = (props) => {
  return props.infoColors.map((color) => (
    <div className=" h-24 w-48 flex justify-center mt-6 text-white ">
      <button
        style={{
          backgroundColor: color,
          border: "1px solid black",
        }}
        className="h-24  w-24 rounded self-end shadow-2xl"
        onClick={() => {
          document.body.style.backgroundColor = color;
        }}
      >
        {color}
      </button>
      <div className="h-full w-1/2 flex">
        <button
          className="h-8 w-8 bg-red-600 rounded text-black"
          onClick={() => props.deleteColor(color)}
        >
          X
        </button>
        <button
          className="h-8 w-12 bg-blue-500 rounded text-white"
          onClick={() => props.toggle(color)}
        >
          Edit
        </button>
      </div>
    </div>
  ));
};

const App = () => {
  const [colors, setColors] = useState([
    "#413c69",
    "#4a47a3",
    "#709fb0",
    "#a7c5eb",
  ]);
  const [display, setDisplay] = useState(false);
  const [onEdit, setOnEdit] = useState("");

  const deleteColor = (color) => {
    const newColors = colors.filter((value) => {
      return value !== color;
    });
    setColors(newColors);
  };

  const addNewColor = (color) => {
    const newColors = [...colors, color];
    setColors(newColors);
  };

  const toggleEditForm = (colorOnEdit) => {
    setDisplay(!display);
    setOnEdit(colorOnEdit);
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-wrap ">
      <div className="h-24 w-1/4 absolute top-1/4">
        <InputNewColor addNewColor={addNewColor} />
      </div>
      <div className=" h-auto w-auto flex flex-wrap">
        <DisplayButton
          deleteColor={deleteColor}
          infoColors={colors}
          toggle={toggleEditForm}
        />
      </div>
      <EditForm displayForm={display} editColor={onEdit} />
    </div>
  );
};

ReactDOM.render(
  <div className="h-full w-full flex justify-center items-center">
    <App />
  </div>,
  document.getElementById("root")
);
