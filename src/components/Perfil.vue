<template>
    <nav-usuario />
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="card card-forms">
                <div class="card-body">
                    <h5 class="card-title">Seu perfil</h5>
                    <form @submit.prevent="">
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" disabled class="form-control" name="nome"
                                    id="nome" placeholder="Mateus">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" disabled class="form-control"
                                    name="email" id="email" placeholder="mateusnmaranhao@gmail.com">
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button @click.prevent="" type="submit"
                                class="btn btn-submit"><i class="fa-solid fa-pen-to-square"></i> Editar dados</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import NavUsuario from './NavUsuario.vue'

@Options({

    components: {
        NavUsuario
    }

})

export default class Perfil extends Vue {


}

</script>

<style lang="scss"></style>