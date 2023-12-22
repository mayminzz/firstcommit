import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

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

const Loader = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.accentColor};
  background: ${(props) => props.theme.textColor};
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  span:first-child {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
  }
  span:last-child {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
const Description = styled.p`
  margin: 20px 0;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
  background: ${(props) => props.theme.textColor};
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
`;

interface RouteParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

interface infoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// shift+ alt + i
//commans d

interface priceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: number;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const { coinId } = useParams<
    RouteParams | any
  >(); /*문자열이 아닐수도 있어 그니까 아니라면 any로할게 */
  // params는 객체의 형태로 가져온다.
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as LocationState;
  //해당 인터페이스 타입을 정의하겠다. as 타입 단어를 해준다?
  const [info, setInfo] = useState<infoData>();
  const [priceInfo, setPriceInfo] = useState<priceData>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  console.log(priceMatch)
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      console.log(infoData);
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coin Name : {state || "Loading..."}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank </span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol </span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Type</span>
              <span>{info?.type}</span>
            </OverviewItem>
          </Overview>
          <Description>{priceInfo?.id}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Link to={`/${coinId}/chart`}>Chart</Link>
          <Link to={`/${coinId}/price`}>Price</Link>
          <Routes>
            <Route path="chart" element={<Chart />}></Route>
            <Route path="price" element={<Price />}></Route>
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;
