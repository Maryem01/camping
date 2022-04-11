import React from "react";
import { useDispatch } from "react-redux";
import { addtoList, count } from "../Js/PlaceSlice/PlaceSlice";

const Card = ({ place }) => {
  const dispatch = useDispatch();
  return (
    
    <div className="card">
    {console.log(place)}
      <img src={place.img} alt="" />
      <span className="count">{place.Visited}</span>
      <div className="card-body">
        <h3>{place.name}</h3>
      <p>{place.Description.slice(0, 30)}</p>
        <div className="card-footer">
          <h3>{place.price}</h3>
          <span
            className="btn-primary"
            onClick={() => {
              dispatch(count(place.id));
              dispatch(addtoList({ place }));
            }}
          >
            Visit{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
