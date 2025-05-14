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
    TaskDiv,
    TitleTask,
    DescriptionTask,
    LoginHeader, 
    Image, 
    Button,
} from "./styles"

import Logo from '../../assets/logo-devclub.png'
import HelpIcon from '../../assets/ic_help.png'
import Icon from '../../assets/Icon.png'
import User from '../../assets/User.png'
import allData from "../../Utils/allData"


export function SearchTask(){
    const navigate = useNavigate()
    const location = useLocation()
    const {listTaskFiltred, value} = location.state

    console.log(listTaskFiltred)

    const [data, setData] = useState(listTaskFiltred)

    console.log(data)

    function editTask(task, value){
        if (task && value>-1) {
            navigate(`/Task`, {state: { task, value }});
            console.log(value);
            console.log(task);
        } else {
            console.error("task and value must be defined");
        }
    }

    // Dados iniciais preenchidos
    const [usersData, setUsersData] = useState(allData)
    /*
    const [nameTask, setNameTask ] = useState(data.name_task);
    const [dateBegin, setDateBegin ] = useState(date_begin);
    const [dateFinish, setDateFinish ] = useState(date_finish);
    const [frequency, setFrequency ] = useState(data.frequency);
    const [description, setDescription ] = useState(data.description);
    */
    
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

    return (
        <Container>
            <Side>
                <ContainerSide>
                    <img src={Logo} alt="Logo Dev" />
                    <SectionDiv
                        isButtonActive={false}
                        ><p>{'Resultado de Busca >'}</p></SectionDiv>
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
                    <h2>Resultado da busca para: </h2>
                    <ColumnContainer>
                        {
                            value <0 && (
                            <>
                                <ResumeColumn>
                                    {
                                        listTaskFiltred && (
                                            listTaskFiltred.map((task, index)=>{
                                                return(
                                                    <TaskDiv 
                                                        key={index}
                                                        onClick={() => editTask(task, index)}    
                                                    >
                                                        <TitleTask>{task.name_task}</TitleTask>
                                                        <DescriptionTask>{task.description}</DescriptionTask>
                                                    </TaskDiv>
                                                )
                                            })
                                        )
                                    }
                                </ResumeColumn>    
                            </>        
                            )                            
                        }
                    </ColumnContainer>
                </AdminEditor>         
            </Content>
        </Container >
    )
}