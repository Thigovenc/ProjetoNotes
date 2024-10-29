import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
<<<<<<< HEAD
import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
=======
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
>>>>>>> refs/remotes/origin/main
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState(null);
<<<<<<< HEAD

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate("/")
  }
  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota ?")

    if(confirm){
      await api.delete(`notes/${params.id}`);
      navigate("/")
=======
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  async function handleRemove() {
    const confirm = window.confirm("deseja realmente excluir a nota ?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
>>>>>>> refs/remotes/origin/main
    }
  }
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
<<<<<<< HEAD
      setData(response.data);
    }

    fetchNote();
  }, []);
=======
      setData(response);
    }
    fetchNote();
  });
>>>>>>> refs/remotes/origin/main
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" onClick={handleRemove} />
<<<<<<< HEAD
            <h1>{data.title}</h1>
            <p>{data.description}</p>
=======
            <h1>Introducao a React</h1>
            <p>{data.descriptions}</p>

>>>>>>> refs/remotes/origin/main
            {data.links && (
              <Section title="Links Uteis">
                {" "}
                {/*O children vai pegar tudo que esta aqui dentro  */}
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
<<<<<<< HEAD
                      <a href={link.url} target="_blank">{link.url}</a>
=======
                      <a target="_blank" href={link.url}>
                        {link.url}
                      </a>
>>>>>>> refs/remotes/origin/main
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
<<<<<<< HEAD
                  <Tag key={String(tag.id)} title={tag.name}/>
                ))}
              </Section>
            )}
            <Button title="voltar" onClick= {handleBack} />
=======
                  <Tag title={tag.name} key={String(tag.id)} />
                ))}
              </Section>
            )}
            <Button title="voltar" onClick={handleBack} />
>>>>>>> refs/remotes/origin/main
          </Content>
        </main>
      )}
    </Container>
  );
}
