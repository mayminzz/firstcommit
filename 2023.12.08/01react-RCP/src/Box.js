import React from "react";

const Box = ({ title, item, result }) => {
  console.log(title, item, result);
  if (title === "computer" && result !== "Tie" && result !== "") {
    result = result === "win" ? "lose" : "win";
  } else {
    result = result;
  }
  if (title === "computer") {
    console.log(`computer ${result}`);
  }
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <img
        className="item_img"
        src={item && item.img}
        alt={item && item.name}
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
