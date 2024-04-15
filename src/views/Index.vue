<template>
    <nav-index></nav-index>
    <h1>Index</h1>
</template>

<script lang="ts">

    import { Options, Vue } from 'vue-class-component'
    import NavIndex from '@/components/NavIndex.vue'

    @Options({

        components: {
            NavIndex
        }

    })

    export default class Index extends Vue {

    }

</script>