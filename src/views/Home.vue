<template>
    <About />
    <Project />
</template>

<script>
import About from '@/components/About.vue';
import Project from '@/components/Project.vue';


export default {
  name: 'Home', 
  components: {
    About, 
    Project
  }
}
</script>

<style>

</style>