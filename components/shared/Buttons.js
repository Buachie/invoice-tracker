import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    border-radius: 24px;
    padding: 1em;
    background-color: ${props => props.background};
    color: ${props => props.textColor};
    cursor: pointer;
    font-weight: bold;
`
const DeleteItem = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
`

const AddItem = styled.button`
    width: 100%;
    border: none;
    border-radius: 24px;
    color: #7e88c3;
    font-weight: bolder;
    padding: 1em;
    background-color: #F9FAFE;
    &:hover{
        background-color: #DFE3FA;
    }
`
export const Button = ({background, textColor, children, ...rest}) => {
  return (
    <StyledButton background={background} textColor={textColor} {...rest}>{children}</StyledButton>
  )
};

export const DeleteButton =({...rest}) => {
    return(
        <DeleteItem {...rest}>
            <img src="/icon-delete.svg" />
        </DeleteItem>
    )
}

export const AddItemButton =({...rest})=> {
    return(
        <AddItem>+ Add New Item</AddItem>
    )
}