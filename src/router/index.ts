import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isAuthenticated } from '@/utils/auth'

import AgendarViagem from '@/components/AgendarViagem.vue'
import AgendarViagemLocal from '@/components/AgendarViagemLocal.vue'
import Cadastro from '@/components/Cadastro.vue'
import Dashboard from '@/components/Dashboard.vue'
import Index from '@/views/Index.vue'
import ListaDeDesejos from '@/components/ListaDeDesejos.vue'
import Login from '@/components/Login.vue'
import PaginaUsuario from '@/views/PaginaUsuario.vue'
import Perfil from '@/components/Perfil.vue'
import ViagensAgendadas from '@/components/ViagensAgendadas.vue'
import ViewDetails from '@/components/ViewDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: []
  },
  {
    path: '/details/:nome',
    name: 'ViewDetails',
    component: ViewDetails,
    props: route => ({
      nome: route.params.nome,
      passeios: [
        { nome: 'milao', passeio: 'Milão', resumo: 'lorem ipsum dolor sit amet', imagem: 'milao', imagem2: 'milao2', titulo: 'Milão', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'roma', passeio: 'Roma', resumo: 'lorem ipsum dolor sit amet', imagem: 'roma', imagem2: 'roma2', titulo: 'Roma', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'barcelona', passeio: 'Barcelona', resumo: 'lorem ipsum dolor sit amet', imagem: 'barcelona', imagem2: 'barcelona2', titulo: 'Barcelona', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'lisboa', passeio: 'Lisboa', resumo: 'lorem ipsum dolor sit amet', imagem: 'lisboa', imagem2: 'lisboa2', titulo: 'Lisboa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'sion', passeio: 'Sion', resumo: 'lorem ipsum dolor sit amet', imagem: 'sion', imagem2: 'sion2', titulo: 'Sion', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'madrid', passeio: 'Madrid', resumo: 'lorem ipsum dolor sit amet', imagem: 'madrid', imagem2: 'madrid2', titulo: 'Madrid', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'stresa', passeio: 'Stresa', resumo: 'lorem ipsum dolor sit amet', imagem: 'stresa', imagem2: 'stresa2', titulo: 'Stresa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' },
        { nome: 'paris', passeio: 'Paris', resumo: 'lorem ipsum dolor sit amet', imagem: 'paris', imagem2: 'paris2', titulo: 'Paris', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.', texto2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dui a scelerisque sollicitudin. Nullam ultricies lobortis fringilla. Etiam dictum velit at efficitur vestibulum. Phasellus in dignissim mi. Nulla non scelerisque orci, et pellentesque purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut est tempor, pulvinar diam eget, suscipit est. In sed accumsan nulla. Proin faucibus eu metus eu gravida. Proin fermentum magna at massa laoreet efficitur. Aenean eu tortor ut ipsum suscipit dapibus ut nec quam. Donec tincidunt nunc neque, sit amet dignissim sapien tempus sit amet. Aliquam pellentesque diam nec justo pretium congue.' }
      ]
    })
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/pagina-usuario',
    name: 'paginausuario',
    component: PaginaUsuario,
    redirect: '/pagina-usuario/dashboard',
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next({ name: 'login' })
      } else {
        next()
      }
    },
    children: [

      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },

      {
        path: 'viagens-agendadas',
        name: 'viagens-agendadas',
        component: ViagensAgendadas
      },

      {
        path: 'agendar-viagem',
        name: 'agendar-viagem',
        component: AgendarViagem
      },

      {
        path: 'lista-de-desejos',
        name: 'lista-de-desejos',
        component: ListaDeDesejos
      },

      {
        path: 'perfil',
        name: 'perfil',
        component: Perfil
      },

      {
        path: 'agendar-viagem-local',
        name: 'agendar-viagem-local',
        component: AgendarViagemLocal
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
