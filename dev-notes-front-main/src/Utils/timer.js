import { useState, useEffect } from 'react';

function PomodoroTimer() {
  const tempoInicial = 1500;
  const [tempoRestante, setTempoRestante] = useState(tempoInicial);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (tempoRestante === 0) {
      clearInterval(timerId);
      alert('Pomodoro concluído! Vá descansar um pouco!');
      setTempoRestante(tempoInicial);
    }
  }, [tempoRestante, tempoInicial, timerId]);

  const iniciarPomodoro = () => {
    const id = setInterval(() => {
      setTempoRestante(prevTempo => prevTempo - 1);
    }, 1000);
    setTimerId(id);
  };

  const pausarPomodoro = () => {
    clearInterval(timerId);
  };

  const pararPomodoro = () => {
    clearInterval(timerId);
    setTempoRestante(tempoInicial);
  };

  const atualizarTempo = () => {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    return pad(minutos) + ':' + pad(segundos);
  };

  const pad = (num) => {
    return (num < 10 ? '0' : '') + num;
  };

  return (
    <div>
      <div id="timer">{atualizarTempo()}</div>
      <button onClick={iniciarPomodoro} id="startBtn">Iniciar</button>
      <div id="botoesControles" style={{display: 'none'}}>
        <button onClick={pausarPomodoro}>Pausar</button>
        <button onClick={pararPomodoro}>Parar</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;