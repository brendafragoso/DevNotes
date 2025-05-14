import { useEffect, useState } from "react"

import { 
    Container,
    Side, 
    SectionDiv, 
    Content, 
    ContainerSide, 
    Header, 
    AdminEditor, 
    ColumnContainer, 
    EditColumn, 
    ListColumn, 
    SearchComponent, 
    LoginHeader, 
    Image, 
    Button 
} from "./styles"

import DataGridDemo from "../../Components/LayoutComponents/UserList"
import Logo from '../../assets/logo-devclub.png'
import HelpIcon from '../../assets/ic_help.png'
import Icon from '../../assets/Icon.png'
import User from '../../assets/User.png'
import EditBox from "../../Components/EditBox"
import allData from "../../Utils/allData"



export const Admin = () => {

    const [usersData, setUsersData] = useState(allData)
    const [userData, setUserData] = useState()
    const [name, setName] = useState('Nome')
    const [email, setEmail] = useState('Email')
    const [activeButtonEdit, setActiveButtonEdit] = useState(false)
    //const [activeButtonSave, setActiveButtonSave] = useState(false)

    const colorButton = [
        {color: 'rgba(21, 162, 9, 0.3)' },
        {color: 'rgba(126, 19, 137, 0.3)' },
    ]

    
    useEffect(()=>{  
        console.log('activeButton : '+activeButtonEdit)
        if(userData && activeButtonEdit){
        setName(userData.name)
        setEmail(userData.email)
        setActiveButtonEdit(false)
        }
    }, [userData, activeButtonEdit])

    useEffect(()=>{  
        if(usersData){
            setUsersData(usersData)
        }
    }, [usersData])
    
    const saveData = () => {
        const updatedData = usersData.map(user => {
            if (user.id === userData.id) {
                return { ...user, name: name, email: email };
            }
            return user;
        });
        setUsersData(updatedData);
    }


    function handleData(event) {
        event.preventDefault()
        if (activeButtonEdit) {
            setActiveButtonEdit(false)
        } else {
            setActiveButtonEdit(true)
        }
    }

    const handleSaveData = (event)=>{
        event.preventDefault();
        console.log(usersData);
        saveData();
    }

    return (
        <Container>
            <Side>
                <ContainerSide>
                    <img src={Logo} alt="Logo Dev" />
                    <SectionDiv><p>{'Administrador  >'}</p></SectionDiv>
                </ContainerSide>
            </Side>
            <Content>
                
                <Header>
                    <SearchComponent placeholder={'Procurar...'}/>
                    <LoginHeader>
                        <Image src={HelpIcon} alt={"Icone-ajuda"}></Image>
                        <Image src={Icon} alt={"Icone-notifica"}></Image>
                        <Image src={User} alt={"User-photo"}></Image>
                    </LoginHeader>
                </Header>
                <AdminEditor>
                    <p>Usuários</p>
                    <ColumnContainer>
                   
                        <EditColumn>
                            <Button color={colorButton[1].color} width={'95%'} onClick={handleSaveData}>Salvar</Button>
                            <EditBox name={name} email={email} setName={setName} setEmail={setEmail}>

                            </EditBox>
                        </EditColumn>
                    
                        <ListColumn>
                            <Button color={colorButton[0].color} width={'95%'} onClick={handleData} >Editar</Button>
                            <DataGridDemo setUserData={setUserData} usersData={usersData}/>
                        </ListColumn>
                    </ColumnContainer>
                </AdminEditor>         
            </Content>
        </Container >
    )
}