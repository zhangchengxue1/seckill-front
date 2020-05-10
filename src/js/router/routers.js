import  Foo from "../../components/Foo.vue"
import  Bar from "../../components/Bar.vue"
import  Login from "../../components/Login.vue"
import  Register from "../../components/Register.vue"
import  HomeTemplate from "../../components/HomeTemplate.vue"
import  CourseList from "../../components/CourseList.vue"
import  OrderList from "../../components/OrderList.vue"
import  Course from "../../components/Course.vue"

export default [
  { path: '/', component: Login },
  { path: '/bar', component: Bar },
  { path: '/foo', component: Foo },
  { path: '/login', component: Login },
  { path: '/home', component: HomeTemplate,
    children:[
      { path: 'course/list', component: CourseList },
      { path: 'order/list', component: OrderList },
      { path: 'course/:courseNo', component: Course }
    ]
  },
  { path: '/register', component: Register }
  ]
