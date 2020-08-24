// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          redirect: '/welcome',
        },
        {
          name: 'index',
          path: '/welcome',
          component: './index',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
});
