<template>
    <div id="Header">
        <div id="img-logo">
            <router-link to="/" style="text-decoration: none; color: inherit;">
               <img src="@/assets/logo.svg" alt="Logo Solidariza CG">
            </router-link>
        </div>
        <div id="nav-container">
            <div id="nav">
                <router-link to="/">Inicio</router-link> 
                <router-link to="/Beneficiario">Beneficiário</router-link>
                <router-link to="/Doador">Doador</router-link>
                <router-link to="/Ongs">Ongs</router-link>
                <router-link to="/Contato">Contato</router-link>
            </div>
            <router-link to="/Login" style="text-decoration: none; color: inherit;">
                <img src="@/assets/login.png" alt="Foto login" id="foto-login">
            </router-link>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#img-logo img {
    width: 55vh;  
    height: auto;  
}

#Header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    padding: 2vh 22vh; 
}

#nav-container {
    display: flex;
    align-items: center;
    gap: 20px; 
}

#nav {
    background-color: #007BFF;
    padding: 10px;
    border-radius: 28px;
}

#nav a {
    display: inline-block;
    text-decoration: none;
    color: #333;
    font-family: sans-serif;
    font-size: 1.3rem;
    margin: 1vh;
}

#nav a.router-link-active {
    font-weight: bold;
    color: yellow;
    padding: 0px 12px;
}

#foto-login {
    width: 30px;
    cursor: pointer; 
}
</style>