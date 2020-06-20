import React from "react";
import Footer from "../Footer";
const Container = (props) => {
  return (
    <div
      style={{ outline: "none" }}
      tabIndex={-1}
      role="group"
      id="gatsby-focus-wrapper"
    >
      <div>
        <div className="pattern" />
        <div
          className="transition-container"
          style={{
            transition: "opacity 500ms ease-in-out",
            opacity: 1,
          }}
        >
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Container;
