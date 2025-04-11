<template>
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
</template>

<script>
    export default {
        name: 'About',
        methods:{
            goToForm(){
                this.$router.push('/Doador')
            }
        }
    }
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#about{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

#about-text{
    font-family: sans-serif;
    font-size: 24px;
}

#btn-doe{
    background-color: #007BFF;
    margin-top: 40px;
    padding: 10px 40px;
    font-family: sans-serif;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    color: yellow;
}

#btn-doe:hover{
    color: #007BFF;
    background-color: yellow;
}
</style>