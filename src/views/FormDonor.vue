<template>
  <div id="ContainerDoador">
    
    <h2>Cadastro de Doação</h2>

    <form id="formDoacao" method="POST" autocomplete="off">

    <label for="nome">Nome</label>
      <input 
        type="text" 
        id="nome" 
        name="nome" 
        required 
        minlength="5" 
        maxlength="45" 
        placeholder="Ex: João da Silva" 
        oninput="this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')">

    <label for="email">E-mail</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        autocomplete="on" 
        required 
        maxlength="70"
        placeholder="exemplo@email.com">

    <label for="tel">Telefone</label>
      <input 
        type="tel" 
        name="tel" 
        id="tel" 
        required 
        maxlength="11" 
        placeholder="(xx) x xxxx - xxxx" 
        oninput="this.value = this.value.replace(/[^0-9]/g, '')">

    <label for="cep">CEP</label>
      <input
        type="text"
        id="cep"
        name="cep"
        required
        maxlength="8"
        placeholder="12345-678"
        oninput="this.value = this.value.replace(/[^0-9]/g, '')">

    <label for="nome_ong">Nome da ONG destinada a doação</label>
      <input 
        type="text" 
        id="nome_ong" 
        name="nome_ong" 
        required 
        minlength="5" 
        maxlength="45" 
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
      <textarea
        id="necessidades"
        name="necessidades"
        rows="4"
        maxlength="400"
        required
        placeholder="Descreva os itens que será doando (Ex: 5 camisas, 10 kg de arroz...)"></textarea>

    <input type="submit" value="Cadastrar">

    </form>     
  </div>
</template>


<script>
export default {
  name: 'FormDonor'
}
</script>

<style scoped>
*{
  --color-submit-e-focus: #007BFF;
  --color-hover-submit:#0056b3;
  
  --color-font-placeholder:#999;
  --color-font: black;
  --color-font-submit:#fff;
  
  --color-form:#fff;
  --color-form-input:#ccc;
  
 }

#ContainerDoador {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  margin-top:15vh;
}

#ContainerDoador h2 {
  font-size: 2rem;
  color: var(--color-font);
  margin-bottom: 2rem;
}

#formDoacao {
  background-color: var(--color-form);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.25rem;
}

#formDoacao label {
  color: var(--color-font);
  font-size: 1.05rem;
  text-align: left;
  font-weight: 500;
}

#formDoacao input[type="text"],
#formDoacao input[type="email"],
#formDoacao input[type="tel"],
#formDoacao textarea,
#formDoacao select {
  width: 100%;
  padding: 0rem 1rem;
  height: 50px;
  border: 1px solid var(--color-form-input);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 1rem;
}

#formDoacao textarea {
  padding: 1rem;
  height: auto;
  resize: vertical;
  text-align: left;
}

#formDoacao input:focus,
#formDoacao textarea:focus,
#formDoacao select:focus {
  border-color: var(--color-submit-e-focus);
  outline: none;
}

#formDoacao input::placeholder,
#formDoacao textarea::placeholder {
  color: var(--color-font-placeholder);
  text-align: left;
}

#formDoacao select {
  background-color: var(--color-form);
}

#formDoacao input[type="submit"] {
  width: 100%;
  padding: 0.65rem 1rem;
  background-color: var(--color-submit-e-focus);
  color: var(--color-font-submit);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

#formDoacao input[type="submit"]:hover {
  background-color: var(--color-hover-submit);
}
</style>