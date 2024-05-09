<template>
    <NavIndex />
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="card card-forms">
                <div class="card-body">
                    <h5 class="card-title">Cadastro</h5>
                    <div v-if="mensagem_alerta" class="text-center" :class="mensagem_alerta.status">
                        <i :class="mensagem_alerta.icone"></i> {{ mensagem_alerta.mensagem }}
                    </div>
                    <form @submit.prevent="cadastrarUsuario()">
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Nome</label>
                                <input v-model="usuarios_cadastrados.nome" type="text" class="form-control" name="nome"
                                    id="nome" placeholder="Digite seu nome">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="usuarios_cadastrados.email" type="text" class="form-control"
                                    name="email" id="email" placeholder="Digite seu email">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="senha" class="form-label">Senha</label>
                            <div class="input-group mb-3">
                                <input v-model="usuarios_cadastrados.senha" :type="mostrar_senha ? 'text' : 'password'"
                                    class="form-control white-text" placeholder="Senha" name="senha" aria-label="Senha"
                                    aria-describedby="button-addon2">
                                <button @click="alternarExibicaoSenha()" class="btn btn-outline-warning" type="button"
                                    id="senha">
                                    <i class="fa-solid"
                                        :class="{ 'fa-eye-slash': mostrar_senha, 'fa-eye': !mostrar_senha }"></i>
                                </button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button @click.prevent="cadastrarUsuario()" type="submit"
                                class="btn btn-submit">Cadastrar</button>
                        </div>

                        <div class="col-md-12 d-flex justify-content-center">
                            <p>Já é cadastrado? Faça <router-link class="text-warning" to="/login">login
                                </router-link>agora
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
import axios from 'axios'
import { MensagemAlerta } from '@/utils/interfaces'

@Options({

    components: {
        NavIndex
    }

})

export default class Cadastro extends Vue {

    mostrar_senha = false

    mensagem_alerta: MensagemAlerta | null = null

    usuarios_cadastrados = {

        nome: '',
        email: '',
        senha: ''

    }

    //alternar exibição da senha
    alternarExibicaoSenha() {
        this.mostrar_senha = !this.mostrar_senha
    }

    //Cadastrar usuário
    public cadastrarUsuario() {
        var cadastrar_usuario = this.toFormData(this.usuarios_cadastrados)

        axios.post(
            'http://localhost/Projetos/app_europa_tour/src/backend/cadastrar_usuario.php', cadastrar_usuario
        ).then((res) => {
            if (res.data.status === 'sucesso') { //usuario cadastrado com sucesso
                this.mensagem_alerta = {
                    icone: 'fa-solid fa-check',
                    status: 'alert alert-success',
                    mensagem: res.data.mensagem
                }

                this.limparFormulario()

            } else if (res.data.status === 'info') {

                this.mensagem_alerta = {
                    icone: 'fa-solid fa-circle-info',
                    status: 'alert alert-info',
                    mensagem: res.data.mensagem
                }

            } else if (res.data.status === 'erro') { //erro ao cadastrar usuario
                this.mensagem_alerta = {
                    icone: 'fa-solid fa-triangle-exclamation',
                    status: 'alert alert-danger',
                    mensagem: res.data.mensagem
                }
            }

            setTimeout(() => {
                this.mensagem_alerta = { icone: '', status: '', mensagem: '' }
            }, 5000)
        })
    }

    private limparFormulario() {
        this.usuarios_cadastrados.nome = ''
        this.usuarios_cadastrados.email = ''
        this.usuarios_cadastrados.senha = ''
    }

    //formdata
    toFormData(obj: Record<string, any>): FormData {
        const liveFormData = new FormData()
        for (const key in obj) {
            liveFormData.append(key, obj[key])
        }
        return liveFormData
    }


}

</script>

<style lang="scss">
@import '@/scss/forms.scss';
</style>