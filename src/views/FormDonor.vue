<template>
  <div id="ContainerDoador">
    <h2>Cadastro de Doação</h2>

  <!-- Formulário de Doação -->
    <form id="formDoacao" method="POST" autocomplete="off">

    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" required minlength="5" maxlength="45" 
    placeholder="Ex: João da Silva" oninput="this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')">

    <label for="email">E-mail</label>
    <input type="email" id="email" name="email" autocomplete="on" required
    placeholder="exemplo@gmail.com">

    <label for="tel">Telefone</label>
    <input type="tel" name="tel" id="tel" required maxlength="11" 
    placeholder="(xx) x xxxx - xxxx" oninput="this.value = this.value.replace(/[^0-9]/g, '')">

    <label for="nome_ong">Nome da ONG destinada a doação</label>
    <input type="text" id="nome_ong" name="nome_ong" required minlength="5" maxlength="45" 
    placeholder="Ex: Amigos da Comunidade">

    <label for="tipoDoacao">Tipo de Doação</label>
    <select id="tipoDoacao" name="tipoDoacao" required>
    <option value=""> </option>
    <option value="roupas">Roupas</option>
    <option value="alimentos">Alimentos</option>
    <option value="higiene">Produtos de Higiene</option>
    <option value="outros">Outros</option>
    </select>

    <label for="descricao_itens">Descrição dos itens</label>
    <textarea id="necessidades" name="necessidades" rows="4" required
    maxlength="400" placeholder="Descreva os itens que será doando (Ex: 5 camisas, 10 kg de arroz..."></textarea>


    <input type="submit" value="Cadastrar">

    </form>     
  </div>
</template>


<script>
export default {
  name: 'FormDonor'
}
</script>