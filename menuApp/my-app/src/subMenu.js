import React, { useEffect, useRef, useState } from "react";

const SubMenu = (props) => {
  const container = useRef(null);
  const [columns, setColumns] = useState("grid-cols-2");

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = props.location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (props.pageContent.links.length === 2) {
      setColumns("grid-cols-2");
    }
    if (props.pageContent.links.length === 3) {
      setColumns("grid-cols-3");
    }
    if (props.pageContent.links.length === 4) {
      setColumns("grid-cols-4");
    }
  }, [props.location, props.page, props.pageContent.links]);

  return (
    <aside
      className={`${
        props.show ? "block" : "hidden"
      } h-1/6 w-1/4 bg-white shadow-xl rounded-lg absolute  z-40 transitions  `}
      ref={container}
    >
      <div className="h-full w-full relative">
        <div className={`triangle rounded-bl h-full`}></div>
        <div className="p-4 text-center h-full">
          <h1 className="text-lg font-bold h-1/4">{props.page}</h1>
          <div className={`text-gray-900 text-xl grid h-full ${columns} `}>
            {props.pageContent.links.map((link, index) => {
              const { url, icon, label } = link;
              return (
                <a
                  className="h-3/4 flex flex-row justify-center items-center"
                  key={index}
                  href={url}
                >
                  {icon} {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SubMenu;
