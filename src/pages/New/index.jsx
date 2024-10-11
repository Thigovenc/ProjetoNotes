import {Header} from "../../components/Header";
import {Input} from "../../components/Input"
import {Textarea} from "../../components/Textarea"
import {Container,Form} from "./styles";
import { NoteItem } from "../../components/NoteItem";
import {Section} from "../../components/Section"
import {Button} from "../../components/Button"
import { Link } from "react-router-dom";

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Titulo"/>
                    <Textarea placeholder="Observacoes"/>
                    <Section title="Links Uteis">
                        <NoteItem value="https://github.com/thigovenc"/>
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="https://github.com/thigovenc"/>
                            <NoteItem isNew placeholder="Novo link"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}