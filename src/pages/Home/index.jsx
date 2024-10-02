import {Container, Brand, Menu, Search,Content, NewNote} from './styles'
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="React" isActive></ButtonText></li>
                <li><ButtonText title="NodeJs"></ButtonText></li>
                <li><ButtonText title="NextJS"></ButtonText></li>
            </Menu>
            <Search>

            </Search>
            <Content>

            </Content>
            <NewNote>

            </NewNote>
        </Container>
    )
}