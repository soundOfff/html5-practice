/* eslint-disable */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

// Color selector //

const Form = (props) => {
  
  const handleSubmit = (event, isFinished) => {
    event.preventDefault();
    props.onSubmit(props.getTask);
    props.setTask("");
  };

  return (
    <form
      className=" h-20 w-full flex flex-row items-center justify-center pb-10 "
      onSubmit={handleSubmit}
    >
      <input
        className="py-4 px-20 mr-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-300 "
        placeholder="Input your task...."
        value={props.getTask}
        required
        onChange={(e) => props.setTask(e.target.value)}
      ></input>
      <button className="rounded-full h-16 w-16 bg-btnAddTask text-textBtnAddTask text-xl opacity-70 hover:opacity-100 hover:shadow-inner text-center	">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

const ItemList = (props) => {
  const handleClick = (event) => {
    props.container.isFinished = !props.container.isFinished;
    props.update(props.container);
  };

  const handleUpdate = (event) => {
    props.container.isEditable = !props.container.isEditable;
    props.updateEditable(props.container);
  };

  const handleSubmit = (event) => {
    let newContainer = props.container;
    newContainer = { ...newContainer, taskTxt: event.target.innerHTML };
    props.onChange(props.container, newContainer);
  };

  return (
    <li className="h-full p-2 w-full bg-backgroundTask shadow mt-2 rounded flex flex-row justify-between text-textTask">
      <p
        contentEditable={props.container.isEditable}
        onBlur={handleSubmit}
        className="font-task text-sm truncate"
        style={{
          textDecoration: props.container.isFinished ? "line-through" : "none",
          color: props.container.isFinished ? "black" : "white",
        }}
        id={props.number}
      >
        {props.container.taskTxt}
      </p>
      <div className="flex flex-row">
        <button
          className="px-2 text-trash"
          onClick={() => props.onDelete(props.container)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className="px-2 text-check" onClick={handleClick}>
          <FontAwesomeIcon icon={faCheckSquare} />
        </button>
        <button className="px-2 text-editBtn " onClick={handleUpdate}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </li>
  );
};

const List = (props) => {
  const [task, setTask] = useState("");

  return (
    <div className="h-5/6 w-full overflow-y-auto">
      <ul className="h-full w-full p-5 flex flex-col justify-between ">
        <div className="h-14 w-full">
          {props.list.map((task, index) => {
            return (
              <ItemList
                onDelete={props.onDelete}
                container={task}
                number={index}
                update={props.update}
                updateEditable={props.updateEditable}
                onChange={props.updateTxt}
              />
            );
          })}
        </div>
      </ul>
      <div className="h-20 w-full absolute bottom-0 left-0">
        <Form onSubmit={props.onSubmit} getTask={task} setTask={setTask} />
      </div>
    </div>
  );
};

const cacheIsEmpty = () => {
  if (localStorage.getItem("listToDo") === null) {
    localStorage.setItem(
      "listToDo",
      JSON.stringify([
        {
          taskTxt: "hi",
          isFinished: false,
          isEditable: false,
        },
      ])
    );
    console.log("Estableciendo cache.......");
  } else {
    return;
  }
};
const updateCache = (list) => {
  localStorage.setItem("listToDo", JSON.stringify(list));
};

const App = () => {
  cacheIsEmpty();
  const prevState = JSON.parse(localStorage.getItem("listToDo"));

  const [list, setList] = useState(prevState);

  const addTask = (newTaskTxt) => {
    console.log(list);
    const newTask = { taskTxt: newTaskTxt, isFinished: false };
    const newList = [...list, newTask];
    setList(newList);
    updateCache(newList);
  };
  const deleteTask = (delTask) => {
    const newList = list.filter((task) => task !== delTask);
    setList(newList);
    updateCache(newList);
  };
  const updateTask = (task) => {
    const index = list.findIndex((el) => el.taskTxt === task.taskTxt);
    const newList = [...list];
    newList[index] = { ...newList[index], isFinished: task.isFinished };
    setList(newList);
    updateCache(newList);
  };
  const updateEditable = (task) => {
    const index = list.findIndex((el) => el.taskTxt === task.taskTxt);
    const newList = [...list];
    newList[index] = { ...newList[index], isEditable: task.isEditable };
    setList(newList);
    updateCache(newList);
  };
  const updateTxt = (oldTask, newTask) => {
    const index = list.findIndex((el) => el.taskTxt === oldTask.taskTxt);
    const newList = [...list];
    console.log(newList[index]);
    newList[index] = { ...newList[index], taskTxt: newTask.taskTxt };
    console.log(newList[index]);
    setList(newList);
    updateCache(newList);
  };

  return (
    <div id="mainContainer" className="h-full w-full">
      <div className="h-5/6 w-1/3 bg-backgroundList mx-auto mt-5 shadow-lg rounded-xl">
        <h1 className="text-center pt-5 font-bold text-2xl font-title tracking-wider">
          To Do List, React and Tailwindcss
        </h1>
        <List
          list={list}
          onSubmit={addTask}
          onDelete={deleteTask}
          update={updateTask}
          updateEditable={updateEditable}
          updateTxt={updateTxt}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
