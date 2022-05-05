import React, { useState } from "react";
import "./App.css";

function App() {
  const [setError] = useState(false);
  const [data, setData] = useState();
  const getHeroes = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
        "X-RapidAPI-Key": "5c0d39eba1msh6a75d7dc4278de4p1c8d07jsn2c8279ef1fff",
      },
    };

    fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      });
  };
  const returnHeroes = () => {
      return (
        <div className="users__box">
          {data?.map((item, index) => (
            <div className="user__card" key={index}>
            <span>{item.id}{item.name}{item.powerstate}</span>
          </div>            
          ))}
        </div>
      );
  };

  return (
    <div className="App" id="App">
      <button className="boton" onClick={getHeroes}>
        Cargar héroes{" "}
      </button>
      {returnHeroes()}
    </div>
  );
}

export default App;
