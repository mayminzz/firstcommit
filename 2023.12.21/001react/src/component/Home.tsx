import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  const [readSerachParams, setSerachParams] = useSearchParams();
  // has 있냐 없냐를 찾아오는 것 있으면 true, 없으면 false
  console.log(readSerachParams.has("geo"));
  //get 값을 찾아오는 것 없으면 null
  console.log(readSerachParams.get("geo"));
  setTimeout(() => {
    setSerachParams({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);
  return (
    <div>
      <ul>
        <li>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/User/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Home;
