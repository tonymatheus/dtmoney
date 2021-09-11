
import logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export const Header = () => {
  return (
   
      <Container>
        <Content>
          <img src={logo} alt="dt-money" />
          <button>nova transação</button>
        </Content>
      </Container>
   
  );
};
