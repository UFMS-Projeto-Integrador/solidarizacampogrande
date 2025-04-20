<template>
    <div id="login-area">
      <div id="img-area">
        <img src="@/assets/logo.svg" alt="Foto Tela de Login" @click="goToHome"/>
      </div>
      <div id="login">
        <div id="text-login">
          <h1>Login</h1>
          <p>Preencha os campos abaixo com os seus dados de acesso.</p>
        </div>
        <div id="form-login">
          <form>
            <input type="email" placeholder="Digite seu E-mail" required autocomplete="on" />
            <input type="password" placeholder="Digite sua Senha" required />
            <button type="submit">Acessar</button>
          </form>
        </div>
      </div>
      <button id="goToHome" @click="goToHome">Volte para a Tela Inicial</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginOng',
    methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
  </script>
  
<style scoped>
* {
  --color-submit: #007BFF;
  --color-focus: #007BFF;

  --color-hover-btn: #0056b3;

  --color-login-area: #f8f9fa;
  --color-login: #fff;

  --color-text-btn:#fff;

  --color-form-input:#ccc;

  --color-font: black;
  --color-text-p-login:rgba(0, 0, 0, 0.45);

  --color-placeholder:rgba(0, 0, 0, 0.40);
}

#login-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--color-login-area);
    padding: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
#img-area img {
    width: 380px;
    margin-bottom: 2rem;
    cursor: pointer;
}
  
#login {
    background-color: var(--color-login);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 400px;
}
  
#text-login h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: var(--color-font);
    text-align: center;
}
  
#text-login p {
    font-size: 0.95rem;
    color: var(--color-text-p-login);
    margin-bottom: 1.5rem;
    font-weight: 500;
}
  
#form-login form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#form-login input,
#form-login button {
  width: 100%;
  box-sizing: border-box;
}

#form-login input {
  padding: 0rem 1rem;
  border: 1px solid var(--color-form-input);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  text-align: left;
  height: 50px;
}

#form-login input:focus {
  border-color: var(--color-focus);
  outline: none;
}

#form-login input::placeholder {
  text-align: left;
  color:var(--color-placeholder);
}

#form-login button {
  padding: 0.75rem 1rem;
  background-color: var(--color-submit);
  color: var(--color-text-btn);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

#form-login button:hover {
  background-color: var(--color-hover-btn);
}

#goToHome{
  border: none;
  background-color: transparent;
  color: var(--color-submit);
  cursor: pointer;
  margin-top: 2vh;
}

#goToHome:hover{
  color: var(--color-hover-btn);
}
</style>