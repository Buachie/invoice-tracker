import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  border-radius: 6px;
  width: 100px;
  text-align: center;
  font-weight: bold;
  background-color: ${(props) => {
    if (props.status === "Paid") return "#BBFFE8";
    if (props.status === "Pending") return "#FFD8A6";
    if (props.status === "Draft") return "#D7D7D7";
  }};
  color: ${(props) => {
    if (props.status === "Paid") return "#33D69F";
    if (props.status === "Pending") return "#FF8F00";
    if (props.status === "Draft") return "#000";
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
