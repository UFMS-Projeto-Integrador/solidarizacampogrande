<template> 
    <div id="footer">
        <footer>
            <p>&copy; 2025 Plataforma de Doações - Todos os direitos reservados.</p>
        </footer>
    </div>
</template>

<script>
    export default{
        name: 'Footer'
    }
</script>

<style scoped>
*{
    --color-footer: #007BFF;
    --color-font: black;
}
#footer {
    background-color: var(--color-footer);
    color: var(--color-font);
    text-align: center;
    padding: 1vh;
    font-size: 1.2rem;
    font-weight: 500;
}
</style>