import Vue from 'vue'
import VueRouter from 'vue-router'
import UserTable from '@/views/UserTable'
import DragbleWords from '@/views/DragbleWords'
import Text from '@/views/Text'
import Checkbox from '@/views/Checkbox'
import Radio from '@/views/Radio'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserTable',
    component: UserTable
  },
  {
    path: '/dragble-words',
    name: 'DragbleWords',
    component: DragbleWords
  },
  {
    path: '/text/:word',
    name: 'Text',
    component: Text,
    props: true
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox
  },
  {
    path: '/radio',
    name: 'Radio',
    component: Radio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
