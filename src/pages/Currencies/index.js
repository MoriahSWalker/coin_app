import React, { useState } from "react";
import "./index.css";

const Currencies = () => {
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

  let listOfCoins = currencies.map((item) => {
    return <li>{item.name}</li>;
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
