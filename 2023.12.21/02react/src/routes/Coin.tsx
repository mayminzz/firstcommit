import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<RouteParams | any>();/*문자열이 아닐수도 있어 그니까 아니라면 any로할게 */ 
  // params는 객체의 형태로 가져온다.

  return <div>Coin: {coinId}</div>;
};

export default Coin;
