<template>
  <section v-if="carregando" id="layout-carregando">
    <p>Carregando...</p>
  </section>
  
  <section v-else id="layout">
    <aside id="navigation">
      <div id="profile">
        <img id="logo" src="@/assets/logo.svg" alt="logo" />
      </div>
      <div id="navigations">
        <button id="button">Beneficiario</button>
        <button id="button">Doador</button>
        <button id="button">ONG</button>
      </div>
      <div>
        <button id="button-logout" @click="handleLogout">Logout</button>
      </div>
    </aside>

    <div class="main">
      <header id="search">
        <div>
          <input
            id="input-search"
            type="text"
            placeholder="Buscar: "
            maxlength="15"
          />
        </div>
        <div>
          <button id="button-search">Pesquisa</button>
        </div>
        <div id="user">
          <h1>{{ emailUsuario }}</h1>
        </div>
        <img id="logo-user" src="@/assets/login.png" alt="usuário" />
      </header>

      <div id="crud">
        <h1>Tabelas aqui</h1>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "Dashboard",
  data() {
    return {
      emailUsuario: "",
      carregando: true,
      unsubscribe: null
    };
  },
  methods: {
   async handleLogout() {
      try {
        const auth = getAuth();
        await signOut(auth); // Desloga o usuário
        this.$router.push({ name: 'LoginOng' }); // Redireciona para LoginOng
      } catch (error) {
        console.error("Erro ao fazer logout:", error);
        alert("Ocorreu um erro ao tentar sair. Por favor, tente novamente.");
      }
    }
  },
  async mounted() {
    const auth = getAuth();
    
    // Usamos setTimeout para evitar problemas de hidratação
    setTimeout(() => {
      this.unsubscribe = onAuthStateChanged(auth, (usuario) => {
        this.carregando = false;
        
        if (!usuario) {
          this.$router.push("/login");
          return;
        }
        
        this.emailUsuario = usuario.email;
      });
    }, 100);
  },
  beforeUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#layout {
  display: flex;
  height: 100vh;
}
#navigation {
  width: 20vw;
  background-color: #007bff;
  display: flex;
  flex-direction: column;
}

#profile {
  background-color: #f5f3f3;
  border-bottom: 2px solid black;
}

#logo {
  width: 20vw;
  height: 15vh;
}

#navigations {
  background-color: #007bff;
  flex-direction: column;
  display: flex;
  gap: 5px;
  margin-top: 1px;
}

#button {
  font-size: 1.3rem;
  padding: 5px;
  color: white;
  background-color: #007bff;
  border: none;
  border: 0.5px solid white;
}
#button:hover {
  background-color: #ffcc29;
}

#button-logout {
  margin-top: 58.4vh;
  text-align: center;
  font-size: 1.3rem;
  width: 20vw;
  padding: 5px;
  background-color: #007bff;
  color: white;
  border: 0.5px solid white;
}
#button-logout:hover {
  background-color: #ffcc29;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#search {
  height: 15.9vh;
  background-color: #f5f3f3;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: black;
  flex-direction: row;
  border-bottom: 2px solid black;
}
#input-search {
  padding: 6px;
  margin-left: 25vw;
  border-radius: 10px 0 0 10px;
}
#button-search {
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 6px;
  margin-right: 15vw;
  border: none;
  border-radius: 1px 10px 10px 1px;
}
#user {
  padding: 35px 10px;
  text-align: center;
  border-left: 2px solid black;
}

#logo-user {
  width: 3vw;
  height: 6vh;
}

#crud {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-left: 2px solid black;
  background-color: #fff;
}
</style>
