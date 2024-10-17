import { useState } from "react";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input"
import {Textarea} from "../../components/Textarea"
import {Container,Form} from "./styles";
import { NoteItem } from "../../components/NoteItem";
import {Section} from "../../components/Section"
import {Button} from "../../components/Button"
import { Link } from "react-router-dom";
import { preview } from "vite";

export function New(){
    const [links,setLinks] = useState([]);
    const [newLink, setNewLink] = useState("")

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function  handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(item => link !== deleted))
    }


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
                        {
                            links.map((link, index)=>(
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder="Novo link"
                            onChange= {e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
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