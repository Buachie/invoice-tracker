import styled from "styled-components";
import { addCommas } from "../Utilities/Invoice";

const Wrapper = styled.div`
  background-color: #f9fafe;
  grid-column: 1/4;
  border-radius: 15px;
`;

const StyledTable = styled.table`
  padding: 1em;
  width: 100%;

  th {
    color: #7e88c3;
    font-size: 0.8em;
    text-align: right;
    &:first-child {
      text-align: left;
    }
  }

  td {
    text-align: right;
    font-weight: bold;
    &:first-child {
      text-align: left;
    }
    &:nth-child(2) {
      color: #7e88c3;
    }
    &:nth-child(3) {
      color: #7e88c3;
    }
  }
`;

const Total = styled.div`
  background-color: #373b53;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-radius: 0 0 15px 15px;
  p {
    font-weight: bold;
    font-size: 1em;
  }
`;

const InvoiceItems = ({ items, total }) => {
  return (
    <Wrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>${addCommas(item.price)}</td>
                <td>${addCommas(item.total)}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
      <Total>
        <p>Amount Due</p>
        <h2>${addCommas(total)}</h2>
      </Total>
    </Wrapper>
  );
};

export default InvoiceItems;
