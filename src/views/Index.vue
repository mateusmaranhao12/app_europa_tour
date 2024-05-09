<template>
    <nav-index></nav-index>
    <div class="boas-vindas">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <h1>Bem vindo ao app Europa Tour</h1>
                </div>
                <div class="col-md-6 d-none d-md-block">
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
                <div class="col" v-for="p in passeios" :key="p.passeio">
                    <div class="card card-index">
                        <img :src="require(`../assets/imgs/${p.imagem}.jpg`)" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ p.titulo }}</h5>
                            <p class="card-text">{{ p.resumo }}</p>
                        </div>
                        <div class="m-2 d-flex justify-content-end">
                            <button @click="verDetalhes(p)" type="button" class="btn btn-warning">Ver mais</button>
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
import { Passeio } from '@/utils/interfaces'

@Options({

    components: {
        NavIndex
    }

})

export default class Index extends Vue {

    carouselItems: CarouselItem[] = [ //lista do carousel
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

    passeios = [ //lista de passeios

        { nome: 'milao', passeio: 'Milão', resumo: 'lorem ipsum dolor sit amet', imagem: 'milao', imagem2: 'milao2', titulo: 'Milão', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'roma', passeio: 'Roma', resumo: 'lorem ipsum dolor sit amet', imagem: 'roma', imagem2: 'roma2', titulo: 'Roma', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'barcelona', passeio: 'Barcelona', resumo: 'lorem ipsum dolor sit amet', imagem: 'barcelona', imagem2: 'barcelona2', titulo: 'Barcelona', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'lisboa', passeio: 'Lisboa', resumo: 'lorem ipsum dolor sit amet', imagem: 'lisboa', imagem2: 'lisboa2', titulo: 'Lisboa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'sion', passeio: 'Sion', resumo: 'lorem ipsum dolor sit amet', imagem: 'sion', imagem2: 'sion2', titulo: 'Sion', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'madrid', passeio: 'Madrid', resumo: 'lorem ipsum dolor sit amet', imagem: 'madrid', imagem2: 'madrid2', titulo: 'Madrid', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'stresa', passeio: 'Stresa', resumo: 'lorem ipsum dolor sit amet', imagem: 'stresa', imagem2: 'stresa2', titulo: 'Stresa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'paris', passeio: 'Paris', resumo: 'lorem ipsum dolor sit amet', imagem: 'paris', imagem2: 'paris2', titulo: 'Paris', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' }

    ]

    verDetalhes(p: Passeio) { // Navega para a página de detalhes, passando o nome do passeio como parâmetro
        this.$router.push({ name: 'ViewDetails', params: { nome: p.nome } })
    }

}

</script>

<style lang="scss">
@import '@/scss/index.scss';
</style>