<template>
    <div id="navigation">
      <div id="profile"></div>
      <div id="navigations"> </div>
    </div>
    <div id="Search">
      <div id="input-search"></div>
      <div id="button-search"></div>
    </div>
    <div id="Crud">

    </div>
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

<style>

</style>