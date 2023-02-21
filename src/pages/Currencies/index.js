import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Currencies = () => {
  const navigate = useNavigate(); //returns us a function we can use

  const [currencies, setCurrencies] = useState([
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ]);

  console.log(currencies);

  // make these li's clickable and take us to that specific coins page
  const handleClick = (symbolOfItem) => {
    console.log("we have the symbol of item that was clicked");
    console.log(symbolOfItem);
    navigate(`/coin/${symbolOfItem}`);
    // manually switch pages to coin/symbolOfItem
  };

  let listOfCoins = currencies.map((item) => {
    // we use an anonomys function here so that our onclick fires when we click not when the page is run
    return (
      <li onClick={() => handleClick(item.symbol)} key={JSON.stringify(item)}>
        {item.name}
      </li>
    );
  });

  return (
    <div className="page-container">
      <h1>Currencies Page</h1>
      <ul id="coin-list-ul">{listOfCoins}</ul>
      {/* here put list of currencies */}
    </div>
  );
};

export default Currencies;
