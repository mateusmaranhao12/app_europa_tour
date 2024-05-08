<template>
    <nav-usuario />
    <h1>ListaDeDesejos</h1>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import NavUsuario from './NavUsuario.vue'

@Options({

    components: {
        NavUsuario
    }

})

export default class ListaDeDesejos extends Vue {


}

</script>

<style lang="scss">
</style>