import React from "react";
import { Link } from "react-router-dom";

const RedirectButton = ({ pushButton, title, type }) => {
  return (
    <Link
      className={type === "light" ? "link link-light" : "link link-dark"}
      to={pushButton}
    >
        {title}
    </Link>
  );
};

export default RedirectButton;
