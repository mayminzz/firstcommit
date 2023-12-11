import "./App.css";
import { useState } from "react";
import Box from "./Box";

const choice = {
  scissors: {
    name: "scissors",
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
  const [result, setResult] = useState("");

  const randomchoice = () => {
    let itemArray = Object.keys(choice);
    console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    console.log(final);
    return choice[final];
  };

  // user == computer tie(동률)
  // user == rock, computer == sissors => user Win
  // user == scissors, computer == peper => user Win
  // user == paper, computer == rock => user win
  // user == rock, computer == paper => user lose
  // user == scissors, computer == rock => user lose
  // user == paper, computer == sissor => user lose
  const judgement = (user, computer) => {
    console.log(user, computer);
    // 동률
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomchoice();
    setcomputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <div className="App">
      <div className="main">
        {/* 내가 선택할 박스 */}
        <Box title="You" item={userSelect} result={result} />
        {/* 컴퓨터가 선택할 박스 */}
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
