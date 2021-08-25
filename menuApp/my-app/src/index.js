import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
//import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
// import { faSave } from "@fortawesome/free-solid-svg-icons";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";
//import { faWallet } from "@fortawesome/free-solid-svg-icons";

import SubMenu from "./subMenu";
import sublinks from "./data";

const Header = (props) => {
  const displayBar = (event) => {
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - -8;
    props.openSubMenu({ center, bottom }, page);
  };

  return (
    <div className="w-full h-20 flex flex-row items-center justify-between">
      <h1 className="text-3xl text-white font-bold cursor-pointer opacity-100 hover:opacity-50">
        Stripe
      </h1>
      <ul className="flex flex-row justify-between items-center w-1/3">
        <li
          className="text-xl text-white font-semibold opacity-100 hover:opacity-50 cursor-pointer"
          onMouseOver={(event) => displayBar(event)}
          onMouseLeave={() => {
            const hideProp = props.hide;
            setTimeout(() => {
              hideProp();
            }, 2000);
          }}
        >
          <button className="focus:outline-none bg-transparent">
            Products
          </button>
        </li>
        <li
          className="text-xl text-white font-semibold opacity-100 hover:opacity-50 cursor-pointer"
          onMouseOver={(event) => displayBar(event)}
          onMouseLeave={() => {
            const hideProp = props.hide;
            setTimeout(() => {
              hideProp();
            }, 2000);
          }}
        >
          <button className="focus:outline-none bg-transparent">
            Developers
          </button>
        </li>
        <li
          className="text-xl text-white font-semibold opacity-100 hover:opacity-50 cursor-pointer"
          onMouseOver={(event) => displayBar(event)}
          onMouseLeave={() => {
            const hideProp = props.hide;
            setTimeout(() => {
              hideProp();
            }, 2000);
          }}
        >
          <button className="focus:outline-none bg-transparent">Company</button>
        </li>
      </ul>
      <button className="h-10 w-32 shadow rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 text-white ">
        Sing in
      </button>
    </div>
  );
};
const Phono = () => {
  return (
    <div className="h-2/3 w-1/2 bg-white shadow-xl rounded-2xl absolute left-1/2 z-10 ">
      <div id="PhonoContainer" className="h-full w-full p-4 shadow-lg">
        <div
          id="HeaderPhono"
          className="h-1/5 w-full flex flex-col items-center justify-center"
        >
          <img
            src="./imagesStripe/mapas.png"
            alt="map"
            className="h-18 w-16"
          ></img>
          <div className="text-xs">
            <p className="font-semibold text-gray-900">Increment Magazine</p>
          </div>
        </div>
        <div id="midPhono" className="grid grid-rows-6 bg-white h-4/5 w-full">
          <div className="pt-2 row-span-1 flex flex-col justify-center items-center">
            <button className=" focus:outline-none h-1/2 w-full rounded-2xl bg-gray-900 text-white">
              <FontAwesomeIcon icon={faApple} />
              Pay
            </button>
          </div>
          <div className="row-span-1 flex flex-col justify-between ">
            <p className="text-left text-sm text-gray-600">
              Correo electronico
            </p>
            <input className="py-1 w-full shadow-xl rounded self-center border border-gray-400 focus:outline-none"></input>
          </div>
          <div className="row-span-2 flex flex-col pt-3">
            <p className="text-left text-sm text-gray-600">
              Informacion de tarjeta
            </p>
            <table className="rounded">
              <input
                placeholder="   Numero..."
                className="py-1 w-full shadow-xl self-center border rounded border-gray-400 focus:outline-none"
              ></input>
              <input
                placeholder="   MM/AA"
                className="py-1 w-1/2 border-collapse shadow-xl rounded-tl rounded-bl  self-center border border-gray-400 focus:outline-none"
              ></input>
              <input
                placeholder="   CVC"
                className=" py-1 w-1/2 shadow-xl  self-center border rounded-tr rounded-br border-gray-400 focus:outline-none"
              ></input>
            </table>
          </div>
          <div className="row-span-2 flex flex-col ">
            <p className="text-left text-sm text-gray-600">Pais o Region</p>
            <select className="py-1 w-full shadow-xl rounded-sm self-center border border-gray-400 focus:outline-none">
              <option>Estados unidos</option>
              <option>Argentina</option>
            </select>
            <input
              placeholder="   Codigo Postal..."
              className="py-1 w-full shadow-xl rounded-sm self-center border border-gray-400 focus:outline-none"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

const MidPage = () => {
  return (
    <div id="midPage" className="h-full w-full">
      <div
        id="midPage-container"
        className="h-full w-full p-20 grid grid-cols-2 relative"
      >
        <div id="leftMid" className="z-30 w-full h-3/4 col-span-1 relative">
          <div className=" flex flex-col h-full w-full relative">
            <h1 className="text-6xl font-extrabold text-gray-900 absolute top-20">
              Infraestructura de pagos para Internet
            </h1>
            <p className="text-lg text-gray-600 font-semibold absolute top-1/2">
              Millones de empresas de todos los tamaños, desde startups hasta
              empresas de la lista Fortune 500, usan el software y las API de
              Stripe para aceptar pagos, enviar transferencias y gestionar sus
              negocios en Internet.
            </p>
            <button className="h-8 w-36 rounded-full bg-gray-800 absolute top-3/4 text-white">
              Start Now
            </button>
          </div>
        </div>
        <div id="rigthMid" className="h-full w-full col-span-1 relative z-10">
          <Phono />
        </div>
      </div>
    </div>
  );
};

const Stripe = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState("products");

  const openSubMenu = (coordinates, page) => {
    setIsSubMenuOpen(true);
    setLocation(coordinates);
    setPage(page);
  };

  const hideBar = () => {
    setIsSubMenuOpen(false);
  };

  const link = sublinks.find((link) => link.page === page.toLowerCase());

  return (
    <div id="main-page" className="main">
      <div id="main-container" className="h-full w-full px-80 relative">
        <Header openSubMenu={openSubMenu} hide={hideBar} />
        <SubMenu
          show={isSubMenuOpen}
          location={location}
          page={page}
          pageContent={link}
        />
        <MidPage />
      </div>
    </div>
  );
};

ReactDOM.render(<Stripe />, document.getElementById("root"));

// Menu-app //
// ------NavBar------
// const NavBar = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div
//       className="h-28 shadow-xl w-full flex flex-row items-center justify-between desktop:flex-nowrap tablet:flex-wrap"
//       style={
//         window.innerWidth <= 1024
//           ? {
//               height: show ? "420px" : "92px",
//             }
//           : {}
//       }
//     >
//       <div className="ml-44 flex flex-row items-center desktop:order-1">
//         <h1 className="text-4xl font-semibold text-black">Coding</h1>
//         <h1 className="pl-2 text-4xl font-semibold text-blue-300"> Addict</h1>
//       </div>
//       <ul
//         className="desktop:flex tablet:hidden desktop:order-2 tablet:order-3 tablet:flex-col tablet:justify-start tablet:w-full  desktop:flex-row items-center desktop:justify-between desktop:w-1/6"
//         style={
//           window.innerWidth <= 1200
//             ? {
//                 display: show ? "flex" : "none",
//               }
//             : {}
//         }
//       >
//         <li className="tablet:py-4 desktop:py-0 desktop:w-auto tablet:w-full desktop:hover:bg-transparent tablet:hover:bg-gray-400">
//           Home
//         </li>
//         <li className="tablet:py-4 desktop:py-0 desktop:w-auto tablet:w-full desktop:hover:bg-transparent tablet:hover:bg-gray-400">
//           About
//         </li>
//         <li className="tablet:py-4 desktop:py-0 desktop:w-auto tablet:w-full tablet:hover:bg-gray-400 desktop:hover:bg-transparent">
//           Proyects
//         </li>
//         <li className="tablet:py-4 desktop:py-0 desktop:w-auto tablet:w-full tablet:hover:bg-gray-400 desktop:hover:bg-transparent">
//           Contact
//         </li>
//         <li className="tablet:py-4 desktop:py-0 desktop:w-auto tablet:w-full tablet:hover:bg-gray-400 desktop:hover:bg-transparent">
//           Profile
//         </li>
//       </ul>
//       <ul className="desktop:flex desktop:order-3 flex-row items-center justify-between w-1/12 mr-44 text-blue-300">
//         <li className="tablet:block desktop:hidden">
//           <button onClick={() => setShow(!show)}>
//             <FontAwesomeIcon icon={faBars} size="2x" />
//           </button>
//         </li>
//         <li>
//           <FontAwesomeIcon
//             icon={faFacebookF}
//             className="tablet:hidden desktop:block"
//           />
//         </li>
//         <li>
//           <FontAwesomeIcon
//             icon={faTwitter}
//             className="tablet:hidden desktop:block"
//           />
//         </li>
//         <li>
//           <FontAwesomeIcon
//             icon={faLinkedinIn}
//             className="tablet:hidden desktop:block"
//           />
//         </li>
//         <li>
//           <FontAwesomeIcon
//             icon={faBehance}
//             className="tablet:hidden desktop:block"
//           />
//         </li>
//       </ul>
//     </div>
//   );
// };

// -------Side Bar------- //
// const Model = (props) => {
//   return (
//     <div
//       id="modelContent"
//       className=" h-1/4 w-1/3 bg-white rounded shadow-2xl text-right text-red-500 z-20"
//       style={props.show ? { display: "block" } : { display: "none" }}
//     >
//       <button
//         className="p-4 focus:outline-none"
//         onClick={() => {
//           props.update();
//         }}
//       >
//         <FontAwesomeIcon icon={faTimes} size="2x" />
//       </button>
//       <div className="text-center text-black">
//         <h1 className="text-4xl font-bold">Modal Content</h1>
//       </div>
//     </div>
//   );
// };
// const contentBar = ["Home", "Team", "Proyect", "Calendar", "Profile"];
// const icons = [faHome, faUserFriends, faSave, faCalendar, faArchive];

// const ContentPage = () => {
//   return contentBar.map((el, index) => {
//     return (
//       <li className=" p-4 hover:bg-blue-400 hover:text-white font-semibold flex flex-row items-center">
//         <FontAwesomeIcon icon={icons[index]} size="2x" />
//         <p className="px-5">{el}</p>
//       </li>
//     );
//   });
// };

// const LeftBar = (props) => {
//   return (
//     <div
//       className={`h-full w-1/4 flex-col bg-gray-200 shadow rounded ${
//         props.show ? "flex" : "hidden"
//       }`}
//     >
//       <div className="flex flex-row desktop:justify-between items-center">
//         <div className="flex flex-row p-10 tablet:text-md desktop:text-4xl ">
//           <h1 className="font-bold text-black">Coding</h1>
//           <h1 className="font-bold text-blue-300">Addict</h1>
//         </div>
//         <button
//           className="desktop:p-10 table:p-0 text-red-500 focus:outline-none"
//           onClick={() => props.update()}
//         >
//           <FontAwesomeIcon icon={faTimes} size="2x" />
//         </button>
//       </div>
//       <div>
//         <ul className="h-auto w-full">
//           <ContentPage />
//         </ul>
//       </div>
//     </div>
//   );
// };

// const SideBar = () => {
//   const [showModel, setShowModel] = useState(false);
//   const [showLeftBar, setShowLeftBar] = useState(false);

//   const updateShowModel = () => {
//     setShowModel(!showModel);
//   };
//   const updateLeftBar = () => {
//     setShowLeftBar(!showLeftBar);
//   };
//   return (
//     <div
//       className={`h-full w-full flex items-center justify-center bg-gray-600 relative + ${
//         showModel ? `bg-opacity-30` : `bg-opacity-100`
//       }`}
//     >
//       <button
//         className="h-12 w-24 bg-black text-white rounded z-20"
//         style={showModel ? { display: "none" } : { display: "block" }}
//         onClick={() => setShowModel(!showModel)}
//       >
//         Show Model
//       </button>
//       <Model show={showModel} update={updateShowModel} />

//       <button
//         className={`absolute top-0 left-0 text-blue-500 m-24 focus:outline-none z-20 ${
//           showLeftBar ? "hidden" : "block"
//         }`}
//         onClick={() => setShowLeftBar(!showLeftBar)}
//       >
//         <FontAwesomeIcon icon={faBars} size="3x" />
//       </button>

//       <div className={`h-full w-full absolute top-0 left-0 z-10`}>
//         <LeftBar update={updateLeftBar} show={showLeftBar} />
//       </div>
//     </div>
//   );
// };
