<template>
    <nav-index />
    <div class="view-details">
        <div class="container">
            <div class="row">
                <div class="col mt-3">
                    <div v-if="detalhesPasseio">
                        <h3>{{ detalhesPasseio.titulo }}</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <img class="img-fluid" :src="require(`../assets/imgs/${detalhesPasseio.imagem}.jpg`)"
                                    alt="Imagem do passeio">
                            </div>
                            <div class="col-md-6 d-flex justify-content-center align-items-center">
                                <p>{{ detalhesPasseio.texto }}</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Passeio não encontrado.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="view-details2">
        <div class="container">
            <div class="row">
                <div class="col mt-3">
                    <div v-if="detalhesPasseio">
                        <div class="row">
                            <div class="col-md-6 d-flex justify-content-center align-items-center">
                                <p>{{ detalhesPasseio.texto2 }}</p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" :src="require(`../assets/imgs/${detalhesPasseio.imagem2}.jpg`)"
                                    alt="Imagem do passeio">
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Passeio não encontrado.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Passeio } from '@/utils/interfaces'
import NavIndex from './NavIndex.vue'

@Options({

    components: {
        NavIndex
    }

})

export default class ViewDetails extends Vue {

    @Prop({ type: String, required: true })
    private nome!: string

    @Prop({ type: Array as () => Passeio[], required: true })
    private passeios!: Passeio[]

    get detalhesPasseio() { //ver detalhes dos passeios
        return this.passeios.find(p => p.nome === this.nome)
    }

}

</script>

<style lang="scss">
@import '../scss/index.scss';
</style>