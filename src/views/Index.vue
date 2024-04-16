<template>
    <nav-index></nav-index>
    <div class="boas-vindas">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <h1>Bem vindo ao app Europa Tour</h1>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="../assets/imgs/bem-vindo.jpg">
                </div>
            </div>
        </div>
    </div>
    <div class="secao-index">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-5">

                    <h3>Alguns de nossos passeios</h3>

                    <div id="carouselIndex" class="carousel slide">
                        <div class="carousel-indicators">
                            <button v-for="(item, index) in carouselItems" :key="index" type="button"
                                :data-bs-target="'#carouselIndex'" :data-bs-slide-to="index"
                                :class="{ 'active': index === 0 }" :aria-current="index === 0 ? 'true' : null"
                                :aria-label="'Slide ' + (index + 1)"></button>
                        </div>
                        <div class="carousel-inner">
                            <div v-for="(item, index) in carouselItems" :key="index"
                                :class="{ 'carousel-item': true, 'active': index === 0 }">
                                <img :src="item.imagem" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>{{ item.titulo }}</h5>
                                    <p>{{ item.descricao }}</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndex"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndex"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-6 mt-5 d-flex justify-content-center align-items-center">
                    <ul>
                        <li>
                            <h5><i class="fa-solid fa-check"></i> Pague parcelado até 12x</h5>
                        </li>
                        <li>
                            <h5><i class="fa-solid fa-check"></i> Cancele quando quiser</h5>
                        </li>
                        <li>
                            <h5><i class="fa-solid fa-check"></i> Trem sempre chega na hora</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="cards-index mt-5 mb-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="p in passeios" :key="p.nome">
                    <div class="card">
                        <img :src="require(`../assets/imgs/${p.imagem}.jpg`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ p.titulo }}</h5>
                            <p class="card-text">{{ p.texto }}</p>
                        </div>
                        <div class="m-2 d-flex justify-content-end">
                            <button type="button" class="btn btn-warning">Ver mais</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import NavIndex from '@/components/NavIndex.vue'
import { CarouselItem } from '@/utils/interfaces'

@Options({

    components: {
        NavIndex
    }

})

export default class Index extends Vue {

    carouselItems: CarouselItem[] = [
        {
            imagem: require('@/assets/imgs/carousel1.jpg'),
            titulo: 'Coliseu de Roma',
            descricao: 'Venha conhecer uma das 7 maravilhas do mundo no centro da Itália'
        },
        {
            imagem: require('@/assets/imgs/carousel2.jpg'),
            titulo: 'Alpes Suíços',
            descricao: 'Você também pode conhecer a beleza dos Alpes Suíços'
        },
        {
            imagem: require('@/assets/imgs/carousel3.jpg'),
            titulo: 'Torre Eiffel',
            descricao: 'Venha aproveitar as belezas de Paris, começando pela Torre Eiffel'
        }
    ]

    passeios = [

        { nome: 'Milão', imagem: 'milao', titulo: 'Milão', texto: 'lorem ipsum dolor sit amet' },
        { nome: 'Roma', imagem: 'roma', titulo: 'Roma', texto: 'lorem ipsum dolor sit amet' },
        { nome: 'Barcelona', imagem: 'barcelona', titulo: 'Barcelona', texto: 'lorem ipsum dolor sit amet' },
        { nome: 'Lisboa', imagem: 'lisboa', titulo: 'Lisboa', texto: 'lorem ipsum dolor sit amet' },
        { nome: 'Sion', imagem: 'sion', titulo: 'Sion', texto: 'lorem ipsum dolor sit amet' },
        { nome: 'Madrid', imagem: 'madrid', titulo: 'Madrid', texto: 'lorem ipsum dolor sit amet' },
        { nome: 'Stresa', imagem: 'stresa', titulo: 'Stresa', texto: 'lorem ipsum dolor sit amet' },
        { nome: 'Paris', imagem: 'paris', titulo: 'Paris', texto: 'lorem ipsum dolor sit amet' }

    ]

}

</script>

<style lang="scss">
@import '@/scss/index.scss';
</style>