<script>
import axios from 'Axios'
export default{
    name:'Appmain',
    data(){
        return{
            ApiUrl:'http://localhost:8000/api/projects',
            callToApi:'',
            projects:[]
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
    <div>
        <template v-for="(oggetto, index) in this.projects" :key="index">
            <div>
                <h1>{{ oggetto.title}}</h1>
                {{ oggetto.content }}
            </div>
        </template>
    </div>
</template>