<template>
  <PortalTemplate>
      <div id="login">
        <el-form label-position="top" label-width="80px" :model="user" :rules="rules" ref="ruleForm" >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="user.username" placeholder="输入用户名  " ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input  type="password" v-model="user.password" placeholder="输入密码 " ></el-input>
          </el-form-item>
          <el-button class="submit-btn" type="primary" @click="login('ruleForm')" >登入</el-button>
        </el-form>
        <router-link to="/register"><el-button type="text" icon="el-icon-edit">去注册页</el-button></router-link>
      </div>
  </PortalTemplate>
  </template>

<script>
  import qs from "qs"
  import PortalTemplate from './PortalTemplate'
export default {
  name: 'login',
  components: {
    PortalTemplate
  },
  data () {
    return {
        user:{
            username:'',
            password:''
        },
        msg: 'Welcome to Your Vue.js App',
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码 ', trigger: 'blur' }
        ]
      },
    }
  },
  methods:{
    login(formName) {
        var self = this ;
      self.$refs[formName].validate((valid) => {
        if (valid) {
//          self.$message.success(result.message)
//          self.$router.push("/foo")
          self.$store.dispatch('login',{username:self.user.username,password:self.user.password})
            .then((response) => {
              self.$message.success(response.data.message)
              self.$router.push('/home/course/list');
            })
            .catch((response) => {
              self.$message.error(response.data.message)
            })
        }
      });
    },
  }
}
</script>

<style>
</style>
