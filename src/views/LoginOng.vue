<template>
    <div id="login-area">
      <div id="img-area">
        <img src="@/assets/logo.svg" alt="Foto Tela de Login" />
      </div>
      <div id="login">
        <div id="text-login">
          <h1>Login</h1>
          <p>Preencha os campos abaixo com os seus dados de acesso.</p>
        </div>
        <div id="form-login">
          <form>
            <input type="email" placeholder="Digite o seu e-mail" required autocomplete="on" />
            <input type="password" placeholder="Digite sua senha" />
            <button type="submit">Acessar</button>
          </form>
        </div>
      </div>
      <a to="volte"></a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginOng'
  }
  </script>
  
<style scoped>
#login-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f8f9fa;
    padding: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
#img-area img {
    width: 380px;
    margin-bottom: 2rem;
}
  
#login {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}
  
#text-login h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #333;
}
  
#text-login p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
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
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  text-align: left;
  height: 50px;
}

#form-login input:focus {
  border-color: #007bff;
  outline: none;
}

#form-login input::placeholder {
  text-align: left;
}

#form-login button {
  padding: 0.75rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

#form-login button:hover {
  background-color: #0056b3;
}
</style>