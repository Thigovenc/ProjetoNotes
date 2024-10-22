import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }
  async function handleRemove() {
    const confirm = window.confirm("deseja realmente excluir a nota ?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response);
    }
    fetchNote();
  });
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" onClick={handleRemove} />
            <h1>Introducao a React</h1>
            <p>{data.descriptions}</p>

            {data.links && (
              <Section title="Links Uteis">
                {" "}
                {/*O children vai pegar tudo que esta aqui dentro  */}
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a target="_blank" href={link.url}>
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag title={tag.name} key={String(tag.id)} />
                ))}
              </Section>
            )}
            <Button title="voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
