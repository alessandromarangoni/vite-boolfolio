<script>
import axios from 'axios';

export default {
  name: 'SinglePost',
  data() {
    return {
      ApiUrl: "http://localhost:8000/api/projects/",
      imgPath:'http://127.0.0.1:8000/storage/',
      loading: '',
      loadingMessage: false,
      project: {},
      action:''
    }
  },
  methods: {
    prova() {
      console.log('ciao');
    },
    getApiData(id , page) {
      axios
        .get(this.ApiUrl + id)
        .then((resp) => {
          this.loading = true;
          this.callToApi = resp.data;
          this.project = this.callToApi.results;
          this.loading = false;
          console.log(this.ApiUrl + id)
          console.log(this.project)
        })
        .catch((err) => {
          this.loading = false;
          console.log(err)
          this.loadingMessage = err.message;
          this.$router.push({ name: 'errore', params: { code: 404 } })
        });
    }
  },
  mounted() {
    this.getApiData(this.$route.params.id); // Corretta sintassi per accedere a $route.params.id
  },
  beforeRouteUpdate(to, from){
        if(this.action == 'next' ){
            this.getApiData(Number(this.$route.params.id) +1)
        }
        else{
            this.getApiData(Number(this.$route.params.id) -1 )
        }
  }
}


</script>
<template>
    <div v-if="this.loading === false">
        <div class="w-96 m-8 p-6 rounded bg-amber-300">
            {{ $route.params.id}}
            <div class="w-6 h-6 bg-blue-500 rounded-full mx-auto my-2 flex items-center">
                <div class="w-4 h-4 bg-blue-900 rounded-full mx-auto"></div>
            </div>
            <h2 class="text-4xl text-center pt-8">
                {{ this.project.title}}
            </h2>
            <p class="text-center mx-auto w-56">
                {{ this.project.content}}
            </p>
            <img :src="this.imgPath + this.project.image" alt="" class="rounded-2xl">

            <p class="text-center pt-3 mx-auto w-56 font-bold">
                project type: {{ this.project.type.name}}
            </p>

            <span class="text-center inline-block pt-3 font-bold">
                project tech:
            </span>

            <span class="text-center inline pt-3 mx-auto w-56 font-bold" v-for="item in this.project.tecnologies">
                {{ item.name }},
            </span>

            <router-link :to="{ name:'single-project', params:{ id:this.project.id + 1 }}" > <span @click="this.action='next'" class="mx-4">next project</span> </router-link>
            <router-link :to="{ name:'single-project', params:{ id:this.project.id + -1 }}"  >  <span @click="this.action='prev'">prev project</span> </router-link>
        </div>
    </div>
</template>

