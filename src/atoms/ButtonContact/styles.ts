import styled from "styled-components";

export const Container = styled.button`
    background-color: rgb(23, 164, 208);
    border: 1px solid rgb(23, 164, 208);
    color: white;
    font-size: 14px;
    font-weight: 400;
    width: 200px;
    height: 60px;
    border-radius: 100px;
    margin-top: 50px;
    transition: all 0.25ms ease-out;

    &:hover {
        background-color: #F8FDFF;
        color: rgb(23, 164, 208);
    }
`;