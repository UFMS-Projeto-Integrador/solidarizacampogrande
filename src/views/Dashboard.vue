<template>
    <h1>mudando isso aqui</h1>
</template>

<script>
import { getAuth } from 'firebase/auth';

export default {
  name: 'Dashboard',
  created() {
    const auth = getAuth();
    const user = auth.currentUser;

    // Se o usuário não estiver logado, redireciona para a página de login
    if (!user) {
      this.$router.push('/Login');
    }
  },
};
</script>

<style scoped>
</style>