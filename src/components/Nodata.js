import React from "react";
import "../css/NoData.css";

function Nodata({ noData }) {
  return (
    <div className="nodata">
      <h1>{noData}</h1>
    </div>
  );
}

export default Nodata;
