import { Container } from "./styled";

import Produto from "../produto";
import { useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  function listar() {
    const r = [
      {
        id: 10001,
        imagem:
          "https://images-na.ssl-images-amazon.com/images/I/5175qrsARzS._SX392_BO1,204,203,200_.jpg",
        titulo: "Paraíso Perdido",
        preco: "R$ 26,02",
        descricao:
          "John Milton nasceu em 9 de dezembro de 1608, em Londres, na Inglaterra. Poeta, dramaturgo e político, foi um grande estudioso da religião na Inglaterra no século XVII e seus escritos refletiam suas convicções pessoais, além de discussões pertinentes sobre a turbulência política de sua época. Graduou-se em 1629 na Universidade de Cambridge e, alguns anos depois, ingressou em uma viagem pela França e Itália, onde encontrou-se com Galileu Galilei. O poema épico Paraíso Perdido é considerado sua maior obra, em todos os sentidos, e se tornou um clássico da literatura que inspirou diversos escritores ao longo dos anos.",
        especificacoes:
          "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10002,
        imagem:
          "https://images-na.ssl-images-amazon.com/images/I/51gN-VWIpIL._SX343_BO1,204,203,200_.jpg",
        titulo: "A Divina Comédia",
        preco: "R$ 7,66",
        descricao:
          "Dante Alighieri nasceu em Florença no ano 1265, onde viveu a primeira parte da sua vida até ser exilado por Carlos Valois e pela igreja, passando a viver pelas cidades deVerona, Bolonha e Ravena. Foi casado com Gemma Donati e tiveram 4 filhos; porém, sempre amou sua amiga de infância, Beatrice Portinari, que se tornou sua musa inspiradora. A sua obra mais famosa foi inicialmente intitulada “Comédia”, sendo mais tarde qualificada como “divina” pelo poeta Giovanni Boccaccio, levando em consideração o teor histórico, mitológico, filosófico, político e religioso da obra. Dante faleceu em Ravena no ano 1321.",
        especificacoes: "Compra pfv, nunca te pedi nada"
      },
      {
        id: 10003,
        imagem:
          "https://m.media-amazon.com/images/P/B089YWP9XR.01._SCLZZZZZZZ_SX500_.jpg",
        titulo: "O Fantasma da Ópera",
        preco: "R$ 8,89",
        descricao:
          "Uma criatura enigmática e mascarada perambula pela Ópera de Paris, levantando rumores entre os artistas e funcionários que ali frequentam. Acontecimentos assustadores fazem com que a direção do teatro considere que um Fantasma realmente assombra o lugar. A misteriosa figura mascarada passa a visitar Christine Daaé, uma jovem cantora lírica, e dá a ela lições de canto, planejando transformá-la na prima-dona da Ópera de Paris e seduzi-la. A jovem acredita que a voz que ouve é do Anjo da Música que a fará triunfar e então sela com ele um pacto. Terror, ciúmes, traição e tragédia, permeiam a relação do gênio da música e Christine.",
        especificacoes: "Se não gostou do outro compra esse 'CONFIA' "
      },
      {
        id: 10004,
        imagem:
          "https://images-na.ssl-images-amazon.com/images/I/5175qrsARzS._SX392_BO1,204,203,200_.jpg",
        titulo: "Paraíso Perdido",
        preco: "R$ 26,02",
        descricao:
          "John Milton nasceu em 9 de dezembro de 1608, em Londres, na Inglaterra. Poeta, dramaturgo e político, foi um grande estudioso da religião na Inglaterra no século XVII e seus escritos refletiam suas convicções pessoais, além de discussões pertinentes sobre a turbulência política de sua época. Graduou-se em 1629 na Universidade de Cambridge e, alguns anos depois, ingressou em uma viagem pela França e Itália, onde encontrou-se com Galileu Galilei. O poema épico Paraíso Perdido é considerado sua maior obra, em todos os sentidos, e se tornou um clássico da literatura que inspirou diversos escritores ao longo dos anos.",
        especificacoes:
          "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10005,
        imagem:
          "https://images-na.ssl-images-amazon.com/images/I/51gN-VWIpIL._SX343_BO1,204,203,200_.jpg",
        titulo: "A Divina Comédia",
        preco: "R$ 7,66",
        descricao:
          "Dante Alighieri nasceu em Florença no ano 1265, onde viveu a primeira parte da sua vida até ser exilado por Carlos Valois e pela igreja, passando a viver pelas cidades deVerona, Bolonha e Ravena. Foi casado com Gemma Donati e tiveram 4 filhos; porém, sempre amou sua amiga de infância, Beatrice Portinari, que se tornou sua musa inspiradora. A sua obra mais famosa foi inicialmente intitulada “Comédia”, sendo mais tarde qualificada como “divina” pelo poeta Giovanni Boccaccio, levando em consideração o teor histórico, mitológico, filosófico, político e religioso da obra. Dante faleceu em Ravena no ano 1321.",
        especificacoes: "Compra pfv, nunca te pedi nada"
      },
      {
        id: 10006,
        imagem:
          "https://m.media-amazon.com/images/P/B089YWP9XR.01._SCLZZZZZZZ_SX500_.jpg",
        titulo: "O Fantasma da Ópera",
        preco: "R$ 8,89",
        descricao:
          "Uma criatura enigmática e mascarada perambula pela Ópera de Paris, levantando rumores entre os artistas e funcionários que ali frequentam. Acontecimentos assustadores fazem com que a direção do teatro considere que um Fantasma realmente assombra o lugar. A misteriosa figura mascarada passa a visitar Christine Daaé, uma jovem cantora lírica, e dá a ela lições de canto, planejando transformá-la na prima-dona da Ópera de Paris e seduzi-la. A jovem acredita que a voz que ouve é do Anjo da Música que a fará triunfar e então sela com ele um pacto. Terror, ciúmes, traição e tragédia, permeiam a relação do gênio da música e Christine.",
        especificacoes: "Se não gostou do outro compra esse 'CONFIA' "
      },
      {
        id: 10007,
        imagem:
          "https://images-na.ssl-images-amazon.com/images/I/5175qrsARzS._SX392_BO1,204,203,200_.jpg",
        titulo: "Paraíso Perdido",
        preco: "R$ 26,02",
        descricao:
          "John Milton nasceu em 9 de dezembro de 1608, em Londres, na Inglaterra. Poeta, dramaturgo e político, foi um grande estudioso da religião na Inglaterra no século XVII e seus escritos refletiam suas convicções pessoais, além de discussões pertinentes sobre a turbulência política de sua época. Graduou-se em 1629 na Universidade de Cambridge e, alguns anos depois, ingressou em uma viagem pela França e Itália, onde encontrou-se com Galileu Galilei. O poema épico Paraíso Perdido é considerado sua maior obra, em todos os sentidos, e se tornou um clássico da literatura que inspirou diversos escritores ao longo dos anos.",
        especificacoes:
          "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10008,
        imagem:
          "https://images-na.ssl-images-amazon.com/images/I/51gN-VWIpIL._SX343_BO1,204,203,200_.jpg",
        titulo: "A Divina Comédia",
        preco: "R$ 7,66",
        descricao:
          "Dante Alighieri nasceu em Florença no ano 1265, onde viveu a primeira parte da sua vida até ser exilado por Carlos Valois e pela igreja, passando a viver pelas cidades deVerona, Bolonha e Ravena. Foi casado com Gemma Donati e tiveram 4 filhos; porém, sempre amou sua amiga de infância, Beatrice Portinari, que se tornou sua musa inspiradora. A sua obra mais famosa foi inicialmente intitulada “Comédia”, sendo mais tarde qualificada como “divina” pelo poeta Giovanni Boccaccio, levando em consideração o teor histórico, mitológico, filosófico, político e religioso da obra. Dante faleceu em Ravena no ano 1321.",
        especificacoes: "Compra pfv, nunca te pedi nada"
      },
      {
        id: 10009,
        imagem:
          "https://m.media-amazon.com/images/P/B089YWP9XR.01._SCLZZZZZZZ_SX500_.jpg",
        titulo: "O Fantasma da Ópera",
        preco: "R$ 8,89",
        descricao:
          "Uma criatura enigmática e mascarada perambula pela Ópera de Paris, levantando rumores entre os artistas e funcionários que ali frequentam. Acontecimentos assustadores fazem com que a direção do teatro considere que um Fantasma realmente assombra o lugar. A misteriosa figura mascarada passa a visitar Christine Daaé, uma jovem cantora lírica, e dá a ela lições de canto, planejando transformá-la na prima-dona da Ópera de Paris e seduzi-la. A jovem acredita que a voz que ouve é do Anjo da Música que a fará triunfar e então sela com ele um pacto. Terror, ciúmes, traição e tragédia, permeiam a relação do gênio da música e Christine.",
        especificacoes: "Se não gostou do outro compra esse 'CONFIA' "
      }
    ];

    setProdutos(r);
  }

  return (
    <Container>
      <h1>BOOKLY</h1>
      <br />

      <button className="listarb" onClick={listar}>
        Listar
      </button>
      <br />

      <div className="lista-produtos">
        {produtos.map((item) => (
          <Produto infos={item} />
        ))}
      </div>
    </Container>
  );
}
