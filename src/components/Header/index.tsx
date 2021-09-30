import { useState } from "react";
import logo from "../../assets/Logo.svg";
import Modal from "react-modal";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt-money" />
        <button onClick={() => onOpenNewTransactionModal()}>
          nova transação
        </button>
      </Content>
    </Container>
  );
};
