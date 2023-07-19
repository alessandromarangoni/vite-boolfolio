<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            links:[
                {
                    nome:'prova'
                },
                {
                    nome:'home'
                },
                {
                    nome:'Contact us'
                },
                {
                    nome:'errore',
                    param: { code:'404' },
                }
            ]
        }
    },
}
</script>
<template>
        <div class="flex justify-around items-center h-32 bg-neutral-700">
            <div class="">
                    <template v-for="link in links">
                        <router-link :to="{ name: link.nome, params: link.param }" class="px-8 ms-4 rounded-xl text-3xl text-white bg-neutral-800" >{{ link.nome }}</router-link>
                    </template>
            </div>
            <div class="h-20 w-20 bg-red-500 rounded-full text-center">
                <span class="mt-5 block text-4xl">HI </span>
            </div>
        </div>
</template>