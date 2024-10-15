import {Container, Form, Background} from './style'
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {FiMail,FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import {useAuth} from "../../hooks/auth"

export function Signin(){

    const data = useAuth();
    console.log("Meu contexto e: ", data);
    
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
                
                <Link to="/register">
                    Criar Conta
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}