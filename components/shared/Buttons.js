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
export const Button = ({background, textColor, children, ...rest}) => {
  return (
    <StyledButton background={background} textColor={textColor} {...rest}>{children}</StyledButton>
  )
};