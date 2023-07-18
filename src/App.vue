<script>
  import AppMain from './components/AppMain.vue'
  import axios from 'Axios' 
  export default {
    components: {
      AppMain,
    },
  }
</script>

<template>
  <!-- questo header simula un appheader che ci fa navigare tra le page -->
  <header> 
    menu
  </header>

  <router-view></router-view>



</template>

<style scoped>
</style>
