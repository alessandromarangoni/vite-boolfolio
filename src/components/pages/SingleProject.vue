<script>
import axios from 'axios'

    export default{ 
        name:'SinglePost',
        data() {
            return {
                ApiUrl: "http://localhost:8000/api/projects/",
                loading:false,
                loadingMessage:false,
                project:{}
            }
        },
        methods: {
            getApiData(id) {
            axios.get(this.ApiUrl + id ).then(resp => {
                this.loading=true;
                this.callToApi = resp.data;
                this.project = this.callToApi.results;
                console.log(this.ApiUrl + id )
                console.log(this.project)
            }).catch( err => {
                this.loading=false;
                console.log(err)
                this.loadingMessage = err.message;
                this.$router.push({name:'errore' , params: { code: 404 }})
            });
        },
        mounted() {
            this.getApiData($route.params.id);
        },
        },
    }
</script>
<template>

    <div class="w-96 m-8 p-6 rounded bg-amber-300" @click="this.getApiData($route.params.id);">
        {{ $route.params.id}}
    </div>
</template>

