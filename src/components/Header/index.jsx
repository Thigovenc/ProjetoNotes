import { Container,Profile } from "./styles";


export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/thigovenc.png" alt="Foto do usuario" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Thiago Venceslau</strong>
                </div>
            </Profile>
        </Container>
    )
}