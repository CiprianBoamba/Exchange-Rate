import React from "react";
import classes from "./Convertor.module.css";

function Convertor() {
  return (
    <div>
      <h1>ha</h1>
      {/* classes[("currency-flag", "currency-flag-lg ", "currency-flag-aed")] */}
      {/* <div className={"currency-flag currency-flag-lg currency-flag-usd"}></div> */}
      <div
        className={`${classes["currency-flag"]} ${classes["currency-flag-lg"]} ${classes["currency-flag-ron"]}`}
      ></div>
    </div>
  );
}

export default Convertor;
