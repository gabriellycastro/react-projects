import styled from 'styled-components';

interface ButtonColors {
    [key: string]: string;
}

const buttonColors: ButtonColors = {
    pink: "#E26177",
    blue: "#2A95FF",
    yellow: "#F1BD5A",
    green: "#27D178"
}

interface ButtonDefaultProps {
    color: string;
}

export const ButtonDefault = styled.button<ButtonDefaultProps>`
    border: none;
    background-color: ${(props) => buttonColors[props.color]};
    color: #F6F6F6;
    font-weight: 700;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`;