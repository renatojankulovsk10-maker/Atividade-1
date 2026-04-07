import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import fotoPerfil from './assets/fotoport.jpeg';
import './index.css';
import Video from './assets/sobremim.mp4';

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState("inicio");

  const meusProjetos = [
    { id: 1, titulo: "Projeto 1", descricao: "Site simples de Apostas(incompleto)", link: "https://github.com/renatojankulovsk10-maker/Site-apostas#" },
    { id: 2, titulo: "Projeto 2", descricao: "Site de estudos da aula", link: "https://github.com/renatojankulovsk10-maker/SITE-ESTUDOS" }
  ];


  const toggleSecao = (secao) => {
    if (secaoAtiva === secao) {
      setSecaoAtiva("inicio");
    } else {
      setSecaoAtiva(secao);
    }
  };

  return (
    <>
      <header>
        <nav className="menu">
          <ul>
            <li><a href="#" onClick={() => toggleSecao("sobre")}>Sobre Mim</a></li>
            <li><a href="#" onClick={() => toggleSecao("projetos")}>Meus Projetos</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {secaoAtiva === "inicio" && (
          <div className="foto-central">
            <img src={fotoPerfil} alt="Minha Foto" />
          </div>
        )}

        {secaoAtiva === "sobre" && (
          <section id="sobre" className="conteudo">
            <h2>Sobre Mim</h2>
            <video className="video" controls preload="metadata" src={Video}></video>
          </section>
        )}

        {secaoAtiva === "projetos" && (
          <section id="projetos" className="conteudo">
            <h2>Meus Projetos</h2>
            <div className="projetos-container">
              {meusProjetos.map((projeto) => (
                <ProjectCard
                  key={projeto.id}
                  titulo={projeto.titulo}
                  descricao={projeto.descricao}
                  link={projeto.link}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>&copy; 2026 - Renato de Almeida</p>
      </footer>
    </>
  );
}

export default App;