import "./App.css";
import { useState } from "react";
import Box from "./Box";

const choice = {
  sissors: {
    name: "sissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  rock: {
    name: "rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  paper: {
    name: "paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};
console.log(choice);

function App() {
  const [userSelect, setUserSelect] = useState();
  const [computerSelect, setcomputerSelect] = useState({});

  const randomchoice = () => {
    let itemArray = Object.keys(choice);
    console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    console.log(final);
    return choice[final];
  };
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomchoice();
    setcomputerSelect(computerChoice);
  };

  return (
    <div className="App">
      <div className="main">
        {/* 내가 선택할 박스 */}
        <Box title="You" item={userSelect} />
        {/* 컴퓨터가 선택할 박스 */}
        <Box title="computer" />
      </div>
      <div className="main">
        <button onClick={() => play("sissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
