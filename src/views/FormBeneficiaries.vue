<template>
    <div id="ContainerBeneficiario">
      <h2>Cadastro de Beneficiários</h2>
  
      <form id="formBeneficiario" @submit="enviarFormulario" autocomplete="off">
        <label for="nome">Nome</label>
        <input id="nome" 
        v-model="nome" 
        required minlength="5"
        maxlength="45"
        placeholder="Ex: João da Silva" />

        <label for="cpf">CPF</label>
        <input id="cpf" 
        v-model="cpf" 
        required 
        maxlength="11" 
        placeholder="xxxxxxxxxxx" />

        <label for="email">E-mail</label>
        <input id="email" 
        v-model="email" 
        type="email" 
        required 
        maxlength="70" 
        placeholder="exemplo@email.com" />

        <label for="tel">Telefone</label>
        <input id="tel" 
        v-model="tel" 
        required 
        maxlength="11" 
        placeholder="(xx) x xxxx - xxxx" />

        <label for="cep">CEP</label>
        <input id="cep" 
        v-model="cep" 
        required 
        maxlength="8" 
        placeholder="12345678" />

        <label for="endereco">Endereço</label>
        <input id="endereco" 
        v-model="endereco" 
        required 
        minlength="5" 
        maxlength="50" 
        placeholder="Rua: exemplo Nº 123" />

        <label for="bairro">Bairro</label>
        <input id="bairro" 
        v-model="bairro" 
        required 
        minlength="3" 
        maxlength="50" 
        placeholder="Vila: exemplo" />

        <label for="referencia">Ponto de Referência</label>
        <input id="referencia" 
        v-model="referencia" 
        required minlength="5" 
        maxlength="50" 
        placeholder="Próximo a ..." />

        <label for="familiares">Número de moradores na residência</label>
        <input id="familiares" 
        v-model="familiares" 
        required 
        maxlength="2" 
        placeholder="Ex: 3" />

        <label for="necessidades">Necessidades</label>
        <textarea id="necessidades" 
        v-model="necessidades" 
        rows="4" 
        required 
        maxlength="400" 
        placeholder="Descreva o que está precisando..."></textarea>

        <input type="submit" value="Cadastrar" />
      </form>

    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { db } from '../firebase' // ou './firebase' se estiver no mesmo nível
    import { collection, addDoc } from 'firebase/firestore' // 🔥 IMPORTANTE

    const nome = ref('')
    const cpf = ref('')
    const email = ref('')
    const tel = ref('')
    const cep = ref('')
    const endereco = ref('')
    const bairro = ref('')
    const referencia = ref('')
    const familiares = ref('')
    const necessidades = ref('')

    const enviarFormulario = async (e) => {
      e.preventDefault()

      try {
        await addDoc(collection(db, 'beneficiariosdb'), {
          nome: nome.value,
          cpf: cpf.value,
          email: email.value,
          tel: tel.value,
          cep: cep.value,
          endereco: endereco.value,
          bairro: bairro.value,
          referencia: referencia.value,
          familiares: familiares.value,
          necessidades: necessidades.value,
          criadoEm: new Date()
        })

        alert('Beneficiário cadastrado com sucesso!')
        limparCampos()
      } catch (error) {
        console.error('Erro ao salvar:', error)
        alert('Erro ao cadastrar. Verifique o console.')
      }
    }

    const limparCampos = () => {
      nome.value = ''
      cpf.value = ''
      email.value = ''
      tel.value = ''
      cep.value = ''
      endereco.value = ''
      bairro.value = ''
      referencia.value = ''
      familiares.value = ''
      necessidades.value = ''
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
  
  #formBeneficiario textarea, #nome,
  #cpf, #cep, #endereco, #bairro, #referencia,
  #familiares, #tel, #email,
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
  
  #formBeneficiario v-model::placeholder,
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