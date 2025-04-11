<template>
    <div id="Header">
        <div id="img-logo">
            <router-link to="/" style="text-decoration: none; color: inherit;">
               <img src="@/assets/logo.svg" alt="Logo Solidariza CG">
            </router-link>
        </div>
        <div id="nav">
            <router-link to="/">Inicio</router-link> 
            <router-link to="/Beneficiario">Beneficiário</router-link>
            <router-link to="/Doador">Doador</router-link>
            <router-link to="/Ongs">Ongs</router-link>
            <router-link to="/Contato">Contato</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Navbar',
    }

</script>

<style scoped>
*{
    padding: 0;
    margin: 0 50px;
    box-sizing: border-box;
}

#img-logo img {
    width: 360px;  
    height: auto;  
}

#Header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 50px;
    
    
}
#nav {
    background-color: #007BFF;
    padding: 15px;
    border-radius: 28px;
}

#nav a {
    display: inline-block;
    text-decoration: none;
    color: #333;
    font-family: sans-serif;
    font-size: 20px;
}

#nav a.router-link-active {
    font-weight: bold;
    color: yellow;
    padding: 0px 12px;
}
</style>