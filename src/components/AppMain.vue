<script>
import axios from 'Axios'
export default{
    name:'Appmain',
    data(){
        return{
            ApiUrl:'http://localhost:8000/api/projects',
            callToApi:'',
            projects:[],
        }
    },
    mounted(){
        axios.get(this.ApiUrl).then(resp => {
           this.callToApi = resp.data;
            console.log(this.callToApi); 
            this.projects=this.callToApi.results
            console.log(this.projects)
        })
    },
}
</script>
<template>
    <h1 class="text-4xl font-bold text-center mt-16">All Project preview</h1>
    <div class="flex flex-wrap justify-between p-32">
        <template class="" v-for="(oggetto, index) in this.projects">
            <div class="w-96 p-8">
                <h1 class="text-3xl font-semibold">{{ oggetto.title}}</h1>
                <span>{{ oggetto.content }}</span>
            </div>
    </template>
    </div>
</template>