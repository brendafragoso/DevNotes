import { useEffect, useState } from 'react'
import { 
  Container,
  Timer,
  ControlBox,
  ButtonStart,
  ButtonDiv,
  ButtonTimer
  } from './styles'

export function Pomodoro() {

  const [isStarted, setIsStarted] = useState(false)
  const [isStopped, setIsStopped] = useState(false)
  const [initialTime, setInitialTime] = useState(1500)

  function counter(){
    
    console.log(initialTime)
    /*let time = initialTime
    setInterval(()=>{
      setInitialTime(prevTime => prevTime)
      console.log(initialTime)
    }, 1000)
    console.log(time)*/
  }

  useEffect(() => {
    let interval = null;

    if (isStarted) {

      interval = setInterval(() => {
        setInitialTime(prevTime => prevTime - 1);
      }, 10);
      console.log(initialTime)
      if(initialTime>-1 && initialTime<1){
        setInitialTime(1500)
      }
    } else if (!isStarted && initialTime !== 0) {
      clearInterval(interval);
    }
    

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado ou quando `isStarted` muda.
  }, [isStarted, initialTime]);

  useEffect(() => {
    if(initialTime===0){
      alert('Pomodoro concluído! Vá descansar um pouco!');
    }
  })

  function setStatesCounter(){
    setIsStopped(false)
    setIsStarted(false)
  }

  function setStatesStarter(){
    setIsStarted(true)
    counter(initialTime)
    setInitialTime(1500)
  }

  function formatarData(data) {
   
    const minutos = String(Math.floor(data/60)).padStart(2, '0');
    const segundos = String(Math.floor(data%60)).padStart(2, '0');

    const time = minutos + ':' + segundos

    return time;
}


  return (

    <Container>
    <Timer>
      {formatarData(initialTime)}
    </Timer>
    <ControlBox>
      {
        !isStopped && !isStarted &&
        <ButtonStart onClick={()=>setStatesStarter()}>Start</ButtonStart>
      }
      <ButtonDiv>
        {isStarted &&
        <>
          <ButtonTimer onClick={()=> setStatesCounter()}>Pause</ButtonTimer>
          <ButtonTimer onClick={()=>setIsStarted(false)}>Stop</ButtonTimer>
        </>
        }
      </ButtonDiv>
    </ControlBox>
    

    
  </Container>
  )
}


