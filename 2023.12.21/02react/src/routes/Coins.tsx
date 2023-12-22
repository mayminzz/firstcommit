import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
  margin-bottom: 20px;
`;
const CoinList = styled.div``;
const Coin = styled.li`
  list-style: none;
  background: #f5f6fa;
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 25px;
  a {
    padding: 20px;
    transition: 0.2s ease-in;
    display: flex;
    align-items: center;
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
  const [coins, setCoins] = useState<coinInter[]>([]);
  //데이터를 가지고왔는지 가지고오고 있는지 상태변수를 알고 싶다
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/Divjason/coinlist/coins"
      );
      const json = await response.json();
      setCoins(json.slice(0, 100));
      console.log(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Virtual Money / Coin List</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              {" "}
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                />
                Coin Ranking {coin.rank}. {coin.name} &rarr;['Click'] detail
                Coin info(" ")
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
