<template>
    <div id="container">
      <h2>Fale Conosco!</h2>

      <!-- Formulário de Contato -->

      <form id="formcontato" method="POST" autocomplete="on">

      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" required minlength="5" maxlength="45" 
      placeholder="Ex: João da Silva" oninput="this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')">

      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" autocomplete="on" required
      placeholder="exemplo@gmail.com">

      <label for="assunto">Assunto</label>
      <input type="text" id="assunto" name="assunto" required minlength="5" maxlength="50" 
      placeholder="Ex: Informações sobre nosso trabalho" oninput="this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')">

      <label for="descricao_itens">Escreva sua mensagem</label>
      <textarea id="necessidades" name="necessidades" rows="4" required
      maxlength="500" placeholder="Descrição do assunto"></textarea>

          <!-- Botão de Enviar -->
      <input type="submit" value="Enviar">
      </form>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'Contato'
  }
  </script>

<style>
  :root{
    --color-submit-blue:#0b519c;
    --color-hover: green;
    --text-color: black;
    --border-color: rgba(0, 0, 0, 0.5);
    --submit-color:white;
    --font: 'Roboto', sans-serif;
}
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: var(--font);
}
.container{
    max-width: 46vw;
    margin: auto;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}
h2{
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: var(--text-color);
}
label{
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--text-color);
}

input, textarea{
    width: 60vw;
    height: 8vh;
    padding: 10px;
    margin-top: 8px;
    margin-bottom: 15px;
    text-align: center;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-size: 0.9rem;
}

input[type="submit"]{
    background-color: var(--color-submit-blue);
    color: var(--submit-color);
    font-size: 1rem;
    cursor: pointer;
    border: none;
}

input[type="submit"]:hover{
    background-color:var(--color-hover);
}
</style>