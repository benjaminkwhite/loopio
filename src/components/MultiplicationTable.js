import React, { useState, useRef, useEffect } from "react";

import "./MultiplicationTable.scss";

export default function MultiplicationTable(props) {
  const { xAxis, yAxis } = props;
  const range = (start, stop) =>
    Array.from(new Array(parseInt(stop)), (x, i) => i + parseInt(start));

  const mtLoop = (start, end) => {
    const row1 = range(start, end).map((i) => {
      return (
        <div className="cell" key={`c${i}`}>{i}</div>
      );
    });

    const rowN = range(start, end).map((i) => {
      const col1 = (
        <div className="cell" key={`cell-${i}`}>{i}</div>
      );
      const colN = range(start, end).map((j) => {
        const total = i * j;
        return (
          <div className="cell" key={`cell-${i}-${total}`}>{total}</div>
        );
      });

      return (
        <div className="row" key={`r${i}`} data-key={`r${i}`}>
          {col1}
          {colN}
        </div>
      );
    });

    return (
      <>
        <div className="row">
          <div className="cell">X</div>
          {row1}
        </div>
        {rowN}
      </>
    );
  };

  return <>{mtLoop(xAxis, yAxis)}</>;
}
