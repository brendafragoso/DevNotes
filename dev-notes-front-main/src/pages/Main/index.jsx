
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Logo from '../../assets/logo-devclub.png'
import HelpIcon from '../../assets/ic_help.png'
import Icon from '../../assets/Icon.png'
import User from '../../assets/User.png'
import dayFigures from '../../Utils/assetsThemes'
import listTask from '../../Utils/listTask'
import lupa from '../../assets/lupa.png'
import imageArrow from '../../assets/imageArrow.png'

import api from '../../services/api'

import {
    Container,
    LateralMenu,
    RoutineBox,
    Aplication,
    Image,
    GreetingText,
    HeaderPage,
    SearchButton,
    SearchDiv,
    SearchIcon,
    UserIcons,
    TaskSection,
    NewTask,
    YourRoutine,
    MinorSection,
    MonthTitle,
    LastModification,
    SubSection,
    TaskGrid,
    Column,
    ArrowButton,
    DayDiv,
    LogoDay,
    DayNumber,
    Tasks,
    Descritpion,
    TitleTask,
    TimeTask,
    RemindersDiv,
    RemindersTitle,
    Reminder
} from "./styles"

import blankTask from '../../Utils/blankTask'
import monthName from '../../Utils/monthName'
import getDayWeek from '../../Utils/getDayWeek'
import getDayMonth from '../../Utils/getDayMonth'
import getMonth from '../../Utils/getMonth'
import filterListByDay from '../../Utils/filterListByDay'
import transformDate from '../../Utils/TransformDate'
import searchWord from '../../Utils/searchWord'
import { Pomodoro } from '../../Components/Pomodoro'
import getDaysInMonth from '../../Utils/getDaysInMonth'
import calculateNewDate from '../../Utils/calculeNewDate'
import { useUser } from '../../hooks/UserContext'
import latestTask from '../../Utils/latestTask'
//import { useState } from 'react'

export const Main = () => {

    const navigate = useNavigate()
    const { userData } = useUser()
    //const [date, setDate] = useState()

    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    const [shiftDay, setShiftDay] = useState(0)

    const [tasks, setTasks] = useState()
    const [mostRecentTask, setMostRecentTask] = useState()

    // obtem a data local
    const localDate = new Date();
    // obtem o ano
    const weekDayReference = localDate.getDay();

    //console.log('yearReference: '+yearReference+'monthReference: '+monthReference+'monthDayReference: '+monthDayReference+'WeekDayReference: '+ weekDayReference)


    //console.log('localDate ' + localDate + 'year ' + yearReference + 'month ' + monthReference +'monthDay ' + monthDayReference +'weekDay ' + weekDayReference)


    useEffect(() => {
        async function loadTasks() {
          try {
            // Faça a chamada à API sem passar o user_id como parâmetro
            const { data } = await api.get(`tasks`);
            
            // Atualize o estado das tasks
            setTasks(data);
            setMostRecentTask(latestTask(data))
          } catch (error) {
            // Lide com erros, se houver algum
            console.error('Erro ao carregar tarefas:', error);
          }
        }
        // Chame a função para carregar as tasks
        loadTasks();
    }, []);

    console.log(tasks)



    function editTask(task, value) {
        if (task && value > -1) {
            navigate(`/Task`, { state: { task, value } });
            console.log(value);
            console.log(task);
        } else {
            console.error("task and value must be defined");
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    function handleButtonClick(listTask, value) {
        const valueLocal = inputValue
        console.log(valueLocal)
        const listTaskFiltred = searchWord(listTask, valueLocal)
        navigate(`/SearchTask`, { state: { listTaskFiltred, value } });
    }

    function goBackTime() {
        setShiftDay(time => time - 7)
        console.log(shiftDay)
    }

    function goForwardTime() {
        setShiftDay(time => time + 7)
        console.log(shiftDay)
    }

    const days = getDaysInMonth(12, 2024)
    console.log('days: ' + days)

    const previousDay = calculateNewDate(localDate, -4);
    console.log("Um dia antes:", previousDay.getMonth());

    function newTaskEdit(blankTask, value) {
        console.log(blankTask)
        if (blankTask) {
            navigate(`/Task`, { state: { task: blankTask, value } });
        }
    }

    return (
        <Container>
            <LateralMenu>
                <img src={Logo}
                    alt="Logo Dev"
                />
                <RoutineBox>
                    <p>{'Rotina  >'}</p>
                </RoutineBox>
            </LateralMenu>
            <Aplication>
                <HeaderPage>
                    <SearchButton>
                        <SearchDiv
                            placeholder={'Procurar...'}
                            onChange={handleChange}
                        >
                        </SearchDiv>
                        <SearchIcon
                            src={lupa}
                            alt="Lupa-imagem"
                            onClick={() => handleButtonClick(listTask, -1)}
                        >
                        </SearchIcon>
                    </SearchButton>

                    <UserIcons>
                        <Image src={HelpIcon} alt={"Icone-ajuda"}></Image>
                        <Image src={Icon} alt={"Icone-notifica"}></Image>
                        <Image src={User} alt={"User-photo"}></Image>
                    </UserIcons>
                </HeaderPage>
                <TaskSection>
                    <SubSection>
                        <GreetingText>
                            {`Olá `+ userData.name}
                        </GreetingText>
                        <NewTask
                            onClick={() => newTaskEdit(blankTask, -1)}
                        >
                            + Nova Rotina
                        </NewTask>
                    </SubSection>
                    <SubSection>
                        <YourRoutine>
                            <p>Suas Rotinas</p>
                        </YourRoutine>
                        <Pomodoro>
                        </Pomodoro>
                    </SubSection>
                    <MinorSection>
                        <LastModification>
                            {
                                mostRecentTask ? `Última atualização,` + mostRecentTask : <></>
                            }
                        </LastModification>
                    </MinorSection>
                </TaskSection>
                <TaskGrid>
                    <Column>
                        <ArrowButton
                            onClick={() => goBackTime()}
                        >
                            <img src={imageArrow} alt="image-botao"></img>
                        </ArrowButton>
                    </Column>

                    {

                        listTask && dayFigures.map((day, index) => (

                            <Column key={index}>
                                <DayDiv>
                                    <MonthTitle show={index}>
                                        {monthName(calculateNewDate(localDate, -weekDayReference + index + shiftDay).getMonth())}
                                    </MonthTitle>
                                    <LogoDay src={dayFigures[index].file} alt={dayFigures[index].name} />
                                    <DayNumber $keyColor={index} >
                                        {calculateNewDate(localDate, -weekDayReference + index + shiftDay).getDate()}
                                    </DayNumber>
                                </DayDiv>
                                {
                                    filterListByDay(
                                        listTask,
                                        calculateNewDate(localDate, -weekDayReference + index + shiftDay).getMonth(),
                                        index,
                                        calculateNewDate(localDate, -weekDayReference + index + shiftDay).getDate()
                                    ).map((task, indexListTask) => {
                                        if (
                                            index === getDayWeek(task.date_begin) &&
                                            calculateNewDate(localDate, -weekDayReference + index + shiftDay).getDate() === getDayMonth(task.date_begin) &&
                                            calculateNewDate(localDate, -weekDayReference + index + shiftDay).getMonth() === getMonth(task.date_begin)
                                        ) {
                                            return (
                                                <Tasks
                                                    key={indexListTask}
                                                    colorBox={task.box_color}
                                                    colorFont={task.text_color}
                                                    taskDate={getDayWeek(task.date_begin)}
                                                    onClick={() => editTask(task, indexListTask)}
                                                >
                                                    <Descritpion>
                                                        <TitleTask>
                                                            {task.name_task}<br></br>
                                                        </TitleTask>
                                                        <TimeTask>
                                                            {transformDate(task.date_begin) + ' - ' + transformDate(task.date_finish)}
                                                        </TimeTask>
                                                    </Descritpion>
                                                </Tasks>
                                            );
                                        } else {
                                            return null; // sem task
                                        }
                                    })
                                }
                            </Column>
                        ))}
                    <Column>
                        <ArrowButton
                            onClick={() => goForwardTime()}
                        >
                            <img src={imageArrow} alt="image-botao"></img>
                        </ArrowButton>
                    </Column>
                </TaskGrid>
                <RemindersDiv>
                    <RemindersTitle>
                        Lembretes
                    </RemindersTitle>
                    <Reminder>
                        Ex.: Estudar ao menos 15min por dia, beber água e ler.
                    </Reminder>
                </RemindersDiv>
            </Aplication>
        </Container>
    )
}