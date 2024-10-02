import {Container,Links} from './styles'
import {Button} from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import {Tag} from '../../components/Tag'

export function Details(){
  return(
    <Container>
      <Header/>
      <ButtonText title="Excluir Nota"/>

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
    </Container>
  )
}


