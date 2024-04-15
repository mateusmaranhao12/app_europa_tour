<template>
    <NavIndex />
    <h1>Cadastro</h1>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import NavIndex from '@/components/NavIndex.vue'

@Options({

    components: {
        NavIndex
    }

})

export default class Cadastro extends Vue {

}

</script>