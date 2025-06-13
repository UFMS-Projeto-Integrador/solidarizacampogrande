<template>
  <section v-if="carregando" id="layout-carregando">
    <p>Carregando...</p>
  </section>
  
  <section v-else id="layout">

    <div class="main">
      <header id="search">
      <div id="profile">
        <img id="logo" src="@/assets/logo.svg" alt="logo" />
      </div>

      <div id="navigations">
        <button id="button">Beneficiario</button>
        <button id="button">Doador</button>
        <button id="button">ONG</button>
      </div>
        <div>
          <input
            id="input-search"
            type="text"
            placeholder="Buscar: "
            maxlength="15"
          />
        </div>
        <div>
          <button id="button-search">Pesquisar</button>
        </div>
        <div id="user">
          <h1>{{ emailUsuario }}</h1>
        </div>
        <img id="logo-user" src="@/assets/login.png" alt="usuário" />

      <div>
        <button id="button-logout" @click="handleLogout">Logout</button>
      </div>

      </header>

      <div id="crud">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>CEP</th>
                <th>Endereço</th>
                <th>Bairro</th>
                <th>Referência</th>
                <th>Família</th>
                <th>Necessidades</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="b in beneficiarios" :key="b.id">
                <td>{{ b.nome }}</td>
                <td>{{ b.cpf }}</td>
                <td>{{ b.email }}</td>
                <td>{{ b.tel }}</td>
                <td>{{ b.cep }}</td>
                <td>{{ b.endereco }}</td>
                <td>{{ b.bairro }}</td>
                <td>{{ b.referencia }}</td>
                <td>{{ b.familiares }}</td>
                <td>{{ b.necessidades }}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { db } from '@/firebase' // ajuste o caminho se necessário
import { collection, getDocs } from 'firebase/firestore'

export default {
  name: "Dashboard",
  data() {
    return {
      beneficiarios: [],
      emailUsuario: "",
      carregando: true,
      unsubscribe: null
    };
  },
  methods: {
    async handleLogout() {
      try {
        const auth = getAuth();
        await signOut(auth);
        this.$router.push({ name: 'LoginOng' });
      } catch (error) {
        console.error("Erro ao fazer logout:", error);
        alert("Ocorreu um erro ao tentar sair. Por favor, tente novamente.");
      }
    },

    async carregarBeneficiarios() {
      try {
        const querySnapshot = await getDocs(collection(db, "beneficiariosdb"));
        this.beneficiarios = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error("Erro ao carregar beneficiários:", error);
        alert("Erro ao carregar dados dos beneficiários.");
      }
    }
  },

  async mounted() {
    const auth = getAuth();

    setTimeout(() => {
      this.unsubscribe = onAuthStateChanged(auth, async (usuario) => {
        this.carregando = false;

        if (!usuario) {
          this.$router.push("/login");
          return;
        }

        this.emailUsuario = usuario.email;

        // 🔥 Carrega os beneficiários após autenticação
        await this.carregarBeneficiarios();
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


#logo {
  width: 20vw;
  height: 15vh;
  margin-right: 5vh;
}

#navigations {
  flex-direction: row;
  display: flex;
  margin-top: 1px;
}

#button {
  font-size: 1.5rem;
  padding: 15px;
  color: #007bff;
  border: none;
  cursor:pointer;
}
#button:hover{
  color: #FFCC29;
}

#button-logout {
  text-align: center;
  background-color: #f5f3f3;
  font-size: 1.3rem;
  padding: 15px;
  color: #007bff;
  border: none;
  cursor:pointer;
}
#button-logout:hover{
  color: #FFCC29; 
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#search {
  background-color: #f5f3f3;
  display: flex;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

#input-search {
  padding: 6px;
  margin-left: 5vw;
  border-radius: 10px 0 0 10px;
}

#button-search {
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 6px;
  margin-right: 5vw;
  border: none;
  border-radius: 0 10px 10px 0;
  
}
#user {
  padding: 25px 10px;
  text-align: center;
  
}

#logo-user {
  width: 3vw;
  height: 6vh;
  margin: 0 15px;
}
#crud {
  flex: 1;
  display: flex;
  justify-content: center;
  color: black;
  border-left: 2px solid black;
  background-color: #fff;
  padding-top: 2.5rem;
}

#crud table {
  width: 90%;
  height: 15%;
  border-collapse: collapse;
  background-color: white;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
}

#crud th, #crud td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

#crud th {
  background-color: #007bff;
  color: white;
}
</style>


