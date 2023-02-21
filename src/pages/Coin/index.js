import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  let { symbol } = useParams();
  // get param value from /currencies handleclick function to display in div
  const [coinData, setCoinData] = useState(null);
  // API CALL HERE (if we put api call outside of the use effect it will run every time we render)
  let myKey = process.env.REACT_APP_API_KEY;
  console.log({ myKey });

  // we will put API call inside useEffect. Make the api call once on first render. Takes in a function and an array
  let isFirstRender = useRef(true);
  useEffect(() => {
    console.log("Running Use Effect");
    const makeApiCall = async () => {
      let response = await axios(
        `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${myKey}`
      );
      console.log(response);
      setCoinData(response.data);
      // display some of this data in JSX return statement below.
      // set the useState
    };
    if (isFirstRender.current) {
      console.log("making API call");
      // API CALL HERE
      makeApiCall();
      isFirstRender.current = false;
    }
  }, []);

  return (
    <div className="page-container">
      <h1>Coin Page</h1>
      <div>{symbol}</div>
      {coinData === null ? (
        <div>loading...</div>
      ) : (
        <div>USD: {coinData.rate}</div>
      )}
    </div>
  );
};

export default Coin;
