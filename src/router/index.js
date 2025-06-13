import { createRouter, createWebHashHistory } from 'vue-router'
import { useScroll } from '@vueuse/core'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/PortfolioView.vue'),
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('@/views/BlogsView.vue'),
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('@/views/ArticleView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('@/views/ProjectDetailView.vue'),
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    const { scrollTo } = useScroll(window)

    // 如果有 savedPosition (使用瀏覽器的前進/後退按鈕)，則使用它
    if (savedPosition) {
      scrollTo({ top: savedPosition.top, behavior: 'smooth' })
      return
    }

    // 如果目標路由有指定滾動位置的 hash，則滾動到該元素
    if (to.hash) {
      const element = document.querySelector(to.hash)
      if (element) {
        scrollTo({ top: element.offsetTop, behavior: 'smooth' })
        return
      }
    }

    // 如果目標路由與來源路由相同，則不滾動
    if (to.path === from.path) {
      return
    }

    // 處理特定路由的滾動行為
    if (to.name === 'contact' && to.hash === '#contact-form') {
      const element = document.querySelector('#contact-form')
      if (element) {
        scrollTo({ top: element.offsetTop, behavior: 'smooth' })
        return
      }
    }

    // 其他情況滾動到頁面頂部
    scrollTo({ top: 0, behavior: 'smooth' })
  },
})

// 添加全局前置守衛
router.beforeEach(async (to, from, next) => {
  try {
    const component = to.matched[0]?.components?.default
    if (component && typeof component === 'function') {
      await component()
    }
    next()
  } catch (error) {
    // 靜默處理錯誤，繼續導航
    next()
  }
})

// 添加全局後置守衛
router.afterEach(to => {
  if (!to.matched.length) {
    router.push('/404')
  }
})

export default router
