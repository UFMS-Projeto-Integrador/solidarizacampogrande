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

        <div id="user-group">
          <h1 id="user-email">{{ emailUsuario }}</h1>
          <img id="logo-user" src="@/assets/login.png" alt="usuário" />
          <button id="button-logout" @click="handleLogout">Logout</button>
        </div>
      </header>

      <div id="busca">
        <div id="navigations">
          <h1>Filtrar por:</h1>
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
      </div>
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

#search {
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  justify-content: space-between;

}

#logo {
  max-width: 300px;
  max-height: 100px;
  margin-left: 15vh;
}

#user-group {
  display: flex;
  align-items: center;
  gap: 15px; /* distância entre email, ícone e botão */
}

#user-email {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1c1c1c;
  text-align: right;
}

#logo-user {
  width: 35px;
  height: 35px;
}

.main {
  flex: 1;
  width: 100vw;
}

#button-logout {
  text-align: center;
  background-color: white;
  font-size: 1.3rem;
  padding: 15px;
  color: #007bff;
  border: none;
  cursor:pointer;
  transition: all .6s ease;
  margin-right: 5vw;
}
#button-logout:hover{
  color: #FFCC29; 
}


#navigations {
  flex-direction: row;
  display: flex;
}

#navigations h1{
  margin-top: 20px;
  margin-left: 5vw;
  text-align: center;
}

#button {
  font-size: 1.4rem;
  padding: 0 10px;
  color: #007bff;
  border: none;
  cursor:pointer;
  background-color: white;
  transition: all .6s ease;
  margin-top: 20px;
}
#button:hover{
  color: #FFCC29;
}

#busca{
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-left:15vw;
}

#input-search {
  width: 300px;
  padding: 6px;
  border-radius: 10px 10px;
  border-color: #007bff;
  margin-top: 23px;
  margin-left:15vw;
  z-index:1;
}

#button-search {
  z-index:2;
  margin-top: 23px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 6px;
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  margin-left: -84px;
}
#crud {
  flex: 1;
  display: flex;
  justify-content: center;
  color: black;
  background-color: #fff;
  padding-top: 1.5rem;
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
  border: 2px solid #000;
  padding: 8px;
  text-align: left;
  word-wrap: break-word; /* quebra de palavras longas */
  white-space: normal;   /* permite a quebra de linha */
  max-width: 100px;      /* define uma largura máxima para forçar a quebra */
}

#crud th {
  background-color: #007bff;
  color: white;
}

                                  /*Teste de animação por linha*/

#crud tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.15);
}

/* Efeito de hover na linha para realce visual */
#crud tr:hover {
  background-color: rgba(19, 161, 243, 0.281);
}
</style>


