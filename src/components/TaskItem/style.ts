import styled, { css } from "styled-components";

interface ItemProps {
    done?: boolean;
}

export const Item = styled.li<ItemProps>`
    .done {
        opacity: 0.5;
        text-decoration: line-through;
    }

    ${(props) =>
        props.done ? css`
            opacity: 0.5;
            text-decoration: line-through;
        ` : ''}

`;