import React from "react";
import { useAuth } from "../../contexts/AuthenticationContext";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 2em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 0.5em;
  }
`;

const StyledTools = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
`;

const AddInvoiceButton = styled.button`
  padding: 0.8em;
  border: none;
  border-radius: 30px;
  background-color: #5833f1;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  :hover {
    background-color: #7c5dff;
  }

  .plusIcon {
    background-color: #fff;
    padding: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  p {
    margin: 0;
  }
  @media screen and (max-width: 550px) {
    span {
      display: none;
    }
  }
`;

const Toolbar = ({
  invoices,
  setFormIsOpen,
  setLoginIsOpen,
  filter,
  setFilter,
}) => {
  const { currentUser } = useAuth();

  const detectUserPermission = () => {
    if (currentUser) {
      setFormIsOpen(true);
    } else {
      setLoginIsOpen(true);
    }
  };

  return (
    <Wrapper>
      <div className="invoiceData">
        <h1>Invoices</h1>
        <p>
          {invoices.length > 0
            ? `There are ${filter.length} total invoices`
            : "No Invoices"}
        </p>
      </div>
      <StyledTools>
        <Dropdown setFilter={setFilter} />
        <AddInvoiceButton onClick={detectUserPermission}>
          <div className="plusIcon">
            <img src="/icon-plus.svg" alt="plus-icon" />
          </div>
          <p>
            New <span>Invoice</span>
          </p>
        </AddInvoiceButton>
      </StyledTools>
    </Wrapper>
  );
};

export default Toolbar;
