import {Container, Form,Avatar} from './style'
import {FiCamera,FiArrowLeft, FiUser, FiMail,FiLock} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Link } from "react-router-dom";

export function Profile(){
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
                />
                <Input 
                    placeholder= "E-mail"
                    type= "text"
                    icon={FiMail}
                />
                <Input 
                    placeholder= "Senha atual"
                    type= "password"
                    icon={FiLock}
                />
                <Input 
                    placeholder= "Nova senha"
                    type= "password"
                    icon={FiLock}
                />
                <Button title='Salvar'/>
            </Form>
        </Container>
    )
}