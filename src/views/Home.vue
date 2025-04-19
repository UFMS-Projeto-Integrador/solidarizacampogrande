<template>
  <div id="home">
    
    <!-- Seção About -->
    <div id="about">
      <div id="about-text">
          <div id="about-btn">
              <h3>Conectando Corações,<br> Transformando Vidas.</h3>
              <button id="btn-doe" @click="goToForm">
                  Doe Agora!
              </button>
          </div>
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

<style scoped>
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
  padding: 10px 10px;
  margin-left:5vw;
  margin-right:5vw;
  margin-top:15vh;
  
}

#about-text {
  font-family: sans-serif;
  font-size: 1.5rem;
  margin-left:7vw;
}

#btn-doe {
  background-color: var(--color-submit);
  margin-top: 3vh;
  padding: 10px 65px;
  font-family: sans-serif;
  font-size: 1.4rem;
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

#btn-doe { /*Animação da borda*/
  background-color: var(--color-submit);
  color: var(--color-text-btn);
  border: none;
  animation: piscar-borda 2.5s infinite;
}

@keyframes piscar-borda {
  0% {
    box-shadow: 0 0 0 2px #007BFF;
  }
  50% {
    box-shadow: 0 0 0 8px transparent;
  }
  100% {
    box-shadow: 0 0 0 2px #007BFF;

  }
}

#btn-doe:hover { /*Animação da borda do hover*/
  border: none;
  animation: borda-hover 2.5s infinite;
}

@keyframes borda-hover {
  0% {
    box-shadow: 0 0 0 2px #FFCC29;
  }
  50% {
    box-shadow: 0 0 0 8px transparent;
  }
  100% {
    box-shadow: 0 0 0 2px #FFCC29;

  }
}

#title-project {
  font-family: sans-serif;
  color: var(--color-title-h2);
  margin-top: 40px;
  margin-left: 1vw;
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

/* ===================================== Media Query ================================================= */

@media (max-width: 767px) {
  #about {
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
  }

  #project {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    gap: 20px;
  }

  #about-text {
    font-family: sans-serif;
    font-size: clamp(1rem, 1.5vw + 0.8rem, 1.5rem); 
    text-align: center;
    margin:0;
    margin-top: 1vh;
    color:rgb(158, 40, 40);
  }

  #btn-doe {
    background-color: var(--color-submit);
    padding:10px 50px;
    font-family: sans-serif;
    font-size: clamp(1rem, 1.5vw + 1rem, 1.5rem);
    border: none;
    border-radius: 20px;
    color: var(--color-text-btn);
    margin: 10px;
  }
  #about-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
  }
  #about-img {
    display:none;
  }

  #title-project {
    font-family: sans-serif;
    color: var(--color-title-h2);
    margin: 0;
    margin-top:clamp(15px, 20vh, 55px);
    font-size: clamp(1.5rem, 2.2vw + 1rem, 5rem);
    font-weight: 700;
  }
  #text-projeto {
    width: clamp(350px, 60vw, 850px);
    height: clamp(350px, 80vw, 850px);
    overflow: hidden;
  }
  #text-projeto p {
    text-align: justify;
    text-indent: 5vw;
    font-size: clamp(0.8rem, 1.2vw + 0.8rem, 1.5rem);
    font-family: sans-serif;
    color: var(--color-font);
    margin: 0;
    margin-top:clamp(-15px, -25vh, -35px);
    padding: 0 5px;
  }

  #img-projeto {
    display: none;
  }

  #footer {
    background-color: var(--color-footer);
    color: var(--color-font);
    text-align: center;
    padding: 1vh;
    font-size: clamp(0.8rem, 1.2vw + 0.8rem, 1.5rem);
    font-weight: 500;
    width: 100%;
  }
}

</style>