import Header from "../../components/header";
import LinkPost from "../../components/LinkPost";
import Pesquisa from "../../components/pesquisa";

export default function Home() {
  return (
    <>
      <Header />
      <br></br>
      <Pesquisa />
      <br></br>
      <LinkPost
        titulo={"Titulo Teste"}
        descricao={
          "descriçaõ klwfkonwioedfn iqwudn iuqwme ioqfmoi ioqmd oif iomio qmoim qwoidm qwiod "
        }
        link={
          "https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901"
        }
      />
    </>
  );
}
