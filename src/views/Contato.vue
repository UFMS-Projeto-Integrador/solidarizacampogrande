<template>
    <div class="container">
      <h2>Fale Conosco!</h2>
  
      <form @submit.prevent="enviarFormulario" autocomplete="on">
        <label for="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          v-model="form.nome"
          required
          minlength="5"
          maxlength="45"
          placeholder="Ex: João da Silva"
          @input="somenteLetras($event)"
        />
  
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="form.email"
          required
          maxlength="70"
          placeholder="exemplo@email.com"
        />
  
        <label for="assunto">Assunto</label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          v-model="form.assunto"
          required
          minlength="5"
          maxlength="50"
          placeholder="Ex: Informações sobre nosso trabalho"
          @input="somenteLetras($event)"
        />
  
        <label for="mensagem">Escreva sua mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            v-model="form.mensagem"
            rows="4"
            maxlength="500"
            required
            placeholder="Descrição do assunto">
          </textarea>
  
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contato",
    data() {
      return {
        form: {
          nome: "",
          email: "",
          assunto: "",
          mensagem: ""
        }
      };
    },
    methods: {
      somenteLetras(event) {
        event.target.value = event.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
      },
      enviarFormulario() {
        console.log("Formulário enviado:", this.form);
        alert("Mensagem enviada com sucesso!");
      }
    }
  };
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
 
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 75vh;
  margin-top:15vh;
}

.container h2 {
  font-size: 2rem;
  color: var(--color-font);
  margin-bottom: 2rem;
}

form {
  background-color: var(--color-form);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.25rem;
}

form label {
  color: var(--color-font);
  font-size: 1.05rem;
  text-align: left;
  font-weight: 500;
}

form input[type="text"],
form input[type="email"],
form textarea {
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
  color:var(--color-font);
}

form textarea {
  padding: 1rem;
  height: auto;
  resize: vertical;
}

form input:focus,
form textarea:focus {
  border-color: var(--color-submit-e-focus);
  outline: none;
}

form input::placeholder,
form textarea::placeholder {
  color: var(--color-font-placeholder);
  text-align: left;
}

form button[type="submit"] {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: var(--color-submit-e-focus);
  color: var(--color-font-submit);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

form button[type="submit"]:hover {
  background-color: var(--color-hover-submit);
}

/* ===================================== Media Query ================================================= */

@media (max-width: 767px){
	
}

</style>