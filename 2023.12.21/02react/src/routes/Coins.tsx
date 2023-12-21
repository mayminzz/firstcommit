import React from "react";
import styled from "styled-components";

const Coins = () => {
  const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
  `;
  const Container = styled.div``;
  const Header = styled.div``;
  const CoinList = styled.div``;
  const Coin = styled.div``;
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        <Coin></Coin>
      </CoinList>
    </Container>
  );
};

export default Coins;
