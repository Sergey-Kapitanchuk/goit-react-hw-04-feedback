import React from "react";
import App from "../App"

const Statistic = ({good, neutral, bad, total, positivePercentage}) => { 
    return <>
      {total ? (
        <ul>
          <li>
            <p>Good:{ good }</p>
          </li>
          <li>
            <p>Neutral:{ neutral }</p>
          </li>
          <li>
            <p>Bad:{ bad }</p>
          </li>
          <li>
            <p>Total:{ total }</p>
          </li>
          <li>
            <p>Positive feedback:{ positivePercentage}</p>
          </li>
        </ul>
      ) : (
          <p>There is no feedback</p>
        )}
    </>
};

export default Statistic;