import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthenticationContext";

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
  const { currentUser } = useAuth();

  return (
    <Wrapper>
      <img src="/illustration-empty.svg" alt="empty illustration" />
      <h1>There is nothing here</h1>
      {currentUser ? (
        <>
          <h2>Welcome {currentUser.email}</h2>
          <p>
            Create an invoice by clicking the <br />
            <span className="bold">New Invoice</span> button and get started
          </p>
        </>
      ) : (
        <p>
          Create an invoice by clicking the <br />
          <span className="bold">New Invoice</span> button and get started
        </p>
      )}
    </Wrapper>
  );
};

export default NoInvoices;
