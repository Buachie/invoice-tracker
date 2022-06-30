import styled from "styled-components";

const Wrapper = styled.div`
  font-weight: bold;
  padding: 1em;
  border-radius: 6px;
  width: fit-content;
  background-color: ${(props) => {
    if (props.status === "Paid") return "#bbffe8";
    if (props.status === "Pending") return "#ffd8a6";
  }};
  color: ${(props) => {
    if (props.status === "Paid") return "#33D69F";
    if (props.status === "Pending") return "#FF8F00";
  }};
  @media (max-width: 768px) {
    grid-column: 2/2;
    grid-row: 2/4;
    margin-left: auto;
  }
`;

const InvoiceStatus = ({ status }) => {
  return (
    <Wrapper status={status}>
      <span className="indicator">&#9679;</span>
      {status}
    </Wrapper>
  );
};

export default InvoiceStatus;
