<template>
  <header id="header" :class="{ scrolled: isScrolled }">
      <div id="img-logo">
          <router-link to="/" style="text-decoration: none; color: inherit;">
             <img src="@/assets/logo.svg" alt="Logo Solidariza CG">
          </router-link>
      </div>
      
      <button id="hamburger-btn" @click="toggleMenu" v-if="isMobile">
          <span></span>
          <span></span>
          <span></span>
      </button>
      
      <div id="nav-container" :class="{ 'mobile-active': menuActive }">
          <div id="nav">
              <router-link to="/" @click="closeMenu">Inicio</router-link> 
              <router-link to="/Beneficiario" @click="closeMenu">Beneficiário</router-link>
              <router-link to="/Doador" @click="closeMenu">Doador</router-link>
              <router-link to="/Ongs" @click="closeMenu">Ongs</router-link>
              <router-link to="/Contato" @click="closeMenu">Contato</router-link>
          </div>
          <!-- Esconde o login em mobile -->
          <router-link to="/Login" style="text-decoration: none; color: inherit;" v-if="!isMobile">
              <img src="@/assets/login.png" alt="Foto login" id="foto-login">
          </router-link>
      </div>
  </header>
</template>

<script>
  export default {
      name: 'Navbar',     
      data() {                            
          return {                            
              isScrolled: false,
              menuActive: false,
              isMobile: false
          }
      },
      mounted() {
          window.addEventListener('scroll', this.handleScroll);
          this.checkScreenSize();
          window.addEventListener('resize', this.checkScreenSize);
      },
      beforeUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
          window.removeEventListener('resize', this.checkScreenSize);
      },
      methods: {
          handleScroll() {
              this.isScrolled = window.scrollY > 0;
          },
          toggleMenu() {
              this.menuActive = !this.menuActive;
          },
          closeMenu() {
              if (this.isMobile) {
                  this.menuActive = false;
              }
          },
          checkScreenSize() {
              this.isMobile = window.innerWidth <= 767;
              if (!this.isMobile) {
                  this.menuActive = false;
              }
          }
      }
  }               
</script>

<style scoped>
* {
  --color-nav: #007BFF;
  --color-font: black;
  --color-active: #FFCC29;
  --color-background-nav: #fff;
  --color-box-shadow-nav: rgba(0, 0, 0, 0.1);
  --color-hamburger: #333;

  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#img-logo img {
  width: 55vh;  
  height: auto;
}
#header {
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  padding: 2vh 6vw 2vh 10vw;
  position: fixed;
  background-color: var(--color-background-nav);
  z-index: 1000;
}

#header.scrolled {
  background-color: var(--color-background-nav);
  box-shadow: 0 2px 6px var(--color-box-shadow-nav);
  height: 13vh;
}

#nav-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 10vw;
  position: fixed;
  right: 5vw;
  transition: all 0.3s ease;
}

#nav {
  background-color: var(--color-nav);
  padding: 10px;
  border-radius: 28px;
  font-weight: 500;
}

#nav a {
  display: inline-block;
  text-decoration: none;
  color: var(--color-font);
  font-family: sans-serif;
  font-size: 1.2rem;
  margin: 1vh;
}

#nav a.router-link-active {
  font-weight: bold;
  color: var(--color-active);
  padding: 0px 12px;
}

#foto-login {
  width: 30px;
  cursor: pointer; 
}

#hamburger-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  position: fixed;
  right: 5vw;
  z-index: 1001;
}

#hamburger-btn span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #007BFF;
  margin: 5px 0;
  transition: all 0.3s ease;
}

@media (max-width: 767px) {
  #header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      top: 0;
      left: 0;
      padding: 2vh 12vw;
      background-color: var(--color-background-nav);
  }

  #img-logo img {
      width: clamp(150px, 30vh, 450px);
      height: auto;
      margin: 0;
  }

  #hamburger-btn {
      display: block;
  }

  #nav-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.95);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 0;
      right: 0;
      transform: translateX(100%);
      transition: transform 0.3s ease;
  }

  #nav-container.mobile-active {
      transform: translateX(0);
  }

  #nav {
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0;
      margin-top: 0;
      font-size: 1.5rem;
  }

  #nav a {
      margin: 2vh 0;
      font-size: 1.5rem;
  }

  #foto-login {
      display: none;
  }
}
</style>