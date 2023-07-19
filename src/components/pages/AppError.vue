<script>
    export default{ 
        name:'AppError',
    }
</script>
<template>
    <div>
        ciao io sono un errore
        {{ $route.params.code }}
    </div>
</template>