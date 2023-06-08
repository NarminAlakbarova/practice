import React from "react";
import { uid } from "uid";

const Card = ({ data }) => {
  return (
    <div className="card">
      <ul>
        {data.map((item) => (
          <li key={uid(12)}>{item} </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
