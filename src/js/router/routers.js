import  Foo from "../../components/Foo.vue"
import  Bar from "../../components/Bar.vue"
import  Login from "../../components/Login.vue"
import  Register from "../../components/Register.vue"

export default [
  { path: '/', component: Login },
  { path: '/bar', component: Bar },
  { path: '/foo', component: Foo },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
  ]
