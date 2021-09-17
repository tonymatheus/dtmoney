import React, { useState } from "react";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
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
  const [type, setType] = useState("deposit");

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
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            className={type === "deposit" ? "active" : ""}
          >
            <img src={IncomeImage} alt="income" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdrow")}
            isActive={type === "withdrow"}
          >
            <img src={OutComeImage} alt="outcome" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
