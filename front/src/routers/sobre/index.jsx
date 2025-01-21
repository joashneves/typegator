import React from "react";
import styles from './sobre.module.css';

export default function Sobre() {
  return (
    <div className={styles.sobre_container}>
      <h1>Sobre o Typegator</h1>

      <section>
        <h2>O que é o Typegator?</h2>
        <p>
          O <strong>Typegator</strong> é um projeto sem fins lucrativos criado
          com o propósito de promover uma internet mais livre e acessível. Nosso
          objetivo é permitir que todas as pessoas possam compartilhar e
          explorar conteúdos da web sem barreiras ou preocupações, incentivando
          a descoberta e o compartilhamento de informações de forma colaborativa.
        </p>
      </section>

      <section>
        <h2>O que ele faz?</h2>
        <p>
          O <strong>Typegator</strong> é um motor de busca projetado para conectar
          pessoas e ideias. Após criar uma conta, você pode compartilhar links
          interessantes que encontrou pela internet, como blogs pessoais,
          servidores de comunidades ou qualquer outro conteúdo que mereça destaque.
          Além disso, você pode votar nos links que considera mais relevantes,
          ajudando a destacar os melhores conteúdos no topo das buscas.
        </p>
      </section>

      <section>
        <h2>Como usar?</h2>
        <p>
          O <strong>Typegator</strong> é uma plataforma aberta e colaborativa,
          moderada pelos próprios usuários. Se você está se perguntando como usar
          o Typegator, aqui estão algumas dicas práticas:
        </p>
        <ul>
          <li>
            <strong>Como fazer bolo</strong> - Encontre artigos ou sites que
            ensinam a preparar bolos de diferentes tipos.
          </li>
          <li>
            <strong>Site de receitas</strong> - Descubra plataformas dedicadas
            a compartilhar receitas culinárias.
          </li>
          <li>
            <strong>Blog de João</strong> - Encontre o blog de uma pessoa
            específica ou de um autor que você admira.
          </li>
          <li>
            <strong>Artigo sobre ciência</strong> - Explore conteúdos detalhados
            sobre tópicos científicos ou acadêmicos.
          </li>
        </ul>
        <p>
          Você também pode adicionar palavras-chave que ajudem a identificar o
          tipo de conteúdo que está compartilhando, como:
        </p>
        <ul>
          <li>- artigo</li>
          <li>- vídeo</li>
          <li>- projeto</li>
          <li>- protótipo</li>
        </ul>
        <p>
          Essas palavras ajudam outros usuários a entenderem melhor o que você
          está compartilhando e aumentam as chances de o conteúdo ser encontrado.
        </p>
      </section>

      <section>
        <h2>Nosso propósito</h2>
        <p>
          Queremos criar um ambiente onde você possa compartilhar conhecimento,
          inspirar outros e construir uma internet verdadeiramente colaborativa.
          Seja uma ideia, um trabalho, uma criação artística ou um simples link,
          o <strong>Typegator</strong> é o lugar para dar visibilidade a tudo que
          merece ser descoberto.
        </p>
      </section>
    </div>
  );
}
