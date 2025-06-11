<template>
    <div id="ContainerOngs">
        
      <h2>Cadastro de ONG's</h2>

        <form id="formDoador" method="POST" autocomplete="off">

          <label for="nome_ong">Nome da ONG</label>
            <input 
              type="text" 
              id="nome_ong" 
              name="nome_ong" 
              required 
              minlength="1" 
              maxlength="30" 
              placeholder="Ex: Amigos da Comunidade" oninput="this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')">

          <label for="cnpj_ong">CNPJ</label>
            <input 
              type="text" 
              id="cnpj_ong" 
              name="cnpj_ong" 
              required
              maxlength="14" 
              placeholder="xxxxxxxxxxxxxx" oninput="this.value = this.value.replace(/[^0-9]/g, '')">

          <label for="email_ong">E-mail</label>
            <input 
              type="email" 
              id="email_ong" 
              name="email_ong" 
              autocomplete="on" 
              required
              maxlength="70" 
              placeholder="exemplo@email.com">

          <label for="tel_ong">Telefone</label>
            <input 
              type="tel" 
              name="tel_ong" 
              id="tel_ong" 
              required 
              maxlength="11" 
              placeholder="(xx) x xxxx - xxxx" oninput="this.value = this.value.replace(/[^0-9]/g, '')">

          <label for="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              required
              maxlength="8"
              placeholder="12345-678"
              oninput="this.value = this.value.replace(/[^0-9]/g, '')">


          <label for="endereco_ong">Endereço</label>
            <input 
              type="text" 
              id="endereco_ong" 
              name="endereco_ong" 
              required
              minlength="1" 
              maxlength="50" 
              placeholder="Rua: exemplo Nº 123">

          <label for="bairro_ong">Bairro</label>
            <input 
              type="text" 
              id="bairro_ong" 
              name="bairro_ong" 
              required
              minlength="1" 
              maxlength="50" 
              placeholder="Vila: exemplo">

          <label for="area_atuacao">Área de Atuação da ONG</label>
            <input 
              type="text" 
              id="area_atuacao" 
              name="area_atuacao" 
              required
              minlength="1" 
              maxlength="50" 
              placeholder="Ex: Assistência social">

          <input type="submit" value="Cadastrar">

        </form>

    </div>
</template>

<script>
  export default {
    name: 'FormOngs'
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
#ContainerOngs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  margin-top:15vh;
}

#ContainerOngs h2 {
  font-size: 2rem;
  color: var(--color-font);
  margin-bottom: 2rem;
}

#formDoador {
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

#formDoador label {
  color: var(--color-font);
  font-size: 1.05rem;
  text-align: left;
  font-weight: 500;
}

#formDoador input[type="text"],
#formDoador input[type="email"],
#formDoador input[type="tel"],
#formDoador textarea,
#formDoador select {
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
  color: var(--color-font);
}

#formDoador textarea {
  padding: 1rem;
  height: auto;
  resize: vertical;
}

#formDoador input:focus,
#formDoador textarea:focus,
#formDoador select:focus {
  border-color: var(--color-submit-e-focus);
  outline: none;
}

#formDoador input::placeholder,
#formDoador textarea::placeholder {
  color: var(--color-font-placeholder);
  text-align: left;
}

#formDoador select {
  background-color: var(--color-form);
}

#formDoador input[type="submit"] {
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

#formDoador input[type="submit"]:hover {
  background-color: var(--color-hover-submit);
}
</style>