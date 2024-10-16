import {Container, Form,Avatar} from './style'
import {FiCamera,FiArrowLeft, FiUser, FiMail,FiLock} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Link } from "react-router-dom";
import { useState } from 'react';
import {useAuth} from '../../hooks/auth'

export function Profile(){
    const {user} = useAuth();

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [passwordOld,setPasswordOld] = useState("")
    const [passwordNew,setPasswordNew] = useState("")

    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img
                        src= "https://github.com/thigovenc.png"
                        alt="foto do usuario"
                    />
                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input id='avatar' type='file' />
                    </label>
                </Avatar>
                <Input 
                    placeholder= "Nome"
                    type= "text"
                    icon={FiUser}
                    value= {name}
                    onChange={(e)=>{setName(e.target.value)}}
                />
                <Input 
                    placeholder= "E-mail"
                    type= "text"
                    icon={FiMail}
                    value= {email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <Input 
                    placeholder= "Senha atual"
                    type= "password"
                    icon={FiLock}
                    onChange={(e)=>{setPasswordOld(e.target.value)}}
                />
                <Input 
                    placeholder= "Nova senha"
                    type= "password"
                    icon={FiLock}
                    onChange={(e)=>{setPasswordNew(e.target.value)}}
                />
                <Button title='Salvar'/>
            </Form>
        </Container>
    )
}