import { useState } from "react";
import logo from "../../assets/Logo.svg";
import Modal from "react-modal";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTRansactionModal: () => void;
}

export const Header = ({ onOpenNewTRansactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt-money" />
        <button onClick={() => onOpenNewTRansactionModal()}>
          nova transação
        </button>
      </Content>
    </Container>
  );
};
