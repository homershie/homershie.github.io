import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// 定義網站基礎標題
const BASE_TITLE = 'HOEDES｜荷馬桑 Homer Shie｜設計 ‧ 插畫 ‧ 動畫 ‧ 藝術 | 台北'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首頁',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: '關於我',
      },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: {
        title: '服務項目',
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/PortfolioView.vue'),
      meta: {
        title: '作品集',
      },
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('@/views/BlogsView.vue'),
      meta: {
        title: '部落格',
      },
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('@/views/ArticleView.vue'),
      meta: {
        title: '文章詳情',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: '聯絡我們',
      },
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('@/views/ProjectDetailView.vue'),
      meta: {
        title: '專案詳情',
      },
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        title: '頁面未找到',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 如果有 savedPosition (使用瀏覽器的前進/後退按鈕)，則使用它
    if (savedPosition) {
      window.scrollTo({
        top: savedPosition.top,
        behavior: 'smooth',
      })
      return
    }

    // 如果目標路由有指定滾動位置的 hash，則滾動到該元素
    if (to.hash) {
      const element = document.querySelector(to.hash)
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        })
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
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        })
        return
      }
    }

    // 其他情況滾動到頁面頂部
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
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
  // 更新頁面標題
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | ${BASE_TITLE}`
  } else {
    // 預設標題
    document.title = BASE_TITLE
  }

  if (!to.matched.length) {
    router.push('/404')
  }
})

// 導出基礎標題常數供組件使用
export { BASE_TITLE }
export default router
