<template>
    <div id="ContainerBeneficiario">
      <h2>Cadastro de Beneficiários</h2>
  
      <form id="formBeneficiario" method="POST" autocomplete="off">
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
  
        <label for="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            required
            maxlength="11"
            placeholder="xxxxxxxxxxx"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')">
  
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

        <label for="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            required
            minlength="5"
            maxlength="50"
            placeholder="Rua: exemplo Nº 123">
  
        <label for="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            required
            minlength="3"
            maxlength="50"
            placeholder="Vila: exemplo">
    
        <label for="referencia">Ponto de Referência</label>
          <input
            type="text"
            id="referencia"
            name="referencia"
            required
            minlength="5"
            maxlength="50"
            placeholder="Próximo a ...">
  
        <label for="familiares">Número de moradores na residência</label>
          <input
            type="text"
            id="familiares"
            name="familiares"
            required
            placeholder="Ex: 3"
            maxlength="2"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')">
  
        <label for="necessidades">Necessidades</label>
          <textarea
            id="necessidades"
            name="necessidades"
            rows="4"
            required
            maxlength="400"
            placeholder="Descreva o que está precisando (Ex: Roupas, alimento, itens de higiene...)"></textarea>
  
        <input type="submit" value="Cadastrar" />
        
      </form>
    </div>
  </template>
  
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

  #ContainerBeneficiario {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    margin-top:15vh;
  }
  
  #ContainerBeneficiario h2 {
    font-size: 2rem;
    color: var(--color-font);
    margin-bottom: 2rem;
  }
  
  #formBeneficiario {
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
  
  #formBeneficiario label {
    color: var(--color-font);
    font-size: 1.05rem;
    text-align: left;
    font-weight: 500;
  }
  
  #formBeneficiario input[type='text'],
  #formBeneficiario input[type='email'],
  #formBeneficiario input[type='tel'],
  #formBeneficiario textarea,
  #formBeneficiario select {
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
  
  #formBeneficiario textarea {
    padding: 1rem;
    height: auto;
    resize: vertical;
  }
  
  #formBeneficiario input:focus,
  #formBeneficiario textarea:focus,
  #formBeneficiario select:focus {
    border-color: var(--color-submit-e-focus);
    outline: none;
  }
  
  #formBeneficiario input::placeholder,
  #formBeneficiario textarea::placeholder {
    color: var(--color-font-placeholder);
    text-align: left;
  }
  
  #formBeneficiario input[type='submit'] {
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
  
  #formBeneficiario input[type='submit']:hover {
    background-color: var(--color-hover-submit);
  }
  </style>