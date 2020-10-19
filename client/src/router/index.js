import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
// Authen
import Login from '@/components/Login'
// Order
import OrderIndex from '@/components/Order/Index'
import OrderCreate from '@/components/Order/CreateOrder'
import OrderEdit from '@/components/Order/EditOrder'
import OrderShow from '@/components/Order/ShowOrder'
// Book
import BookIndex from '@/components/Book/Index'
import BookCreate from '@/components/Book/CreateBook'
import BookEdit from '@/components/Book/EditBook'
import BookShow from '@/components/Book/ShowBook'
//indexAdmin
import IndexAdmin from '@/components/IndexAdmin'
//MenuBook
import MenuBook from '@/components/MenuBook'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // authen
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // Book
    {
      path: '/books',
      name: 'books',
      component: BookIndex
    },
    {
      path: '/book/create',
      name: 'book-create',
      component: BookCreate
    },
    {
      path: '/book/edit/:bookId',
      name: 'book-edit',
      component: BookEdit
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: BookShow
    },
    // Order
    {
      path: '/orders',
      name: 'orders',
      component: OrderIndex
    },
    {
      path: '/order/create',
      name: 'order-create',
      component: OrderCreate
    },
    {
      path: '/order/edit/:orderId',
      name: 'order-edit',
      component: OrderEdit
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: OrderShow
    },
    // admin
    {
      path: '/IndexAdmin',
      name: 'IndexAdmin',
      component: IndexAdmin
    },
    // menu
    {
      path: '/MenuBook',
      name: 'MenuBook',
      component: MenuBook
    }
  ]
})