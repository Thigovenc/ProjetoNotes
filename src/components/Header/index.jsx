import {RiShutDownLine} from 'react-icons/ri';
import { Container,Profile,Logout } from "./styles";


export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/thigovenc.png" alt="Foto do usuario" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Thiago Venceslau</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}