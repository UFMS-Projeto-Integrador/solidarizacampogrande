<template>
  <div id="home">
    
    <!-- Seção About -->
    <div id="about">
      <div id="about-text">
        <h3>Conectando Corações,<br> Transformando Vidas.</h3>
        <button id="btn-doe" @click="goToForm">
          Doe Agora!
        </button>
      </div>
      <div id="about-img">
        <img src="@/assets/doacao.avif" alt="logo">
      </div>
    </div>

    <!-- Seção Project -->
    <div id="project">
      <div id="img-projeto">
        <img src="@/assets/doacao2.avif" alt="Doação">
      </div>

      <div id="apresentacao-projeto">
        <div id="title-projeto">
          <h2 id="title-project">O projeto</h2>
        </div>
        <div id="text-projeto">
          <p>Solidariza CG surgiu da constatação da dificuldade de
            comunicação entre instituições que promovem ações sociais sobre a população que deseja
            contribuir com essas iniciativas em Campo Grande, MS. A ausência de uma plataforma
            centralizada compromete a efetividade das campanhas solidárias e a visibilidade das
            entidades envolvidas. A ação busca desenvolver uma solução digital que conecte doadores, voluntários e instituições, promovendo maior engajamento comunitário e facilitando o acesso às informações sobre campanhas ativas.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToForm() {
      this.$router.push('/Doador')
    }
  }
}
</script>

<style>
* {
  --color-submit: #007BFF;
  --color-title-h2: #007BFF;

  --color-hover-submit: #FFCC29;
  --color-text-btn: #FFCC29;

  --color-font: black;

  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#about {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 70px;
}

#about-text {
  font-family: sans-serif;
  font-size: 24px;
}

#btn-doe {
  background-color: var(--color-submit);
  margin-top: 40px;
  padding: 10px 40px;
  font-family: sans-serif;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  color: var(--color-text-btn);
  cursor: pointer;
  transition: 0.3s ease;
}

#btn-doe:hover {
  color: var(--color-submit);
  background-color: var(--color-hover-submit);
}

#title-project {
  font-family: sans-serif;
  color: var(--color-title-h2);
  margin-top: 40px;
}

#project {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  justify-content: space-around;
}

#img-projeto img {
  width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

#text-projeto {
  width: 500px;
  height: 320px;
  padding: 15px;
  padding-right: 3vw;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#text-projeto p {
  text-align: justify;
  text-indent: 3vw;
  margin: 0;
  font-size: 18px;
  font-family: sans-serif;
  color: var(--color-font);
}
</style>