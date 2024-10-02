import {Container, Brand, Menu, Search,Content, NewNote} from './styles'
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import { FiPlus,FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input'

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
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>
            <Content>
                
            </Content>
            <NewNote>
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}