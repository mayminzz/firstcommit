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
import { useQuery } from "react-query";
import { fetchCoinInfo } from "../api";
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

const Loader = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  color: ${(props) => props.theme.accentColor};
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
    color: ${(props) => props.theme.bgColor};
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

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin: 10px 0;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: Uppercase;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  background: ${(props) => props.theme.textColor};
  padding: 15px 40px;
  border-radius: 10px;
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

interface ICoinProps {
  isDark: boolean;
}

const Coin = () => {
  const { coinId } = useParams<
    RouteParams | any
  >(); /*문자열이 아닐수도 있어 그니까 아니라면 any로할게 */
  // params는 객체의 형태로 가져온다.
  // const [loading, setLoading] = useState(true);
  const { state } = useLocation() as LocationState;
  //해당 인터페이스 타입을 정의하겠다. as 타입 단어를 해준다?
  const [info, setInfo] = useState<infoData>();
  const [priceInfo, setPriceInfo] = useState<priceData>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<infoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<priceData>(
    ["tickers", coinId],
    () => fetchCoinInfo(coinId)
  );

  const loading = infoLoading || tickersLoading;
  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     console.log(infoData);
  //     console.log(priceData);
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, []);
  return (
    <Container>
      <Helmet>
        <Title>{state ? state : loading ? "Loading..." : infoData?.name}</Title>
      </Helmet>
      <Header>
        <Title>
          Coin Name : {state ? state : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Type</span>
              <span>{infoData?.type}</span>
            </OverviewItem>
          </Overview>
          <Description>{tickersData?.id}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              {/* 특정 페이지 이동이 아닌 한 ㅎ화면에서 보고싶어 */}
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Routes>
            <Route path="chart" element={<Chart coinId={coinId}/>}></Route>
            <Route path="price" element={<Price />}></Route>
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;
