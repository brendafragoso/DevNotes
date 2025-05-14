import styled from "styled-components";



export const Container = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
`

export const Side = styled.div`
   background-color: #ffffff;
   height: 100vh;
   width: 262px;
   border-right: 1px solid rgba(220, 220, 220, 1);
`

export const SectionDiv = styled.div`
   background-color: #E9E9E9;
   width: 226px;
   height: 52px;
   border-radius: 6px;
   display: flex;
   justify-content: center;
   text-align: center;
   align-items: center;
`

export const ContainerSide = styled.div`
  height: 100vh;
  background-color:#ffffff;
  padding: 5px;
  align-items: center;
  display: flex;
  flex-direction: column;

  img{
   height: 78px;
   margin-top: 19px;
   margin-left: 5px;
   margin-bottom: 40px;
  }
`
export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: calc(100vw - 262px);
`

export const Header = styled.div`
   height: 101px;
   background-color: #ffffff;
   padding: 10px 30px;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid rgba(220, 220, 220, 1);   
`
export const AdminEditor = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #ffffff;
   

   p{
      color: rgba(32, 32, 32, 1);
      height: 56px;
      font-size: 36px;
      line-height: 46px;
      font-weight: 600;
      margin-left: 66px;
      margin-top: 32px;
   }
`

export const ColumnContainer = styled.div`
   height: 88vh;
   background-color: #ffffff;
   display: flex;
   padding: 30px;
   justify-content: space-evenly;
   padding: 60px;
   `

export const EditColumn = styled.div`
   height: 722px;
   width: 528px;
   background-color: #ffffff;
   border-radius: 25px;
   display: flex;
   flex-direction: column;
   gap:25px;
   margin: 25px;
   border: solid 3px rgba(126, 19, 137, 0.3);
   border-radius: 8px;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);  

`
export const ListColumn = styled.div`
   height: 722px;
   width: 528px;
   background-color: #ffffff;
   border-radius: 25px;
   display: flex;
   flex-direction: column;
   gap:25px;
   margin: 25px;
   border: solid 3px rgba(21, 162, 9, 0.3);
   border-radius: 8px;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

`
export const SearchComponent = styled.input`
   width: 360px; 
   height: 38px;
   margin-top: 21px;
   margin-left: 32px;
   margin-bottom: 20px;
   font-weight: 400;
   font-size: 14px;
   line-height: 21px;
   background-color: #F9F9F9;
   border: none;
   border-radius: 5px;
   padding-left: 5px;
`
export const LoginHeader = styled.p`
   height: 25px;
   color: #ffffff;
   display: flex;
   justify-content: space-between;
   gap: 20px;
`

export const Image = styled.img`
   height: 25px;
`

export const Button = styled.button`
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