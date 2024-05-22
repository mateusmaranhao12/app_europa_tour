<template>
    <nav-usuario />
    
    <div class="col-md-12 custom-text">
        <h2>Viagens agendadas</h2>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                <table class="mt-5 table table-hover table-dark custom-table rounded-table">
                    <thead>
                        <tr>
                            <th scope="col">Local de Origem</th>
                            <th scope="col">Destino</th>
                            <th scope="col">Data de ida</th>
                            <th scope="col">Horário de ida</th>
                            <th scope="col">Data de volta</th>
                            <th scope="col">Horário de volta</th>
                            <th scope="col">Cancelar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Milão</td>
                            <td>Veneza</td>
                            <td>28/07/2024</td>
                            <td>14:00</td>
                            <td>31/07/2024</td>
                            <td>18:00</td>
                            <td><button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                        <tr>
                            <td>Nápoles</td>
                            <td>Marselha</td>
                            <td>08/08/2024</td>
                            <td>16:00</td>
                            <td>12/08/2024</td>
                            <td>17:00</td>
                            <td><button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>
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

export default class ViagensAgendadas extends Vue {


}

</script>

<style lang="scss">
@import '../scss/pagina_usuario.scss';
@import '../scss/tables.scss';
</style>