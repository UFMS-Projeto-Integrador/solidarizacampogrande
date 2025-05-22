import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';

import Home from "@/views/Home.vue";
import FormBeneficiaries from '@/views/FormBeneficiaries.vue';
import FormDonor from '@/views/FormDonor.vue';
import FormOngs from '@/views/FormOngs.vue';
import Contato from '@/views/Contato.vue';
import LoginOng from '@/views/LoginOng.vue';
import Dashboard from '@/views/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Beneficiario',
    name: 'FormBeneficiaries',
    component: FormBeneficiaries,
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
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginOng,
    meta: { hideNavbar: true },
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // <-- Define que precisa de login
    meta: { hideNavbar: true }, // <-- Adiciona ou remove o footer e header da página Dashboard
    },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
}); 


//  Verificação Global de Autenticação
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next('/Login'); // Redireciona para login se não estiver autenticado
  } else {
    next(); // Caso contrário, permite acesso
  }
});  

export default router;
