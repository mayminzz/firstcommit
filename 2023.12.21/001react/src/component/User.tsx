import React from "react";
import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
import { users } from "../db";

const User = () => {
  console.log(useOutletContext());
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      {/* /followers 는 절대경로 우리는 user안에 있는 follower를 가기를 원하는 것이기 때문에 /를 뺴주어야 한다 */}
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
          // 인덱스 값은 해당 아이디보다 1작으니까 -1
        }}
      />
    </div>
  );
};

export default User;
