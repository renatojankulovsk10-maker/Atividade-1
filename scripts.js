const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const sectionId = link.getAttribute('data-section');
    const section = document.getElementById(sectionId);

    // Verifica se a seção já está visível
    const isVisible = !section.classList.contains('oculto');

    // Se já estiver visível, oculta novamente
    if (isVisible) {
      section.classList.add('oculto');
      const foto = document.querySelector('.foto-central');
      if (foto) {
        foto.style.display = 'block';
      }
      return; // encerra aqui
    }

    // Caso contrário, oculta todas as outras seções
    document.querySelectorAll('.conteudo').forEach(sec => {
      sec.classList.add('oculto');
    });

    const foto = document.querySelector('.foto-central');
    if (foto) {
      foto.style.display = 'none';
    }

    // Mostra a seção clicada
    section.classList.remove('oculto');
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.opacity = 1;
    }, 50);
  });
});

// Array de objetos com seus projetos
const projetos = [
  {
    titulo: "Meu Projeto - 1",
    descricao: "Site simples de apostas (incompleto)",
    link: "https://github.com/renatojankulovsk10-maker/Site-apostas#"
  },
  {
    titulo: "Meu Projeto - 2",
    descricao: "Site de estudos da aula",
    link: "https://github.com/renatojankulovsk10-maker/SITE-ESTUDOS"
  }
  // Você pode adicionar quantos quiser aqui
];

// Função para renderizar os projetos dinamicamente
function renderizarProjetos() {
  const container = document.querySelector(".projetos-container");
  container.innerHTML = ""; // limpa antes de renderizar

  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver no Github</a>
    `;

    container.appendChild(card);
  });
}

// Chama a função assim que a página carregar
document.addEventListener("DOMContentLoaded", renderizarProjetos);