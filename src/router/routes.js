import SelfLayout from '../layout/index.vue';
import homeRoute from './homeRoute.js';

const routes = [
  {
    path: '/',
    redirect: {name: 'Welcome'},
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/welcomePage/index.vue'),
  },
  {
    path: '/',
    component: SelfLayout,
    children: [...homeRoute],
  },
];

export default routes;
