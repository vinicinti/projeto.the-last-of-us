/*
 OBJETIVO - quando clicarmos no botão temos que 
 mostar a imagem de fundo correspondente

  - PASSO 1 dar um jeito de pegar o elemento HTML dos botões.

  - PASSO 2 dar um jeito de indentificar o clique do usuário no botão.
  
  - PASSO 3 desmarcar o botão selecionado anterior.
  
  - PASSO 4 marcar o botão clicado como se estivesse selecionada.
  
  - PASSO 5 esconder a imagem anterior.
  
  - PASSO 6 fazer aparecer a imagem correspondente ao botão clicado.
  */
 // - PASSO 1 dar um jeito de pegar o elemento HTML dos botões.
  const botoesCarrossel = document.querySelectorAll('.botao');
  const imagens = document.querySelectorAll('.imagem');

 // - PASSO 2 dar um jeito de indentificar o clique do usuário no botão.
  botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => { 
    


 //- PASSO 3 desmarcar o botão selecionado anterior.
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');

 //- PASSO 4 marcar o botão clicado como se estivesse selecionado.
    botao.classList.add('selecionado');

 //- PASSO 5 esconder a imagem ativa de fundo.
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');

 //- PASSO 6 fazer aparecer a imagem correspondente ao botão clicado.
    (imagens[indice]).classList.add('ativa');
   



  })
})

