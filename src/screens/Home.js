import React from "react";

import { useSelector } from "react-redux";
import Card from "../Componnent/Card";

const Home = () => {
  const places = useSelector((state) => state.place.places);

  return (
    <div className="Home">
      <div className="landing">
        <div className="content">
          <h1>
            LIVE YOUR <br /> <span> ADVENTURE</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, eum ab in illo fuga autem odit eaque quos tenetur{" "}
            <br />
            Nostrum sunt a explicabo ipsa similique exercitationem laborum, in
            rerum. Illo.
          </p>
          <button className="btn-primary"> Visit more</button>
        </div>
      </div>
      <div className="container">
        <div className="place-list">
          {places.map((el, idx) => (
            <Card place={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
