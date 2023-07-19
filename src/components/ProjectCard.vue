<script>
import AppMain from './AppMain.vue'
    export default{ 
        name:'ProjectCard',
        props: {
            AllProjects:Object
        }
        
    }
</script>
<template>

    <router-link :to="'project/'+ this.AllProjects.id">
        <div class="w-96 m-8 p-6 rounded bg-amber-300">
        
        <div class="w-6 h-6 bg-blue-500 rounded-full mx-auto my-2 flex items-center">
            <div class="w-4 h-4 bg-blue-900 rounded-full mx-auto"></div>
        </div>

        <h2 class="text-4xl text-center pt-8">
            {{ this.AllProjects.title}}
        </h2>
        <p class="text-center mx-auto w-56">
            {{ this.AllProjects.content}}
        </p>
        <img :src="'http://127.0.0.1:8000/storage/' + this.AllProjects.image" alt="" class="rounded-2xl">

        <p class="text-center pt-3 mx-auto w-56 font-bold">
           project type: {{ this.AllProjects.type.name}}
        </p>
    </div>
    </router-link>

</template>


