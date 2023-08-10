import React from "react";
import "../styles/card.css";
export function Card(props) {
  return (
    <div className="Card">
      <img className="card-image" src={props.data["image"]} alt=""></img>

      <div className="information">
        <h1 className="card-title">{props.data["title"]}</h1>
        <p className="card-description">{props.data["description"]}</p>
        <p className="card-content">{props.data["content"]}</p>
        <h3 className="publish">{props.data["publishedAt"]}</h3>
      </div>
    </div>
  );
}
