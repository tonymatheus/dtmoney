import react from "react";
import logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <div>
      <Container>
        <Content>
          <img src={logo} alt="dt-money" />
          <button>nova transação</button>
        </Content>
      </Container>
    </div>
  );
};
