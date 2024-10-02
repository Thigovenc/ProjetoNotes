import {Container,Links,Content} from './styles'
import {Button} from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import {Tag} from '../../components/Tag'

export function Details(){
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>
          <h1>Introducao a React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id reprehenderit voluptatibus impedit accusantium eos maxime 
            ut blanditiis alias aperiam animi! Numquam ullam perferendis 
            libero beatae explicabo doloribus ipsam corporis praesentium.</p>
          <Section title="Links Uteis"> {/*O children vai pegar tudo que esta aqui dentro  */}
            <Links>
              <li>
                <a href="https://react.dev/">https://react.dev/</a>
              </li>
              <li>
                <a href="https://react.dev/">https://react.dev/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="NodeJS"/>
            <Tag title="ReactJS"/>
          </Section>
          <Button title="voltar"/>
        </Content>
      </main>
    </Container>
  )
}


