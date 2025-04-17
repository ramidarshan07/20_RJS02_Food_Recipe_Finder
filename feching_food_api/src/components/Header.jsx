import React from "react";

const Header = () => {
  return (
    <>
      <div className="headerr pt-2">
        <div className=" container d-flex justify-content-between">
          <div className="child1 img-hover">
            <a
              href="https://www.linkedin.com/in/darshan-rami-b735a520a/"
              target="_blank"
            >
              <img src="./public/D-logo.png" alt="D-logo" className="dlogo" />
            </a>
          </div>
          <div className="child2 d-flex align-items-center img-hover">
            <a href="https://github.com/ramidarshan07" target="_blank">
              <img
                src="./public/github.webp"
                alt="github-icon"
                className="rounded-circle"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
