import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
`
export const LateralMenu = styled.div`
  height: 100vh;
  width: 262px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-right: #DCDCDC 1px;

  img{
      height: 78px;
      width: 82px;
      margin-top: 19px;
      margin-left: 75px;             
   }
`


export const RoutineBox = styled.div`
   width: 226px;
   height: 52px;
   border-radius: 5px;
   margin-top: 40px;
   margin-left: 14px;
   display: flex;
   justify-content: center;
   border-radius: 5px;
   background: #E9E9E9;
   align-items: center;

`
export const GreetingText = styled.p`
   font-weight: 600;
   font-size: 36px;
   line-height: 46px;
   margin-left: 43px;
   margin-top: 27px;
`

export const Image = styled.img`
   height: 25px;
`

export const Aplication = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;   
`

export const HeaderPage = styled.div`
   height: 170px;
   width: calc(100vw - 262px);
   border-bottom: 1px solid #dcdcdc;
   display: flex;
   justify-content: space-between;
`

export const SearchDiv = styled.input`
   height: 25px;
   width: 240px;
   margin-left: 66px;
   margin-top: 21px;
   background: #f9f9f9;
   font-size: 14px;
   padding-left: 15px;
   border: none;
   border-radius: 5px;
`

export const SearchButton = styled.div`
   //width:
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   gap:15px;
`

export const SearchIcon = styled.img`
   position: relative;
   left: 10px;
   transform: translateX(-20px);
   width: 15px;
   height: 15px;
   margin-top:25px;
   cursor: pointer;
`

export const UserIcons = styled.div`
   margin-top: 21px;
   display: flex;
   width: 200px;
   display: flex;
   justify-content: space-between;
`

export const TaskSection = styled.div`
   width: calc(100vw - 262px);
   height: 300px;
   display: flex;
   flex-direction: column;
`
export const SubSection = styled.div`
      width: calc(100vw - 262px);
      display: flex;
      justify-content: space-between;
      height: 96px;   
`

export const NewTask = styled.button`
   width: 154px;
   height: 48px;
   border-radius: 5px;
   background-color: #7E1389;
   margin-top: 50px;
   border: none;
   color: #FFFFFF;
   font-size: 14px;
   cursor: pointer;
`

export const YourRoutine = styled.div`
   width: 160px;
   height: 64px;
   font-weight: 700px;
   line-height: 64px;
   margin-left: 43px;
   margin-top: 27px;
   padding: 0;

   p{
      
   font-size: 24px;
   
   line-height: 64px;
   }
`

export const Pomodoro = styled.div`
   width: 186px;
   height: 72px;
   padding: 10px 20px 10px 20px;
   display: flex;
   justify-content: space-between;
   background-color: #15A209;
   border-radius: 8px;
   border: none;
`

export const Command = styled.p`
   font-weight: 700;
   font-size: 12px;
   width: 31px;
   height: 18px;
`

export const TimeCounter = styled.p`
   color: #f8f8f8;
   font-weight: 700;
   font-size: 36px;
   line-height: 54px;

`

export const MinorSection = styled.div`
   margin-left: 53px;
   height: 38px;
   padding: 0;
   display: flex;
   justify-content: space-between;
`

export const MonthTitle = styled.p`
   Font-size: 32px;
   font-weight: 700;
   margin: 10px auto;
   color: ${props=> (props.show<1 || props.show>5) ? '#000000' : 'transparent'}
`

export const LastModification = styled.p`
   font-weight: 400;
   width: 203px;
   height: 23px;
   font-weight: 400;
   font-size: 10px;
   align-items: right;
`

export const TaskGrid = styled.div`
   margin-top: 10px;
   width: 1000px;
   height: 750px;
   display: flex;
`

export const Column = styled.div`
   display: flex;
   width: 145px;
   flex-direction: column;
`

export const ArrowButton = styled.button`
   padding: 0;
   margin-top: 32px;
   width: 45px;
   height: 45px;
   background-color: #ffffff;
   border: none;
   cursor: pointer;

   img{
      height: 45px;
      width: 45px;
      cursor: pointer;
   }
`

export const DayDiv = styled.div`
   display: flex;
   flex-direction: column;
   width: 144px;
`

export const LogoDay = styled.img`
   height: 40px;
   width: 72px;
   text-align: center;
   margin: 0 auto;
`

export const DayNumber = styled.p`
   font-weight: 700;
   font-size: 35px;
   text-align: center;
   margin: 5px;
   color: ${(props => props.keyColor%2==0 ? '#15A209': '#7E1389')};
`

export const DayColumn = styled.div`
   height: 42px;
`
export const Tasks = styled.div`
   width: 138px;
   height: 65px;
   margin: 5px 3px;
   border: 3px #F8F8F8 solid;
   border: 2px solid ${(props)=>props.colorBox};
   color: ${(props)=>props.colorFont};
   border-radius: 5px;
   cursor: pointer;

   &:hover{
      opacity: 0.85;
   }
   &:active{
      opacity: 0.75;
   }
`
export const Descritpion = styled.div`
   padding: 2px;
   display: flex;
   flex-direction: column;
   text-align: center;
`

export const TitleTask = styled.p`
   font-size: 15px;
   font-weight: 500;
   text-align: center;
   margin: 4px 0;
`

export const TimeTask = styled.p`
   font-size: 10px;
   font-weight: 400;
   text-align: center;
   margin: 2px 0;
`

export const RemindersDiv = styled.div`
   width: 1000px;
   height: 60px;
`
export const RemindersTitle = styled.h2`
   width: 64px;
   height: 10px;
   font-size: 10px;
   color: #7E1389;
`

export const Reminder = styled.p`
   font-weight: 400;
   font-size: 14px;
`