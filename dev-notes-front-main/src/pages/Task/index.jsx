import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';

import { 
    Container,
    Side, 
    SectionDiv, 
    Content, 
    ContainerSide, 
    Header, 
    AdminEditor, 
    ColumnContainer,
    ResumeColumn,
    TextDiv,
    TitleTask,
    DescriptionTask,
    EditColumn,
    Form,
    Label,
    Input,
    InputDescription,
    TimeDiv,
    TimeBegin,
    TimeFinish,
    LoginHeader, 
    Image, 
    Button, 
    EditSection,
} from "./styles"

import Logo from '../../assets/logo-devclub.png'
import HelpIcon from '../../assets/ic_help.png'
import Icon from '../../assets/Icon.png'
import User from '../../assets/User.png'
import allData from "../../Utils/allData"
import transformDate from "../../Utils/TransformDate";
import formatarDataISO from "../../Utils/dataFormat";



export function Task(){
    const navigate = useNavigate()
    const location = useLocation()
    const {task, value} = location.state

    console.log(task)

    const [data, setData] = useState(task)

    console.log(data)

    //transformando data iso 8601 para tipo "time"
    const date_begin = transformDate(data.date_begin);
    const date_finish = transformDate(data.date_finish);
    console.log(date_begin)


    // Dados iniciais preenchidos
    const [usersData, setUsersData] = useState(allData)
    const [color, setColor] = useState('#ffffff'); // Cor inicial
    const [nameTask, setNameTask ] = useState(data.name_task);
    const [dateBegin, setDateBegin ] = useState(date_begin);
    const [dateFinish, setDateFinish ] = useState(date_finish);
    const [date, setDate] = useState(formatarDataISO(date_begin));
    const [frequency, setFrequency ] = useState(data.frequency);
    const [description, setDescription ] = useState(data.description);
    const [boxColor, setBoxColor ] = useState(data.box_color);
    const [letterColor, setLetterColor ] = useState(data.text_color);

    
    // Abrindo secção de edição 
    const [isOpen, setIsOpen] = useState(false)
    if(value<0 && isOpen===false){
        setIsOpen(true)
    }
    const openEditSection = ()=>{
        
        setIsOpen(true) 
        
        console.log('ok')
    }

    //const [activeButtonSave, setActiveButtonSave] = useState(false)


    const colorButton = [
        {color: 'rgba(21, 162, 9, 0.3)' },
        {color: 'rgba(126, 19, 137, 0.3)' },
    ]

    function returnPage(){
        navigate(`/Main`);
    }

    useEffect(()=>{  
        if(usersData){
            setUsersData(usersData)
        }
    }, [usersData])

    const handleSaveData = (event)=>{
        console.log('Salvo dados')
    }    

    return (
        <Container>
            <Side>
                <ContainerSide>
                    <img src={Logo} alt="Logo Dev" />
                    <SectionDiv
                        isButtonActive={false}
                        ><p>{'Editar Tarefas >'}</p></SectionDiv>
                    <SectionDiv 
                        isButtonActive={true}
                        onClick={() => returnPage()} 
                    ><p>{'< Voltar'}</p></SectionDiv>
                </ContainerSide>
            </Side>
            <Content>
                
                <Header>
                    <LoginHeader>
                        <Image src={HelpIcon} alt={"Icone-ajuda"}></Image>
                        <Image src={Icon} alt={"Icone-notifica"}></Image>
                        <Image src={User} alt={"User-photo"}></Image>
                    </LoginHeader>
                </Header>
                <AdminEditor>
                    <h2>Edição de Rotinas</h2>
                    <ColumnContainer>
                        {
                            value >-1 && (

                            <>
                                <ResumeColumn>
                                    <TextDiv>
                                        <TitleTask>
                                            {nameTask}
                                        </TitleTask>
                                        <DescriptionTask>
                                            {description}
                                            <br></br>
                                            <br></br>
                                            Frequencia: {frequency}
                                        </DescriptionTask>
                                    </TextDiv>
                                    <TimeDiv>
                                        <TimeBegin>
                                            Inicio: {dateBegin}
                                        </TimeBegin>
                                        <TimeFinish>
                                            Termino: {dateFinish}
                                        </TimeFinish>
                                    </TimeDiv>
                                </ResumeColumn>

                                <Button color={colorButton[0].color} width={'200px'} onClick={openEditSection}>Editar Rotina</Button>        
                            </>        
                            )                            
                        }
                        
                        {
                            isOpen && (

                            <EditColumn>
                                <EditSection>
                                    <Form>
                                        <div>
                                            <Label>
                                                Nome da Tarefa:
                                                <Input
                                                    type="text"
                                                    value={nameTask}
                                                    onChange={(event)=>setNameTask(event.target.value)}>
                                                </Input>
                                            </Label>
                                            <Label>
                                                Descricao:
                                                <InputDescription
                                                    type="text"
                                                    value={description}
                                                    onChange={(event)=>setDescription(event.target.value)}>
                                                </InputDescription>
                                            </Label>
                                        </div>
                                        <div>
                                            <Label>
                                                Data:
                                                <Input
                                                    type="date"
                                                    value={date}
                                                    onChange={(event)=>setDate(event.target.value)}>
                                                </Input>
                                            </Label>
                                            <Label>
                                                Frequencia:
                                                <Input
                                                    type="text"
                                                    value={frequency}
                                                    onChange={(event)=>setFrequency(event.target.value)}>
                                                </Input>
                                            </Label>
                                        </div>
                                        <div>
                                            <Label>
                                                Inicio:
                                                <Input
                                                    type="time"
                                                    value={dateBegin}
                                                    onChange={(event)=>setDateBegin(event.target.value)}>
                                                </Input>
                                            </Label>
                                            <Label>
                                                Término:
                                                <Input
                                                    type="time"
                                                    value={dateFinish}
                                                    onChange={(event)=>setDateFinish(event.target.value)}>
                                                </Input>
                                            </Label>
                                        </div>
                                        <div>
                                            <Label>
                                                Cor da Caixa
                                                <Input
                                                    type="color"
                                                    value={boxColor}
                                                    onChange={(event)=>setBoxColor(event.target.value)}>
                                                </Input>
                                            </Label>
                                            <Label>
                                                Cor da Letra
                                                <Input
                                                    type="color"
                                                    value={letterColor}
                                                    onChange={(event)=>setLetterColor(event.target.value)}>
                                                </Input>
                                            </Label>
                                        </div>
                                    </Form>
                                </EditSection>
                                <Button color={colorButton[1].color} width={'200px'} onClick={handleSaveData}>Salvar Rotina</Button>                            
                                </EditColumn>
                            )
                        }
                        
                    </ColumnContainer>
                </AdminEditor>         
            </Content>
        </Container >
    )
}