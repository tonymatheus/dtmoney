import React from "react";
import { Container } from "./styles";
import entradas from "../../assets/Entrada.svg";
import saidas from "../../assets/Saida.svg";
import total from "../../assets/Total.svg";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradas} alt="Entradas" />
        </header>
        <strong>R$ 1200</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidas} alt="Saídas" />
        </header>
        <strong>R$ 1200</strong>
      </div>
      <div className="highLight-color">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$ 1200</strong>
      </div>
    </Container>
  );
};
