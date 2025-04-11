<template>
    <div id="ContainerOngs">
        <h2>Cadastro de ONG's</h2>

        <!-- Informações da ONG -->

        <form id="formDoador" method="POST" autocomplete="off">

        <label for="nome_ong">Nome da ONG</label>
        <input type="text" id="nome_ong" name="nome_ong" required minlength="1" maxlength="30" 
        placeholder="Ex: Amigos da Comunidade" oninput="this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')">

        <label for="cnpj_ong">CNPJ</label>
        <input type="text" id="cnpj_ong" name="cnpj_ong" required
        maxlength="14" placeholder="xxxxxxxxxxxxxx" oninput="this.value = this.value.replace(/[^0-9]/g, '')">

        <label for="email_ong">E-mail</label>
        <input type="email" id="email_ong" name="email_ong" autocomplete="email_ong" required
        placeholder="exemplo@gmail.com">

        <label for="tel_ong">Telefone</label>
        <input type="tel" name="tel_ong" id="tel_ong" required maxlength="11" 
        placeholder="(xx) x xxxx - xxxx" oninput="this.value = this.value.replace(/[^0-9]/g, '')">

        <label for="endereco_ong">Endereço</label>
        <input type="text" id="endereco_ong" name="endereco_ong" required
        minlength="1" maxlength="50" placeholder="Rua: exemplo Nº 123">

        <label for="bairro_ong">Bairro</label>
        <input type="text" id="bairro_ong" name="bairro_ong" required
        minlength="1" maxlength="50" placeholder="Vila: exemplo">

        <label for="area_atuacao">Área de Atuação da ONG</label>
        <input type="text" id="area_atuacao" name="area_atuacao" required
        minlength="1" maxlength="50" placeholder="Ex: Assistência social">

        <label for="necessidades_ong">Quais são as principais necessidades da ONG?</label>
        <textarea id="necessidades_ong" name="necessidades_ong" rows="4" required maxlength="250" placeholder="Ex: Transporte, localização..."></textarea>

        <label for="tipo_doacao">Tipo de Doação</label>
        <select id="tipo_doacao" name="tipo_doacao" required>
        <option value=""></option>
        <option value="roupas">Roupas</option>
        <option value="alimentos">Alimentos</option>
        <option value="produtos_higiene">Produtos de Higiene</option>
        <option value="outros">Outros</option>
        </select>

        <label for="frequencia">Frequência de Doação</label>
        <select id="frequencia" name="frequencia" required>
        <option value=""></option>
        <option value="unica">Única</option>
        <option value="semanal">Semanal</option>
        <option value="mensal">Mensal</option>
        <option value="sob_demanda">Sob Demanda</option>
        </select>

        <label for="voluntarios_ong">A ONG necessita de voluntários?</label>
        <select id="voluntarios_ong" name="voluntarios_ong" required aria-label="Necessidade de voluntários">
        <option value="voluntarios_ong"> </option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
        </select>

        <!-- Botão de Envio -->
        <input type="submit" value="Cadastrar">

        </form>

    </div>
</template>


<script>
  export default {
    name: 'FormOngs'
  }
</script>