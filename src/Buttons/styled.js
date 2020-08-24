import styled, { css } from "styled-components";

export const ToggleButtons = styled.section `
    background-color: hsl(34, 41%, 68%);
    border-radius: 7px;
    border: 3px solid black;
    box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, .4);
    text-shadow: 1px 1px 2px #222;
    display: flex;
    justify-content: flex-end;
    margin: 0 50px;
    padding: 5px;

    ${({hidden}) => hidden && css `
    display: none;
    `
 };
`;

export const Button = styled.button `
    border: 1px solid black;
    border-radius: 7px;
    background-color: hsl(34, 41%, 60%);
    text-shadow: 2px 2px 2px #eee;
    text-transform: uppercase;
    padding: 5px;
    margin-right: 5px;

    &:hover{
        cursor: pointer;
        color: #333;
        background-color: hsl(34, 41%, 63%);
    };
    @media(max-width:414) and (orientation:portrait){
        margin: 10px;
        flex-direction: column;
    };
`;