import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faBook,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
const sublinks = [
  {
    page: "products",
    links: [
      {
        label: "payment",
        icon: <FontAwesomeIcon icon={faBook} />,
        url: "/products",
      },
      {
        label: "terminal",
        icon: <FontAwesomeIcon icon={faCreditCard} />,
        url: "/products",
      },
      {
        label: "connect",
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        url: "/products",
      },
    ],
  },
  {
    page: "developers",
    links: [
      {
        label: "plugins",
        icon: <FontAwesomeIcon icon={faBook} />,
        url: "/products",
      },
      {
        label: "libraries",
        icon: <FontAwesomeIcon icon={faBook} />,
        url: "/products",
      },
      {
        label: "help",
        icon: <FontAwesomeIcon icon={faBook} />,
        url: "/products",
      },
      {
        label: "billing",
        icon: <FontAwesomeIcon icon={faBook} />,
        url: "/products",
      },
    ],
  },
  {
    page: "company",
    links: [
      {
        label: "about",
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        url: "/products",
      },
      {
        label: "customers",
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        url: "/products",
      },
    ],
  },
];

export default sublinks;
