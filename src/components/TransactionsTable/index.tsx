import { Container } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>titulo</th>
            <th>valor </th>
            <th>categoria </th>
            <th>data </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
