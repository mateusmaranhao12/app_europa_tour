<template>
    <nav class="navbar nav-pag-index navbar-expand-lg">
        <div class="container-fluid">
            <router-link class="nav-link" to="perfil">
                <h2 class="navbar-brand" href=""><i class="fa-solid fa-user"></i> Mateus</h2>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/pagina-usuario/dashboard' }" class="nav-link"
                            to="dashboard"><i class="fa-solid fa-gauge"></i> Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/pagina-usuario/agendar-viagem' }"
                            class="nav-link" to="agendar-viagem"><i class="fa-solid fa-marker"></i> Agendar
                            viagem</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/pagina-usuario/viagens-agendadas' }"
                            class="nav-link" to="viagens-agendadas"><i class="fa-solid fa-suitcase"></i> Viagens
                            agendadas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/pagina-usuario/lista-de-desejos' }"
                            class="nav-link" to="lista-de-desejos"><i class="fa-solid fa-list"></i> Lista de
                            Desejos</router-link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="logout" href="#"><i
                                class="fa-solid fa-right-from-bracket"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { logout } from '@/utils/auth';

export default defineComponent({

    name: 'NavbarUsuario',

    setup() {
        const router = useRouter()

        const logoutUser = () => {
            logout()
            router.push('/')
        }

        return {
            logout: logoutUser
        }
    }
    
})

</script>

<style lang="scss">
@import '../scss/navbars.scss';
</style>