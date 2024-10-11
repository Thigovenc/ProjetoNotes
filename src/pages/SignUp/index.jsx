import {Container, Form, Background} from './style'
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {FiLogIn,FiMail,FiLock, FiUser} from 'react-icons/fi'
import { Link } from 'react-router-dom'
export function SignUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Notes</h1>
                <p>Aplicacao para salvar e gerenciar seus links uteis</p>

                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type = "text"
                    icon = {FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type = "text"
                    icon = {FiMail}
                />
                  <Input
                    placeholder="Senha"
                    type = "password"
                    icon = {FiLock}
                />

               <Button title="Cadastrar"/>
                
                <Link to="/">
                    Volat para o login
                </Link>
            </Form> 
        </Container>
    )
}