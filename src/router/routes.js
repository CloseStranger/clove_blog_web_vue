import SelfLayout from '../layout/index.vue';
import WelcomePage from '../views/welcomePage/index.vue';

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
    component: WelcomePage,
  },
  {
    path: '/',
    component: SelfLayout,
    children: [],
  },
];

export default routes;
