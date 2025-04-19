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
    padding: 2vh 6vw 2vh 10vw;
    position:fixed;
}

#header.scrolled {                      /*navBar --> Sombra ao scrollar a página*/
    background-color:var(--color-background-nav);
    box-shadow: 0 2px 6px var(--color-box-shadow-nav);
}

#nav-container {
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



@media (max-width: 767px) {
  #header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2vh 0;
    background-color: var(--color-background-nav);
  }

  #img-logo img {
    width: clamp(150px,30vh, 450px);
    height: auto;
    margin: 0;
    margin-top:0.5vh;
  }

  #nav {
    background-color: var(--color-nav);
    padding: 10px;
    border-radius: 28px;
    font-weight: 100;
    margin-top: 10vh;
    width: 90%;
    text-align: center;
   font-size: 0.8rem;
  }

  #foto-login {
    width: clamp(30px, 15vw,50px);
    height: clamp(30px, 15vh,50px);
    cursor: pointer;
    margin-top: -15;
    margin-right: 7vw;
  }

}


</style>
