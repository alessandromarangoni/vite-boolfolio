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
    methods:{
       getApiData(){
        axios.get(this.ApiUrl).then(resp => {
           this.callToApi = resp.data;
            this.projects=this.callToApi.results
        })
       }
    },
    mounted(){
        this.getApiData()
    },
}
</script>
<template>
    <h1 class="text-6xl font-semibold text-center mt-16 text-white">All Project preview</h1>
    <div class="flex flex-wrap justify-between p-32">
        <template class="" v-for="(oggetto, index) in this.projects">
            <div class="w-96 m-8 p-6 rounded bg-amber-300">
                <div class="w-6 h-6 bg-blue-500 rounded-full mx-auto my-2 flex items-center"><div class="w-4 h-4 bg-blue-900 rounded-full mx-auto"></div></div>
                <h1 class="text-3xl font-semibold py-3">{{ oggetto.title}}</h1>
                <span>{{ oggetto.content }}</span>
            </div>
    </template>
    </div>
</template>