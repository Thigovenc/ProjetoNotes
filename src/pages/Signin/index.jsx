import { useState } from 'react'
import {Container, Form, Background} from './style'
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {FiMail,FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import {useAuth} from "../../hooks/auth"

export function Signin(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn(){
        signIn({email,password});
    }

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
                    onChange= {e => setEmail(e.target.value)}
                />
                  <Input
                    placeholder="Senha"
                    type = "password"
                    icon = {FiLock}
                    onChange= {e => setPassword(e.target.value)}
                />

               <Button title="Entrar" onClick={handleSignIn}/>
                
                <Link to="/register">
                    Criar Conta
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}