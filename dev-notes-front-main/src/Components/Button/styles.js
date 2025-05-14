import styled from 'styled-components'

export const ContainerButton = styled.button`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    background-color: #89131D;
    color: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    cursor: pointer;
    opacity: 1;
    border: none;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`