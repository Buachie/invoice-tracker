import { markAsPaid } from "../Utilities/Invoice";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  gap: 1em;
  background-color: #fff;
  width: 100vw;
  padding: 1em;
  @media (max-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyledButton = styled.div`
  border-radius: 24px;
  border: none;
  padding: 1em;
  font-weight: bold;
  &.edit {
    background-color: #f9fafe;
    color: #7e88c3;
  }
  &.delete {
    background-color: #ec5757;
    color: #fff;
  }

  &.markPaid {
    background-color: #7c5dfa;
    color: #fff;
  }
`;
const InvoiceFooter = ({
  status,
  id,
  currentUser,
  setPopupIsOpen,
  setFormIsOpen,
}) => {
  return (
    <Wrapper>
      <StyledButton className="edit" onClick={() => setFormIsOpen(true)}>
        Edit
      </StyledButton>
      <StyledButton className="delete" onClick={() => setPopupIsOpen(true)}>
        Delete
      </StyledButton>
      {status != "Paid" ? (
        <StyledButton
          className="markPaid"
          onClick={() => markAsPaid(id, currentUser)}
        >
          Mark as Paid
        </StyledButton>
      ) : null}
    </Wrapper>
  );
};

export default InvoiceFooter;
