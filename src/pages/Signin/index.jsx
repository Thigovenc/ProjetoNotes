import {Container, Form, Background} from './style'
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {FiLogIn,FiMail,FiLock} from 'react-icons/fi'

export function Signin(){
    return(
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicacao para salvar e gerenciar seus links uteis</p>

                <h2>Faca seu login</h2>

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

               <Button title="Entrar"/>
                
                <a href="#">
                    Criar Conta
                </a>
            </Form>
            <Background/>
        </Container>
    )
}