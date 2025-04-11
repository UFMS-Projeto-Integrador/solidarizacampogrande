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
      placeholder="Ex: Contratação de serviços" oninput="this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')">

      <label for="descricao_itens">Escreva sua mensagem</label>
      <textarea id="necessidades" name="necessidades" rows="4" required
      maxlength="500" placeholder="Descreva sua mensagem"></textarea>

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

<style scoped>

</style>