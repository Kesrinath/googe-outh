import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import "../styles/newcomponent.css";

let input = {
  width: "250px",
  padding: "10px",
  bordeRadius: "5px",
  outline: "none",
  marginTop: "10px",
  marginBottom: "20px",
  marginLeft: "calc(80vw/2 )",
};

function Newcomponent() {
  const [info, setInfo] = useState([]);
  const [subject, setSubject] = useState("football");
  useEffect(() => {
    (async () => {
      let url = `https://gnews.io/api/v4/search?q=${subject}&lang=en&country=us&max=10&apikey=5404fda2c4f1e87f6eea15d2ac11226f`;
      let response = await fetch(url);
      let data = await response.json();
      setInfo(data["articles"]);
    })();
  }, [subject]);
  return (
    <>
      <input
        style={input}
        type="text"
        placeholder="search news here"
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      ></input>
      <div className="newcomponent">
        {info?.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </>
  );
}

export default Newcomponent;
