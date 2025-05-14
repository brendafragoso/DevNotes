import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 85%;
  width: 35%;
`

export const ContainerItens = styled.div`
  height: 70%;
  width: 35%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ;

  h1 {
    width: 277px;
    height: 60px;
    gap: 28px;
    display: block;
    font-size: 36px;
    line-height: 36px;
    color: #0C1421;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  h2{
    height: 100px;
    width: 340px;
    gap: 28px;
    display: block;
    font-size: 20px;
    line-height: 32px;
    color: #313957;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-top: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`

    position: relative;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 388px;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin-top: ${props => (props.error ? '12px' : '28px')};
    margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.5px;
  height: 38px;
  background: #F7FBFF;
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #000000;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;

  color: #cc1717;
`

export const LastDiv = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-evenly;

    img{
        height: 75px;
        width: 75px;
    }
`