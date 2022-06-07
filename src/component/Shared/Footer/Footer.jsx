import React from "react";

const Footer = () => {
  return (
    <div
      style={{ height: "100px" }}
      className="bg-dark text-white sticky bottom-0"
    >
      <p className="my-auto">
        All Right Reserved &copy;{new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
