document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('linhaSelect');
  const artigos = document.querySelectorAll('.linhaOnibus');

  function esconderTodos() {
    artigos.forEach(artigo => {
      artigo.style.display = 'none';
    });
  }

  select.addEventListener('change', () => {
    esconderTodos();
    const selecionado = select.value;
    const artigoMostrar = document.getElementById(selecionado);
    if (artigoMostrar) {
      artigoMostrar.style.display = 'block';
    }
  });

  // Exibir a primeira linha por padrão ao carregar a página
  esconderTodos();
  if (select.value) {
    const artigoInicial = document.getElementById(select.value);
    if (artigoInicial) {
      artigoInicial.style.display = 'block';
    }
  }
})