import styled, { css } from 'styled-components'

const buttonStyles = css`
  color: #ffffff;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 5px auto;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  //margin: 5px;
  width: ${props=> props.width};
`

export const Button = styled.button`
  ${buttonStyles}

  background: ${props=> props.color};
  border: ${props=> props.color} 3px solid;
  //border: 4px solid transparent;

  &:hover{
    opacity: 0.9;
  }

  &:active{
    opacity: 0.7;
  }
`