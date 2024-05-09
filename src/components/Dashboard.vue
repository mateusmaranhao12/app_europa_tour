<template>
    <nav-usuario />
    <div class="bem-vindo">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <h1>Seja Bem vindo, Mateus</h1>
                </div>
                <div class="col-md-6 d-none d-md-block">
                    <img class="img-fluid" src="../assets/imgs/boas-vindas.jpg">
                </div>
            </div>
        </div>
    </div>
    <div class="texto-boas-vindas">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Venha agendar conosco sua viagem dos sonhos!!!</h2>
                </div>
            </div>
        </div>
    </div>

    <!--Italia-->
    <div class="col-md-12 pais">
        <h2>Itália</h2>
    </div>
    <div class="background-italia cards-index">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="i in italia" :key="i.cidade">
                    <div class="card card-index">
                        <img :src="require(`../assets/imgs/${i.imagem}.jpg`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ i.cidade }}</h5>
                            <p class="card-text">{{ i.resumo }}</p>
                        </div>
                        <div class="m-2 d-flex justify-content-center">
                            <button type="button" class="btn btn-lista-desejos">Adicionar a lista de desejos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--França-->
    <div class="col-md-12 pais">
        <h2>França</h2>
    </div>
    <div class="background-franca cards-index">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="f in franca" :key="f.cidade">
                    <div class="card card-index">
                        <img :src="require(`../assets/imgs/${f.imagem}.jpg`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ f.cidade }}</h5>
                            <p class="card-text">{{ f.resumo }}</p>
                        </div>
                        <div class="m-2 d-flex justify-content-center">
                            <button type="button" class="btn btn-lista-desejos">Adicionar a lista de desejos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Portugal-->
    <div class="col-md-12 pais">
        <h2>Portugal</h2>
    </div>
    <div class="background-portugal cards-index">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="p in portugal" :key="p.cidade">
                    <div class="card card-index">
                        <img :src="require(`../assets/imgs/${p.imagem}.jpg`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ p.cidade }}</h5>
                            <p class="card-text">{{ p.resumo }}</p>
                        </div>
                        <div class="m-2 d-flex justify-content-center">
                            <button type="button" class="btn btn-lista-desejos">Adicionar a lista de desejos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Espanha-->
    <div class="col-md-12 pais">
        <h2>Espanha</h2>
    </div>
    <div class="background-espanha cards-index">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="e in espanha" :key="e.cidade">
                    <div class="card card-index">
                        <img :src="require(`../assets/imgs/${e.imagem}.jpg`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ e.cidade }}</h5>
                            <p class="card-text">{{ e.resumo }}</p>
                        </div>
                        <div class="m-2 d-flex justify-content-center">
                            <button type="button" class="btn btn-lista-desejos">Adicionar a lista de desejos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Reino Unido-->
    <div class="col-md-12 pais">
        <h2>Reino Unido</h2>
    </div>
    <div class="background-uk cards-index">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="uk in reino_unido" :key="uk.cidade">
                    <div class="card card-index">
                        <img :src="require(`../assets/imgs/${uk.imagem}.jpg`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ uk.cidade }}</h5>
                            <p class="card-text">{{ uk.resumo }}</p>
                        </div>
                        <div class="m-2 d-flex justify-content-center">
                            <button type="button" class="btn btn-lista-desejos">Adicionar a lista de desejos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Suíça-->
    <div class="col-md-12 pais">
        <h2>Suíça</h2>
    </div>
    <div class="background-suica cards-index">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="s in suica" :key="s.cidade">
                    <div class="card card-index">
                        <img :src="require(`../assets/imgs/${s.imagem}.jpg`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ s.cidade }}</h5>
                            <p class="card-text">{{ s.resumo }}</p>
                        </div>
                        <div class="m-2 d-flex justify-content-center">
                            <button type="button" class="btn btn-lista-desejos">Adicionar a lista de desejos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import NavUsuario from './NavUsuario.vue';

@Options({

    components: {
        NavUsuario
    }

})

export default class Dashboard extends Vue {

    italia = [
        {cidade: 'Roma', imagem: 'italia1', resumo: 'lorem ipsum'},
        {cidade: 'Veneza', imagem: 'italia2', resumo: 'lorem ipsum'},
        {cidade: 'Stresa', imagem: 'italia3', resumo: 'lorem ipsum'},
        {cidade: 'Pisa', imagem: 'italia4', resumo: 'lorem ipsum'},
        {cidade: 'Milão', imagem: 'italia5', resumo: 'lorem ipsum'},
        {cidade: 'Verona', imagem: 'italia6', resumo: 'lorem ipsum'},
        {cidade: 'Florença', imagem: 'italia7', resumo: 'lorem ipsum'},
        {cidade: 'Nápoles', imagem: 'italia8', resumo: 'lorem ipsum'}
    ]

    franca = [
        {cidade: 'Paris', imagem: 'franca1', resumo: 'lorem ipsum'},
        {cidade: 'Marselha', imagem: 'franca2', resumo: 'lorem ipsum'},
        {cidade: 'Lyon', imagem: 'franca3', resumo: 'lorem ipsum'},
        {cidade: 'Bordeaux', imagem: 'franca4', resumo: 'lorem ipsum'}
    ]

    portugal = [
        {cidade: 'Lisboa', imagem: 'portugal1', resumo: 'lorem ipsum'},
        {cidade: 'Porto', imagem: 'portugal2', resumo: 'lorem ipsum'},
        {cidade: 'Sintra', imagem: 'portugal3', resumo: 'lorem ipsum'},
        {cidade: 'Coimbra', imagem: 'portugal4', resumo: 'lorem ipsum'}
    ]

    espanha = [
        {cidade: 'Madrid', imagem: 'espanha1', resumo: 'lorem ipsum'},
        {cidade: 'Barcelona', imagem: 'espanha2', resumo: 'lorem ipsum'},
        {cidade: 'Sevilha', imagem: 'espanha3', resumo: 'lorem ipsum'},
        {cidade: 'Valência', imagem: 'espanha4', resumo: 'lorem ipsum'}
    ]

    reino_unido = [
        {cidade: 'Londres', imagem: 'reinounido1', resumo: 'lorem ipsum'},
        {cidade: 'Edimburgo', imagem: 'reinounido2', resumo: 'lorem ipsum'},
        {cidade: 'Liverpool', imagem: 'reinounido3', resumo: 'lorem ipsum'},
        {cidade: 'Manchester', imagem: 'reinounido4', resumo: 'lorem ipsum'}
    ]

    suica = [
        {cidade: 'Zurique', imagem: 'suica1', resumo: 'lorem ipsum'},
        {cidade: 'Genebra', imagem: 'suica2', resumo: 'lorem ipsum'},
        {cidade: 'Sion', imagem: 'suica3', resumo: 'lorem ipsum'},
        {cidade: 'Zermatt', imagem: 'suica4', resumo: 'lorem ipsum'}
    ]

}

</script>

<style lang="scss">
@import '@/scss/pagina_usuario.scss';
</style>