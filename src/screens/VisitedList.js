import React from "react";
import { useSelector } from "react-redux";
import Card from "../Componnent/Card"
const VisitedList = () => {
  const myList = useSelector((state) => state.place.myList);
  return (
    <div>
      <h1>My list</h1>
      <div className="myList">
        <div className="place-list">
          {myList.length ? (
            myList.map((el, idx) =>
             <Card place={el} />)
          ) : (
            <h1> List is empty </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisitedList;
