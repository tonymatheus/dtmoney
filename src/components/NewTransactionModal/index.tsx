import React from "react";
import { Container, TransactionTypeContainer } from "./styles";
import CloseImg from "../../assets/close.svg";
import IncomeImage from "../../assets/Entrada.svg";
import OutComeImage from "../../assets/Saida.svg";
import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTRansactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close "
      >
        <img src={CloseImg} alt="close" />
      </button>

      <Container>
        <h2>Cadastro</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={IncomeImage} alt="income" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={OutComeImage} alt="outcome" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
