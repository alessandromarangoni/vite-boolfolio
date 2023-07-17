<script>
import axios from 'Axios'
export default{
    name:'Appmain',
    data(){
        return{
            ApiUrl:'http://localhost:8000/api/projects',
        }
    },
    mounted(){
        axios.get(this.ApiUrl).then(resp => {
            let callToApi = resp.data;
            console.log(callToApi);
        })
    },
}
</script>
<template>
    <div>
        ciao 
    </div>
</template>