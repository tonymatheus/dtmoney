import React, { FormEvent, useState } from "react";
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
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    console.log({
      category,
      title,
      value,
      type,
    });
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastro</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            activeColor={"green"}
            type="button"
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            className={type === "deposit" ? "active" : ""}
          >
            <img src={IncomeImage} alt="income" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            activeColor={"red"}
            type="button"
            onClick={() => setType("withdrow")}
            isActive={type === "withdrow"}
          >
            <img src={OutComeImage} alt="outcome" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
