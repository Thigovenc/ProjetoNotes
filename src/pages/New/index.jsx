import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {

    if (!title){
        return alert("Digite o titulo da nota")
    }
    
    if(newTag){
        return alert("Voce deixou uma tag no campo para adicionar, mas nao clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }
    if(newLink){
        return alert("Voce deixou um link no campo para adicionar, mas nao clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });
    alert("Nota criada com Sucesso")
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input
            placeholder="Titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observacoes"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links Uteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag()}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button 
            title="Salvar" 
            onClick = {handleNewNote}
            />
        </Form>
      </main>
    </Container>
  );
}
