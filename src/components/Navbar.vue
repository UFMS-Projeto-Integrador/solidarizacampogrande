<template>
    <div id="Header">
      <div id="img-logo">
        <router-link to="/" style="text-decoration: none; color: inherit;">
          <img src="@/assets/logo.svg" alt="Logo Solidariza CG">
        </router-link>
      </div>
 
      <button class="hamburger" @click="toggleMenu">
        &#9776;
      </button>
  
      <div v-if="menuAberto" class="menu-overlay" @click="toggleMenu"></div>
  
      <div :class="['nav-container', { open: menuAberto }]">
        <div id="nav">
          <router-link to="/" @click="toggleMenu">Início</router-link> 
          <router-link to="/Beneficiario" @click="toggleMenu">Beneficiário</router-link>
          <router-link to="/Doador" @click="toggleMenu">Doador</router-link>
          <router-link to="/Ongs" @click="toggleMenu">Ongs</router-link>
          <router-link to="/Contato" @click="toggleMenu">Contato</router-link>
        </div>
        <router-link to="/Login" style="text-decoration: none; color: inherit;">
          <img src="@/assets/login.png" alt="Foto login" id="foto-login">
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        menuAberto: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuAberto = !this.menuAberto;
      }
    }
  }
  </script>
  
  <style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  #Header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    padding: 2vh 5vh; 
    position: relative;
  }
  
  #img-logo img {
    width: 55vh;  
    height: auto;  
  }
  
  .hamburger {
    display: none;
    font-size: 30px;
    background: none;
    border: none;
    cursor: pointer;
    color: #007BFF;
    z-index: 1001;
  }
  
  .nav-container {
    display: flex;
    align-items: center;
    gap: 20px; 
  }
  
  #nav {
    background-color: #007BFF;
    padding: 10px;
    border-radius: 28px;
  }
  
  #nav a {
    display: inline-block;
    text-decoration: none;
    color: #333;
    font-family: sans-serif;
    font-size: 1.3rem;
    margin: 1vh;
  }
  
  #nav a.router-link-active {
    font-weight: bold;
    color: yellow;
    padding: 0px 12px;
  }
  
  #foto-login {
    width: 30px;
    cursor: pointer; 
  }
  
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
  
  @media (max-width: 574px) {
    .hamburger {
      display: block;
    }
  
    .nav-container {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background-color: white;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 80px;
      gap: 0;
      transition: right 0.3s ease;
      z-index: 1000;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    }
  
    .nav-container.open {
      right: 0;
    }
  
    #nav {
      flex-direction: column;
      width: 100%;
      border-radius: 0;
      background-color: transparent;
      padding: 0;
    }
  
    #nav a {
      margin: 15px 0;
      color: #333;
      font-size: 1.5rem;
      width: 100%;
      text-align: center;
      padding: 10px;
    }
  
    #nav a.router-link-active {
      background-color: #007BFF;
      color: yellow;
      border-radius: 5px;
    }
  
    #foto-login {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
    }
  
    #img-logo img {
      width: 30vh;  
      height: auto;  
    }
    .login-link {
        display: none;
    }
  }
  </style>