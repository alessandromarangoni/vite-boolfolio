<script>
  import axios from 'Axios' 
  import AppMain from './components/AppMain.vue'  
  import AppHeader from './components/AppHeader.vue'
  export default {
    components: {
      AppMain,
      AppHeader
    },
  }
</script>

<template>
  <AppHeader />

  <router-view></router-view>



</template>

<style scoped>
</style>
