<template>
    <NavIndex />
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="card card-forms">
                <div class="card-body">
                    <div v-if="mensagem_alerta" class="text-center" :class="mensagem_alerta.status">
                        <i :class="mensagem_alerta.icone"></i> {{ mensagem_alerta.mensagem }}
                    </div>
                    <h5 class="card-title">Login</h5>
                    <form @submit.prevent="fazerLogin()">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input v-model="usuarios_cadastrados.email" type="text" class="form-control" id="email"
                                placeholder="Digite seu email">
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
                            <button type="submit" class="btn btn-submit">Entrar</button>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            <p>Ainda não é cadastrado? Faça seu <router-link class="text-warning"
                                    to="/cadastro">cadastro </router-link>agora
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

export default class Login extends Vue {
    mostrar_senha = false
    mensagem_alerta: MensagemAlerta | null = null

    usuarios_cadastrados = {
        email: '',
        senha: ''
    }

    // Alternar exibição da senha
    alternarExibicaoSenha() {
        this.mostrar_senha = !this.mostrar_senha
    }

    // Fazer login
    public async fazerLogin() {
        try {
            const response = await axios.post('http://localhost/Projetos/app_europa_tour/src/backend/login.php', {
                email: this.usuarios_cadastrados.email,
                senha: this.usuarios_cadastrados.senha
            })

            if (response.data.status === 'sucesso') {
                this.$router.push('/pagina-usuario')
            } else {
                this.mensagem_alerta = {
                    icone: 'fa-solid fa-triangle-exclamation',
                    status: 'alert alert-danger',
                    mensagem: response.data.mensagem
                }

                setTimeout(() => {
                    this.mensagem_alerta = { icone: '', status: '', mensagem: '' }
                }, 5000)
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error)
            this.mensagem_alerta = {
                icone: 'fa-solid fa-triangle-exclamation',
                status: 'alert alert-danger',
                mensagem: 'Erro ao fazer login. Tente novamente.'
            }

            setTimeout(() => {
                this.mensagem_alerta = { icone: '', status: '', mensagem: '' }
            }, 5000)
        }
    }
}
</script>


<style lang="scss">
@import '@/scss/forms.scss';
</style>