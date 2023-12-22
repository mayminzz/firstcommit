import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

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

const Coin = () => {
  const { coinId } = useParams<
    RouteParams | any
  >(); /*문자열이 아닐수도 있어 그니까 아니라면 any로할게 */
  // params는 객체의 형태로 가져온다.
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as LocationState;
  //해당 인터페이스 타입을 정의하겠다. as 타입 단어를 해준다?
  const [info, setInfo] = useState({});
  const [proceInfo, setPriceInfo] = useState({});
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
          <div>
            <div>
              <div>Rank:</div>
              <div></div>
              <div></div>
            </div>
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Coin;
