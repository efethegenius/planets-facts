import React, { useState } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";
import chevron from "./assets/icon-chevron.svg";

export const Navbar = () => {
  const [allPlanets, setAllPlanets] = useState(data);
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <section>
      <nav>
        <h1>THE PLANETS</h1>
        {/* <img src={ham} alt="" onClick={handleMenu} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          onClick={handleMenu}
        >
          <g fill="#FFF" fill-rule="evenodd" className={showMenu ? "hamb" : ""}>
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </nav>
      <div className={`${showMenu ? "menu show-menu" : "menu"}`}>
        <div className="menu-container">
          {allPlanets.map((singlePlanet) => {
            const { name } = singlePlanet;
            return (
              <Link to={`/planet/${name}`}>
                <div
                  key={name}
                  className="name"
                  onClick={() => setShowMenu(false)}
                >
                  <div className="full-name">
                    <div
                      className="dot"
                      style={{
                        backgroundColor:
                          name === "Mercury"
                            ? "#419ebb"
                            : name === "Venus"
                            ? "#eda249"
                            : name === "Earth"
                            ? "#6d2ed5"
                            : name === "Mars"
                            ? "#d14c32"
                            : name === "Jupiter"
                            ? "#d83a34"
                            : name === "Saturn"
                            ? "#cd5120"
                            : name === "Uranus"
                            ? "#1ec1a2"
                            : "#2d68f0",
                      }}
                    ></div>
                    <h1
                      className={`${activeItem === name ? "active-nav" : ""}`}
                      onClick={() => {
                        setActiveItem(activeItem === name ? "" : name);
                      }}
                    >
                      {name}
                    </h1>
                  </div>
                  <img src={chevron} alt="chevron" className="chevron" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
