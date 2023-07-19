<script>
import axios from 'Axios'
import ProjectCard from './ProjectCard.vue';

export default{
    name: "Appmain",
    components: { 
        ProjectCard 
    },
    data() {
        return {
            ApiUrl: "http://localhost:8000/api/projects",
            callToApi: "",
            projects: [],
            loadingMessage:''
        };
    },
    methods: {
        getApiData() {
            axios.get(this.ApiUrl).then(resp => {
                this.callToApi = resp.data;
                this.projects = this.callToApi.results;
                console.log(this.projects)
            }).catch( err => {
                this.loading=false;
                console.log(err)
                this.loadingMessage = err.message;
                this.$router.push({name:'errore' , params: { code: 404 }})
            });
        }
    },
    mounted() {
        this.getApiData();
    },
}
</script>
<template>
     <h1 class="text-6xl font-semibold text-center mt-16 text-white">All Project preview</h1>
    <div class="flex flex-wrap justify-around">
        <template v-for="(oggetto, index) in projects">
        <ProjectCard :AllProjects="oggetto"></ProjectCard>
    </template>
    </div>
</template>