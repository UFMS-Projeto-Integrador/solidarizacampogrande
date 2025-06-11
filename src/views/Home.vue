<template>
  <div id="home">
    
    <!-- Seção About -->
    <div id="about">
      <div id="about-text">
          <div id="about-btn">
              <h3>Conectando Corações,<br> Transformando Vidas.</h3>
              <button id="btn-ajuda" @click="FormBeneficiaries">
                  Solicitar Ajuda!
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
    <div id="div-doe">
      <button id="btn-doe" @click="goToForm">
                 Doe Agora!
        </button>
    </div>
    
    <div id="nosso-time">
      <h2 id="time-h2">Conheça nosso time</h2>
      <div id="membros">
        <div id="membro">
        <img id="user" src="@/assets/Henrique.png" alt="*******">
        <p id="nome-membro">Henrique Pereira</p>
        <p>Liderando o time de desenvolvimento, designando tarefas e realizando grande parte também, atuando tanto no Front-End, bem como no Back-End.</p>
        <p id="funcao-membro">Tech Lead</p>
        <div id="redes">
          <a href="https://www.linkedin.com/in/henrique-jose-pereira/" target="_blank">
            <Icon icon="mdi:linkedin" width="24" height="24" color="#007BFF" />
          </a>
          <a href="https://github.com/HenriqueJP-Tech" target="_blank">
            <Icon icon="mdi:github" width="24" height="24" color="#007BFF"/>
          </a>
          <a href="https://instagram.com/tech.rique" target="_blank">
            <Icon icon="mdi:instagram" width="24" height="24" color="#007BFF" />
          </a>
        </div>
      </div>

      <div id="membro">
        <img id="user" src="@/assets/Luis.jpg" alt="*******">
        <p id="nome-membro">Luis Eduardo</p>
        <p>Realizando as tarefas de desenvolvimento, sendo elas para desktop, bem como, para mobile, focando sempre na qualidade do projeto.</p>
        <p id="funcao-membro">Web Developer</p>
        <div id="redes">
          <a href="#" target="_blank">
            <Icon icon="mdi:linkedin" width="24" height="24" color="#007BFF" />
          </a>
          <a href="https://github.com/Luis-Edu01" target="_blank">
            <Icon icon="mdi:github" width="24" height="24" color="#007BFF"/>
          </a>
          <a href="https://www.instagram.com/luis_edu.le01/" target="_blank">
            <Icon icon="mdi:instagram" width="24" height="24" color="#007BFF" />
          </a>
        </div>
      </div>

      <div id="membro">
        <img id="user" src="@/assets/Wesley.jpg" alt="*******">
        <p id="nome-membro">Wesley</p>
        <p>Criação das artes da plataforma, bem como a elaboração dos protótipos a serem desenvolvidos pelo time de desenvolvimento da equipe.</p>
        <p id="funcao-membro">Designer</p>
        <div id="redes">
          <a href="#" target="_blank">
            <Icon icon="mdi:linkedin" width="24" height="24" color="#007BFF" />
          </a>
          <a href="#" target="_blank">
            <Icon icon="mdi:github" width="24" height="24" color="#007BFF"/>
          </a>
          <a href="#" target="_blank">
            <Icon icon="mdi:instagram" width="24" height="24" color="#007BFF" />
          </a>
        </div>
      </div>

      <div id="membro">
        <img id="user" src="@/assets/Renan.jpg" alt="*******">
        <p id="nome-membro">Renan Ramiro</p>
        <p>Atua garantindo que a equipe de desenvolvimento esteja focada em entregar a melhor plataforma para os usuários finais utilizarem.</p>
        <p id="funcao-membro">Product Owner</p>
        <div id="redes">
          <a href="https://www.linkedin.com/in/renan-ramiro-b3525b119/" target="_blank">
            <Icon icon="mdi:linkedin" width="24" height="24" color="#007BFF" />
          </a>
          <a href="https://github.com/RenanRamiro" target="_blank">
            <Icon icon="mdi:github" width="24" height="24" color="#007BFF"/>
          </a>
          <a href="https://www.instagram.com/renanramiro7/" target="_blank">
            <Icon icon="mdi:instagram" width="24" height="24" color="#007BFF" />
          </a>
        </div>
      </div>

      <div id="membro">
        <img id="user" src="@/assets/Nayane.jpg" alt="*******">
        <p id="nome-membro">Nayane Rios</p>
        <p>Responsável por criar textos persuasivos para atrair usuários, engajar e fazer com que as informações cheguem de forma clara e objetiva.</p>
        <p id="funcao-membro">Copywriter</p>
        <div id="redes">
          <a href="#" target="_blank">
            <Icon icon="mdi:linkedin" width="24" height="24" color="#007BFF" />
          </a>
          <a href="https://github.com/NayaneRios" target="_blank">
            <Icon icon="mdi:github" width="24" height="24" color="#007BFF"/>
          </a>
          <a href="#" target="_blank">
            <Icon icon="mdi:instagram" width="24" height="24" color="#007BFF" />
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'Home',
  methods: {
    goToForm() {
      this.$router.push('/Doador')
    },
    FormBeneficiaries() {
        this.$router.push('/Beneficiario')
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
  margin-left: 7vw;
}

#div-doe{
  margin-left: 69vw;
}

#btn-doe, #btn-ajuda {
  background-color: var(--color-submit);
  margin-top: 3vh;
  padding: 10px 65px;
  font-family: sans-serif;
  font-size: clamp(1.2rem, 1.5vw + 1.2rem,1.4rem);
  border: none;
  border-radius: 20px;
  color: var(--color-text-btn);
  cursor: pointer;
  transition: 0.3s ease;
}

#btn-doe{
  margin-top: 0.;
}

#btn-doe:hover, #btn-ajuda:hover {
  color: var(--color-submit);
  background-color: var(--color-hover-submit);
}

#btn-doe, #btn-ajuda{ /*Animação da borda*/
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

#btn-doe:hover, #btn-ajuda:hover { /*Animação da borda do hover*/
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
  margin-bottom:50px;
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

#nosso-time{
  width: 100vw;
  height: 50vh;
  margin-top: 20vh;
  margin-bottom: 20vh;
  justify-content: center;
  text-align: center;
  display:flex;
  flex-direction: column;
  gap: 40px;
  font-family: sans-serif;
}

#nosso-time h2{
  text-align: center;
  font-size: 2rem;
  color: black;
  margin: 15px;
}

#membros{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#membro{
  width: 250px;
  height: 450px;
  padding-top: 2vh;
  margin: 15px;
  background-color: #D2F4FE;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#membro p{
  text-align: justify;
  padding: 0 2vh;
  margin: 2vh;
}

#user{
  width: 110px;
  height: 110px;
  margin-bottom: 10px;
  border-radius: 150px;
}

#funcao-membro{
  margin:15px;
  font-weight: bolder;
}
#nome-membro{
  margin:15px;
  font-weight: bolder;
}

#redes{
  display: flex;
  justify-content: center;
  gap: 22px;
}
/* =================================== Media Query Mobile ============================================ */

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
    margin: 0;
    margin-top: 1vh;
  }

  #btn-ajuda, #btn-doe {
    background-color: var(--color-submit);
    padding: 10px 50px;
    font-family: sans-serif;
    font-size: clamp(1rem, 1.5vw + 1rem, 1.5rem);
    border: none;
    border-radius: 20px;
    color: var(--color-text-btn);
    margin: 10px;
  }

  #about-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  #about-img {
    display: none;
  }

  #title-project {
    font-family: sans-serif;
    color: var(--color-title-h2);
    margin: 0 0 20px 0;
    margin-top: clamp(15px, 20vh, 55px);
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
    margin-top: clamp(-15px, -25vh, -35px);
    padding: 0 5px;
  }

  #div-doe {
    text-align: center;
    margin: 0;
    margin-bottom: 15px;
    margin-top: -30px;
  }

  #img-projeto {
    display: none;
  }
  #nosso-time {
  height: auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
  gap: 20px;
  padding: 0 10px;
}
#time-h2{
  font-size: 1rem;
}

#membros {
  flex-direction: column;
  gap: 25px;
}

#membro {
  width: 100%;
  max-width: 280px;
  height: auto;
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