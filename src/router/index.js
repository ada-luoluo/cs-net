import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../lang'

const routes = [
  {
    path: '/:lang',
    component: {
      render: () => <router-view />
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首頁',
          metaTags: [
            {
              name: 'description',
              content: '中天科技系統(ChinaSky)20年專注企業服務;為您提供專業外包IT運維服務,提供網站建設報價,APP開發,小程式定制,企業系統定制開發,免費獲得解決方案'
            },
            {
              name: 'keywords',
              content: '網站建設報價,APP開發,小程式定制,企業系統定制開發'
            }
          ]
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about.vue')
      },
      {
        path: 'development',
        name: 'development',
        component: () => import('@/views/development.vue'),
        meta: {
          title: '開發',
          metaTags: [
            {
              name: 'description',
              content: '工程師在線維護丨星級遠端售後度身訂製專屬管理系統大量合作實例丨極速提升競爭力一站式優化你的業務網站丨APP丨微信免費即時報價丨立即瞭解中天科技系統丨定制開發專家。擁有超過15年的海內外IT開發經驗，匯聚中港精英工程師，為你提供多元化的市場策略及開發服務。訂製開發屬於你獨一無二的系統，無論是貸款系統、貿易系統、MRP生產管理系統都可以滿足你的需求.'
            },
            {
              name: 'keywords',
              content: '開發'
            }
          ]
        }
      },
      {
        path: 'customize',
        name: 'customize',
        component: () => import('@/views/customize.vue'),
        meta: {
          title: '定制開發',
          metaTags: [
            {
              name: 'description',
              content: '工程師在線維護丨星級遠端售後度身訂製專屬管理系統大量合作實例丨極速提升競爭力一站式優化你的業務網站丨APP丨微信免費即時報價丨立即瞭解中天科技系統丨定制開發專家。擁有超過15年的海內外IT開發經驗，匯聚中港精英工程師，為你提供多元化的市場策略及開發服務。訂製開發屬於你獨一無二的系統，無論是貸款系統、貿易系統、MRP生產管理系統都可以滿足你的需求.'
            },
            {
              name: 'keywords',
              content: '定制開發'
            }
          ]
        }
      },
      {
        path: 'website',
        name: 'website',
        component: () => import('@/views/website.vue'),
        meta: {
          title: '網頁設計',
          metaTags: [
            {
              name: 'description',
              content: '大量合作實例丨極速提升競爭力一站式定制個性化網站免費即時報價丨 立即瞭解超過15年開發經驗網站開發丨網頁設計丨網上商城獨一無二的網站解決方案中天科技系統丨網頁設計專家。擁有超過15年的海內外IT開發經驗，匯聚中港精英工程師，為你提供多元化的市場策略及開發服務。由專業設計師及開發人員為你度身定制響應式網站，由網頁設計規劃、網站建置、系統開發全方位負責'
            },
            {
              name: 'keywords',
              content: '網頁設計'
            }
          ]
        }
      },
      {
        path: 'app',
        name: 'APP',
        component: () => import('@/views/APP.vue'),
        meta: {
          title: 'App開發',
          metaTags: [
            {
              name: 'description',
              content: '原生APP丨混合APP丨Web APP快速擁有自己的專屬APP大量合作實例丨極速提升競爭力拓展業務輕鬆實現免費即時報價丨立即瞭解超過15年開發經驗中天科技系統丨App開發。擁有超過15年的海內外IT開發經驗，匯聚中港精英工程師，為你提供多元化的市場策略及開發服務。專業APP團隊由需求分析、定制方案、UI/UX設計、開發、測試、維護、系統管理全方位為你負責。'
            },
            {
              name: 'keywords',
              content: 'App開發'
            }
          ]
        }
      },
      {
        path: 'wechat',
        name: 'wechat',
        component: () => import('@/views/wechat.vue'),
        meta: {
          title: '微信開發',
          metaTags: [
            {
              name: 'description',
              content: '公眾號丨小程序丨企業微信大量合作實例丨極速提升競爭力免費即時報價丨立即瞭解極速開啟中國市場至佳方案一站式定制你的專屬小程序超過15年開發經驗中天科技系統丨微信開發專家。擁有超過15年的海內外IT開發經驗，匯聚中港精英工程師，為你提供多元化的市場策略及開發服務。一站式網站定制開發、APP定制、微信開發、網上商城等全方位專屬方案，更提供個性化維護支援服務。'
            },
            {
              name: 'keywords',
              content: '微信開發'
            }
          ]
        }
      },
      {
        path: 'mall',
        name: 'mall',
        component: () => import('@/views/mall.vue'),
        meta: {
          title: '網上商城',
          metaTags: [
            {
              name: 'description',
              content: '一站式網站定制開發、APP定制、微信開發、網上商城等全方位專屬方案，更提供個性化維護支援服務。'
            },
            {
              name: 'keywords',
              content: '網上商城'
            }
          ]
        }
      },
      {
        path: 'it',
        name: 'it',
        component: () => import('@/views/it.vue'),
        meta: {
          title: 'IT Support',
          metaTags: [
            {
              name: 'description',
              content: '中天科技系统IT Support 無限上門丨高校IT支援方案。一站式遙距支援丨無憂體驗。確保你的業務零中斷。網絡維護丨電腦維護丨定期檢查丨大量合作實力丨超過15年經驗。免費即時報價。'
            },
            {
              name: 'keywords',
              content: 'IT支援服務、網絡維護、桌面電腦維護'
            }
          ]
        }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/contact.vue'),
        meta: {
          title: '聯繫我們',
          metaTags: [
            {
              name: 'description',
              content: '中天科技系統(ChinaSky)20年專注企業服務;為您提供專業外包IT運維服務,提供網站建設報價,APP開發,小程式定制,企業系統定制開發,免費獲得解決方案'
            },
            {
              name: 'keywords',
              content: '網站建設報價,APP開發,小程式定制,企業系統定制開發'
            }
          ]
        }
      },
      {
        path: 'quotation',
        name: 'quotation',
        component: () => import('@/views/quotation.vue')
      },
      {
        path: 'TVP',
        name: 'TVP',
        component: () => import('@/views/TVP.vue'),
        meta: {
          title: 'TVP科技券服務',
          metaTags: [
            {
              name: 'description',
              content: '本地企業透過科技達至業務流程升級轉型每間公司。TVP全年接受申請，最多可獲批6個項目，合共最多可獲60萬港元。計劃撥款以每一項目計算，以3:1的比例撥款 (政府:企業) ，即最多可由政府資助75%項目開支，其餘25%則需由企業自行承擔。需要留意的是，同一時間只接受一個項目申請，而每個項目必須於一年內完成。'
            },
            {
              name: 'keywords',
              content: 'TVP、科技券、科技券申請、科技券服務、TVP service、TVP application service'
            }
          ]
        }
      },
      {
        path: 'case',
        name: 'case',
        component: () => import('@/views/case.vue')
      },
      {
        path: 'caseMore/:id',
        name: 'caseMore',
        component: () => import('@/views/caseMore.vue')
      },
      {
        path: 'DTSPP',
        name: 'DTSPP',
        component: () => import('@/views/DTSPP.vue')
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/hk' // 重定向到默认语言
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  console.log(lang)
  if (!['hk', 'cn', 'en'].includes(lang)) {
    return next('hk')
  }
  i18n.global.locale = lang
  return next()
})

export default router


//vue-i18n选择不同语言的url实现切换语言
