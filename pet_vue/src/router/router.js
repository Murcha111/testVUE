import { createWebHistory, createRouter} from "vue-router"
import Main from '@/Pages/Main'
import PostPage from '@/Pages/PostPage'
import Detail from '@/Pages/Detail'
const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage

  },
  {
    path: '/detail',
    component: Detail

  },
]

 //регистрация роутера
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
