import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .bold {
    font-weight: bold;
  }
`;
const NoInvoices = () => {
  return (
    <Wrapper>
      <img src="/illustration-empty.svg" />
      <h1>There is nothing here</h1>
      <p>
        Create an invoice by clicking the <br />
        <span className="bold">New Invoice</span> button and get started
      </p>
    </Wrapper>
  );
};

export default NoInvoices;
