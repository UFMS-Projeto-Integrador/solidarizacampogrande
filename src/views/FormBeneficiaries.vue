<template>
    <div id="ContainerBeneficiario">
        <h2>Cadastro de Beneficiários</h2>
            
            <!-- Informações Pessoais do usuário -->

    <form id="formBeneficiario" method="POST" autocomplete="off">

        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" required minlength="5" maxlength="45" 
        placeholder="Ex: João da Silva" oninput="this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')">

        <label for="cpf">CPF</label>
        <input type="text" id="cpf" name="cpf" required
        maxlength="11" placeholder="xxxxxxxxxxx" oninput="this.value = this.value.replace(/[^0-9]/g, '')">

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" autocomplete="on" required
        placeholder="exemplo@gmail.com">

        <label for="tel">Telefone</label>
        <input type="tel" name="tel" id="tel" required maxlength="11"
        placeholder="(xx) x xxxx - xxxx" oninput="this.value = this.value.replace(/[^0-9]/g, '')">

        <label for="endereco">Endereço</label>
        <input type="text" id="endereco" name="endereco" required
        minlength="5" maxlength="50" placeholder="Rua: exemplo Nº 123">

        <label for="bairro">Bairro</label>
        <input type="text" id="bairro" name="bairro" required
        minlength="3" maxlength="50" placeholder="Vila: exemplo">

        <label for="referencia">Ponto de Referência</label>
        <input type="text" id="referencia" name="referencia" required
        minlength="5" maxlength="50" placeholder="Próximo a ...">

        <label for="familiares">Número de Dependentes Familiares</label>
        <input type="text" id="familiares" name="familiares" required
        placeholder="Ex: 3 " oninput="this.value = this.value.replace(/[^0-9]/g, '')">

        <label for="necessidades">Principais Necessidades</label>
        <textarea id="necessidades" name="necessidades" rows="4" required
        maxlength="300" placeholder="Roupas, Alimento ..."></textarea>

        <label for="frequencia_ajuda">Frequência desejada para receber ajuda</label>
        <select id="frequencia_ajuda" name="frequencia_ajuda" required>
        <option value=""> </option>
        <option value="unica">Única</option> 
        <option value="semanal">Semanal</option>
        <option value="mensal">Mensal</option>
        <option value="sob_demanda">Sob Demanda</option>
        </select>

        <input type="submit" value="Cadastrar">

    </form>
    </div>
  </template>
  
<script>
  export default {
    name: 'FormBeneficiaries'
  }
</script>

<style>
:root{
    --color-hover: green;
    --text-color: black;
    --border-color: rgba(0, 0, 0, 0.5);
    --submit-color:white;
    --font: 'Roboto', sans-serif;
}


                                /*Ajustes de medida do formulário*/
.container{
    max-width: 45vw;
    margin: auto;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}

h2{
    text-align: center;
    font-size: 2rem;
    color: var(--text-color);
    margin-bottom: 20px;
}

label{
    display: block;
    font-size: 1rem;
    margin-bottom: 8px;
    color: var(--text-color);
    font-weight: bolder;
}

input, select, textarea{
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-size: 0.9rem;
}

input[type="submit"]{
    background-color: var(--color-submit-blue);
    font-size: 1rem;
    cursor: pointer;
    border: none;
}

input[type="submit"]:hover{
    background-color:var(--color-hover);
}
</style>