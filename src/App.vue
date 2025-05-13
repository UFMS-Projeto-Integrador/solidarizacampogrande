<template>
  <div class="app-layout">
    <Navbar v-if="!$route.meta.hideNavbar" />

    <main class="content">
      <router-view />
    </main>
    
    <Footer v-if="!$route.meta.hideNavbar" />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html, body{
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: none;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1 0 auto;
}
</style>
