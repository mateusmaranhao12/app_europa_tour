<template>
    <NavIndex />
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="card card-forms">
                <div class="card-body">
                    <h5 class="card-title">Cadastro</h5>
                    <form>
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="name" placeholder="Digite seu nome">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" placeholder="Digite seu email">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="senha" class="form-label">Senha</label>
                            <div class="input-group mb-3">
                                <input :type="mostrar_senha ? 'text' : 'password'" class="form-control white-text"
                                    placeholder="Senha" name="senha" aria-label="Senha"
                                    aria-describedby="button-addon2">
                                <button @click="alternarExibicaoSenha()" class="btn btn-outline-warning" type="button"
                                    id="senha">
                                    <i class="fa-solid"
                                        :class="{ 'fa-eye-slash': mostrar_senha, 'fa-eye': !mostrar_senha }"></i>
                                </button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button type="submit" class="btn btn-submit">Cadastrar</button>
                        </div>

                        <div class="col-md-12 d-flex justify-content-center">
                            <p>Já é cadastrado? Faça <router-link class="text-warning"
                                    to="/login">login </router-link>agora
                                mesmo!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

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

    mostrar_senha = false

    //alternar exibição da senha

    alternarExibicaoSenha() {
        this.mostrar_senha = !this.mostrar_senha
    }

}

</script>

<style lang="scss">
@import '@/scss/forms.scss';
</style>