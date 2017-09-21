import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Place from '@/components/Place'
import Register from '@/components/Register'
import Events from '@/components/Events'
import Coming from '@/components/Coming'
import Docker from '@/components/Docker'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/neden', name: 'About', component: About },
    { path: '/mekan', name: 'Place', component: Place },
    { path: '/iletisim', name: 'Contact', component: Contact },
    { path: '/kayit', name: 'Register', component: Register},
    { path: '/etkinlikler-ve-konusmacilar', name: 'Events', component: Events},

    { path: '/gelistirme-icin-docker', name: 'gelistirme-icin-docker', component: Docker},
    { path: '/proje-yonetimi', name: 'proje-yonetimi', component: Coming},
    { path: '/vuejs-firebase-blog-kodlama', name: 'vuejs-firebase-blog-kodlama  ', component: Coming},
    { path: '/pwa-yayinlama', name: 'pwa-yayinlama', component: Coming},
    { path: '/mobil-masaustu-yayinlama', name: 'mobil-masaustu-yayinlama', component: Coming},
  ]
})

// resource -> https://router.vuejs.org/en/advanced/meta.html

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = firebase.auth().currentUser
    if (!user) {
      next({
        path: '/'
      });
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
