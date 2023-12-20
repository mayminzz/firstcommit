import React from "react";
import styled from "styled-components";

interface props {
  label: string;
  onClick?: () => void;
  //리턴문을 사용하지 않을 때 void
  color?: string;
}

const Container = styled.button`
  cursor: pointer;
  color: #fff;
  background: ${(props) => props.color};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
  &:avtive {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Button = ({ label, onClick, color = "#ff5722" }: props) => {
  return (
    <Container onClick={onClick} color={color}>
      {label}
    </Container>
  );
};

export default Button;
