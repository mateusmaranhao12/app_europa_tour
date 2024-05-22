<template>
    <nav-usuario />
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="card card-forms">
                <div class="card-body d-flex flex-column align-items-center">
                    <h5 class="card-title">Agendar Viagem</h5>
                    <form>
                        <div class="row mb-4">
                            <div class="col-md-6 mb-3">

                                <!--Local Origem-->
                                <label for="local_origem" class="form-label">Local de Origem</label>
                                <select class="form-select" aria-label="local_origem" id="local_origem">
                                    <option selected disabled>Informe seu local de origem</option>
                                    <option v-for="c in local" :key="c.id">{{ c.cidade }}</option>
                                </select>

                            </div>
                            <div class="col-md-6 mb-3">

                                <!--Destino-->
                                <label for="destino" class="form-label">Destino</label>
                                <select class="form-select" aria-label="destino" id="destino">
                                    <option selected disabled>Informe seu destino</option>
                                    <option v-for="c in local" :key="c.id">{{ c.cidade }}</option>
                                </select>
                            </div>

                            <!--Data Ida-->
                            <div class="col-md-6 mb-3">
                                <label for="data_ida" class="form-label">Data de ida</label>
                                <input ref="dataInput" class="form-control white-text" type="date" id="data_ida">
                            </div>

                            <div class="col-md-6 mb-3">

                                <!--Horário Ida-->
                                <label for="horario_ida" class="form-label">Horário de Ida</label>
                                <select class="form-select" aria-label="horario" id="horario">
                                    <option selected disabled>Horário de ida</option>
                                    <option v-for="h in horarios" :key="h.horario">{{ h.horario }}</option>
                                </select>

                            </div>

                            <!--Data Volta-->
                            <div class="col-md-6 mb-3">
                                <label for="data_volta" class="form-label">Data de volta</label>
                                <input ref="dataInput" class="form-control white-text" type="date" id="data_ida">
                            </div>

                            <div class="col-md-6">

                                <!--Horário volta-->
                                <label for="horario_volta" class="form-label">Horário de volta</label>
                                <select class="form-select" aria-label="horario" id="horario">
                                    <option selected disabled>Horário de volta</option>
                                    <option v-for="h in horarios" :key="h.horario">{{ h.horario }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button type="submit" class="btn btn-submit">Agendar</button>
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

export default class AgendarViagemLocal extends Vue {

    local = [
        { id: 1, cidade: 'Barcelona' },
        { id: 2, cidade: 'Bordeaux' },
        { id: 3, cidade: 'Coimbra' },
        { id: 4, cidade: 'Edimburgo' },
        { id: 5, cidade: 'Florença' },
        { id: 6, cidade: 'Genebra' },
        { id: 7, cidade: 'Lisboa' },
        { id: 8, cidade: 'Liverpool' },
        { id: 9, cidade: 'Londres' },
        { id: 10, cidade: 'Lyon' },
        { id: 11, cidade: 'Madrid' },
        { id: 12, cidade: 'Manchester' },
        { id: 13, cidade: 'Marselha' },
        { id: 14, cidade: 'Milão' },
        { id: 15, cidade: 'Nápoles' },
        { id: 16, cidade: 'Paris' },
        { id: 17, cidade: 'Pisa' },
        { id: 18, cidade: 'Porto' },
        { id: 19, cidade: 'Roma' },
        { id: 20, cidade: 'Sevilha' },
        { id: 21, cidade: 'Sintra' },
        { id: 22, cidade: 'Sion' },
        { id: 23, cidade: 'Stresa' },
        { id: 24, cidade: 'Valência' },
        { id: 25, cidade: 'Veneza' },
        { id: 26, cidade: 'Verona' },
        { id: 27, cidade: 'Zermatt' },
        { id: 28, cidade: 'Zurique' }
    ]

    horarios = [
        { horario: '00:00' },
        { horario: '01:00' },
        { horario: '02:00' },
        { horario: '03:00' },
        { horario: '04:00' },
        { horario: '05:00' },
        { horario: '06:00' },
        { horario: '07:00' },
        { horario: '08:00' },
        { horario: '09:00' },
        { horario: '10:00' },
        { horario: '11:00' },
        { horario: '12:00' },
        { horario: '13:00' },
        { horario: '14:00' },
        { horario: '15:00' },
        { horario: '16:00' },
        { horario: '17:00' },
        { horario: '18:00' },
        { horario: '19:00' },
        { horario: '20:00' },
        { horario: '21:00' },
        { horario: '22:00' },
        { horario: '23:00' }
    ]


}

</script>

<style lang="scss">
@import '../scss/pagina_usuario.scss';
@import '../scss/forms.scss';
</style>