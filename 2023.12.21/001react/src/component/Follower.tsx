import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowContext {
  nameOfMyUsers: string;
}

const Follower = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowContext>();
  return <div>Here are {nameOfMyUsers}의 followers</div>;
};

export default Follower;
