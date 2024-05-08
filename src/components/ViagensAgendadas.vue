<template>
    <nav-usuario />
    <h1>ViagensAgendadas</h1>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import NavUsuario from './NavUsuario.vue'

@Options({

    components: {
        NavUsuario
    }

})

export default class ViagensAgendadas extends Vue {


}

</script>

<style lang="scss">
</style>