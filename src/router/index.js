import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import FormBeneficiaries from '@/views/FormBeneficiaries.vue'
import FormDonor from '@/views/FormDonor.vue'
import FormOngs from '@/views/FormOngs.vue'
import Contato from '@/views/Contato.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Beneficiario',
    name: 'FormBeneficiaries',
    component: FormBeneficiaries
  },
  {
    path: '/Doador',
    name: 'FormDonor',
    component: FormDonor,
  },
  {
    path: '/Ongs',
    name: 'Ongs',
    component: FormOngs,
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: Contato,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
