import React, { useEffect, useState } from "react";
import { data } from "./data";
import { Link, useParams } from "react-router-dom";
import source from "./assets/icon-source.svg";
// import pl from "./assets/planet-saturn-internal.svg";

export const Planet = () => {
  const [planetName, SetPlanetName] = useState("default name");
  const [planetDetails, setPlanetDetails] = useState(true);
  const [geologyDetails, setGeologyDetails] = useState(false);
  const [internalDetails, setInternalDetails] = useState(false);
  const [overview, setOverview] = useState("");
  const [structure, setStructure] = useState("");
  const [geology, setGeology] = useState("");
  const [images, setImages] = useState("");
  const [rotation, setRotation] = useState("");
  const [revolution, setRevolution] = useState("");
  const [radius, setRadius] = useState("");
  const [temperature, setTemperature] = useState("");
  const { name } = useParams();

  const handlePlanetDetails = () => {
    setPlanetDetails(true);
    setGeologyDetails(false);
    setInternalDetails(false);
  };
  const handleGeologyDetails = () => {
    setPlanetDetails(false);
    setGeologyDetails(true);
    setInternalDetails(false);
  };
  const handleInternalDetails = () => {
    setPlanetDetails(false);
    setGeologyDetails(false);
    setInternalDetails(true);
  };

  useEffect(() => {
    const newPlanet = data.find((planet) => planet.name === name);
    SetPlanetName(newPlanet.name);
    setOverview(newPlanet.overview);
    setStructure(newPlanet.structure);
    setGeology(newPlanet.geology);
    setImages(newPlanet.images);
    setRotation(newPlanet.rotation);
    setRevolution(newPlanet.revolution);
    setRadius(newPlanet.radius);
    setTemperature(newPlanet.temperature);
  }, [name]);
  return (
    <section className="planet-container">
      <div className="full-planet">
        <div className="planet-images">
          <img
            src={`${
              planetDetails
                ? images.planet
                : geologyDetails
                ? images.planet
                : internalDetails
                ? images.internal
                : ""
            }`}
            alt=""
            className="try"
          />
          {geologyDetails && (
            <img src={images.geology} alt="geology" className="geology" />
          )}
        </div>
        <div className="planet-details">
          <div className="planet-details-container">
            <h1 className="planet-name">{planetName}</h1>
            <p>{`${
              planetDetails
                ? overview.content
                : internalDetails
                ? structure.content
                : geologyDetails
                ? geology.content
                : ""
            }`}</p>
            <p className="wiki-link">
              Source:{" "}
              <a
                href={`${
                  planetDetails
                    ? overview.source
                    : internalDetails
                    ? structure.source
                    : geologyDetails
                    ? geology.source
                    : ""
                }`}
              >
                Wikipedia <img src={source} alt="" className="source" />
              </a>
            </p>
          </div>
          <div className="views">
            <button
              className={planetDetails ? "btn active" : "btn btn-overview"}
              onClick={handlePlanetDetails}
            >
              <span className="num">01</span> Overview
            </button>
            <button
              className={internalDetails ? "btn active" : "btn btn-structure"}
              onClick={handleInternalDetails}
            >
              <span className="num">02</span>{" "}
              <span className="str-text">Internal</span> Structure
            </button>
            <button
              className={geologyDetails ? "btn active" : "btn btn-surface"}
              onClick={handleGeologyDetails}
            >
              <span className="num">03</span> Surface{" "}
              <span className="geo-text">geology</span>
            </button>
          </div>
        </div>
      </div>
      <div className="planet-stats">
        <div className="stats">
          <p>Rotation Time</p>
          <h5>{rotation}</h5>
        </div>
        <div className="stats">
          <p>Revolution Time</p>
          <h5>{revolution}</h5>
        </div>
        <div className="stats">
          <p>Radius</p>
          <h5>{radius}</h5>
        </div>
        <div className="stats">
          <p>Average Temp</p>
          <h5>{temperature}</h5>
        </div>
      </div>
    </section>
  );
};
