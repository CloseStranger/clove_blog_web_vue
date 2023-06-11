import {createRouter, createWebHistory} from 'vue-router';
import {Message} from 'view-ui-plus';
import routes from './routes';

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const loadingDom = document.body;
  const loading = circleLoading(loadingDom, '#ffffff');
  const {isLogin, isAdmin} = await checkSSOLogin(store);
  const ossInit = async () => {
    const output = await initAliOSS();
    await store.dispatch('setAliOSSFun', output);
    return true;
  };
  if (isLogin && (await ossInit())) {
    if (to.path === '/authority/control' && !isAdmin) {
      await router.replace('/preview');
      Message.error('您暂无权限访问该目录！');
    } else {
      next();
    }
  } else {
    next(false);
  }
  loading.hide();
});

export default router;
