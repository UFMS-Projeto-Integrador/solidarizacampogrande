<template>
    <h2 id="title-project">O projeto</h2>
    <div id="project">
        <div id="img-projeto">
        <img src="@/assets/doacao2.avif" alt="Doação">
        </div>
        <div id="text-projeto">
            <p>O projeto Solidariza CG surgiu da constatação da dificuldade de
            comunicação entre instituições  que promovem ações sociais bre a população que deseja
            contribuir com essas iniciativas em Campo Grande, MS. A ausência de uma plataforma
            centralizada compromete a efetividade das campanhas solidárias e a visibilidade das
            entidades envolvidas. A ação busca desenvolver uma solução digital que conecte doadores,
            voluntários e instituições, promovendo maior engajamento comunitário e facilitando o
            acesso às informações sobre campanhas ativas.</p>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'Project'
    }


</script>

<style>
#title-project{
    font-family: sans-serif;
    color: #007BFF;
    margin-top: 40px;
}
#project {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
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
    box-sizing: border-box;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

#text-projeto p {
    text-align: justify;
    margin: 0;
    font-size: 18px;
    font-family: sans-serif;
}


</style>