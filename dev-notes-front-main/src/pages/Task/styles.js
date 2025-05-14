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
   margin: 5px 0;
   font-size: 18px;
   font-weight: 600;

   cursor: ${(props) => (props.isButtonActive ? 'pointer' : 'default')}
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
   justify-content: right;
   border-bottom: 1px solid rgba(220, 220, 220, 1);   
`
export const AdminEditor = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #ffffff;
   

   h2{
      color: rgba(32, 32, 32, 1);
      height: 56px;
      font-size: 36px;
      line-height: 46px;
      font-weight: 600;
      margin-left: 66px;
      margin-top: 32px;
   }
`

export const ResumeColumn = styled.div`
   height: 250px;
   width: 50vw;
   padding: 10px;
   margin: 10px 25px;
   border: solid 3px rgba(126, 19, 137, 0.3); 
   border-radius: 8px;
   box-shadow: 0px 4px 4px 0px rgba(126, 19, 137, 0.3); 
   display: flex;
   flex-direction: column;

`

export const TextDiv = styled.div`
   display: flex;
   flex-direction: column;
`

export const TitleTask = styled.p`
   font-size: 20px;
   font-weight: 600;
   margin-bottom: 10px;
   
`

export const DescriptionTask = styled.p`
   font-size: 15px;
   margin-left: 10px;
   margin: 8px 0;
`

export const ColumnContainer = styled.div`
   height: 88vh;
   background-color: #ffffff;
   display: flex;
   flex-direction: column;
   padding: 30px;
   justify-content: space-evenly;
   padding: 60px;
`

export const EditColumn = styled.div`
   height: 520px;
   width: 50vw;
   background-color: #ffffff;
   border-radius: 25px;
   display: flex;
   flex-direction: column;
   gap:25px;
   margin: 10px 25px;
   border: solid 3px rgba(21, 162, 9, 0.3);
   border-radius: 8px;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15); 
`

export const EditSection = styled.div`
   display: flex;
   flex-direction: column;
   height: 850px;
`
export const Form = styled.form`
  width: 425px;
  height: 150px;

  div{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const Label = styled.label`
  width: 240px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const Input = styled.input`
  width: 18vw;
  height: 40px;
  font-size: 15px;
  display: flex;
  padding: 4px;
  flex-direction: column;
  margin: 5px;
  border: solid 3px rgba(21, 162, 9, 0.3);
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);  
`
export const InputDescription = styled.textarea`
  width: 28vw;
  height: 120px;
  resize: vertical;
  font-size: 15px;
  display: flex;
  padding: 4px;
  flex-direction: column;
  margin: 5px;
  border: solid 3px rgba(21, 162, 9, 0.3);
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);  
`

export const TimeDiv = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`

export const TimeBegin = styled.div`
   font-size: 15px;
   
`

export const TimeFinish = styled.div`
   font-size: 15px;
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
  font-weight: 700;

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

export const Box = styled.div`
   margin-top: 20px;
   width: 100px;
   height: 50px;
`
