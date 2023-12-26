import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

const Container = styled.div`
  max-width: 880px;
  padding: 20px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 40px;
  margin-bottom: 20px;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 25px;
  a {
    padding: 15px;
    transition: 0.2s color ease-in;
    display: flex;
    align-items: center;
    color: #fff;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 18px;
`;

interface coinInter {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  //useQuery는 2개의 인자값을 받는데 앞으로 취급할 데이터에 대한 키 값, 이 데이터가 오는 곳은 fetchCoins)만약에 정상적으로 들어왔지 정상적을 판단하기 위해서 isloading? 그리고 그 값은 data에 저장할거야
  const { isLoading, data } = useQuery<coinInter[] | undefined>(
    "allCoins",
    fetchCoins
  );

  // const [coins, setCoins] = useState<coinInter[]>([]);
  // //데이터를 가지고왔는지 가지고오고 있는지 상태변수를 알고 싶다
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     console.log(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);
  console.log(isLoading, data);
  return (
    <Container>
      <Helmet>
        <Title>Coin List</Title>
      </Helmet>
      <Header>
        <Title>Virtual Money / Coin List</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              {" "}
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                />
                Coin Ranking {coin.rank}. {coin.name} &rarr;['Click'] detail
                Coin info
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
