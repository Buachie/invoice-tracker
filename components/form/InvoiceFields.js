import Input from "./Input";
import DateSelect from "./DateSelect";
import Items from "./Items";
import Select from "./Select";
import styled from "styled-components";
import { useFormikContext } from "formik";
import { displayErrors } from "../Utilities/Invoice";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionTitle = styled.h4`
  color: #7c5dfa;
`;
const Errors = styled.div`
  margin-top: -1em;
`;

const Error = styled.div`
  color: red;
  font-weight: bold;
`;
const dropdownOptions = [
  { name: "Net 1 Day", value: 1 },
  { name: "Net 7 Days", value: 7 },
  { name: "Net 14 Days", value: 14 },
  { name: "Net 30 Days", value: 30 },
];

const InvoiceFields = ({ title }) => {
  const formik = useFormikContext();

  return (
    <>
      <h2>{title}</h2>
      <SectionTitle>Bill From</SectionTitle>
      <Input label="Street Address" name="senderAddress.street" />
      <InputWrapper>
        <Input label="City" name="senderAddress.city" />
        <Input label="Post Code" name="senderAddress.postCode" />
        <Input label="Country" name="senderAddress.country" />
      </InputWrapper>
      <SectionTitle>Bill To</SectionTitle>
      <Input label="Client Name" name="clientName" />
      <Input label="Client Email" name="clientEmail" />
      <Input label="Street Address" name="clientAddress.street" />
      <InputWrapper>
        <Input label="City" name="clientAddress.city" />
        <Input label="Post Code" name="clientAddress.postCode" />
        <Input label="Country" name="clientAddress.country" />
      </InputWrapper>
      <InputWrapper>
        <DateSelect label="Invoice Date" name="createdAt" />
        <Select
          label="Payment Terms"
          name="paymentTerms"
          options={dropdownOptions}
        />
      </InputWrapper>
      <Input label="Project Description" name="description" />
      <SectionTitle>Item List</SectionTitle>
      <Items name="items" />
      {formik.submitCount > 0 && formik.errors && (
        <Errors>
          {displayErrors(formik.errors).map((error, index) => {
            return <Error key={index}>{error}</Error>;
          })}
        </Errors>
      )}
    </>
  );
};

InvoiceFields.defaultProps = {
  title: "New Invoice",
};

export default InvoiceFields;
