<template>
    <div id="about">
        <div id="about-text">
        <h1>Solidariza CG</h1>
        <h3>Conectando Corações,<br> Transformando Vidas.</h3>
        </div>
        <div id="about-img">
            <img src="@/assets/doacao.avif" alt="logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
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
</style>