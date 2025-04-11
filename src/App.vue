<template>
  <div class="app-layout">
    <Navbar />

    <main class="content">
      <router-view />
    </main>

    <Footer />
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
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
