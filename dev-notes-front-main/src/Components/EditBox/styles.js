import {styled} from 'styled-components'

export const Form = styled.form`
  width: 270px;
  height: 150px;

  div{
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.label`
  width: 240px;
  height: 65px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const Input = styled.input`
  width: 240px;
  height: 40px;
  font-size: 15px;
  display: flex;
  padding: 4px;
  flex-direction: column;
  margin: 5px;
  border: solid 3px rgba(126, 19, 137, 0.3);
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);  
`