<template>
  <div id="portal-template">
      <img class="portal-logo" src="../assets/images/logo.png">
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
      </div>
  </div>
</template>

<script>
  import qs from "qs"
export default {
  name: 'login',
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
          self.axios.post('/api/login',qs.stringify({username:this.user.username,password:this.user.password}))
            .then(function (response) {
              var result=response.data;
              if(result.code==200){
                self.$message.success(result.message)
                self.$router.push("/foo")
              }else{
                self.$message.error(result.message)
              }
              console.log(response);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
              self.$message.error("系统错误~")
            })
        }
      });
    },
  }
}
</script>

<style>
@import "../assets/css/portal-template.css";
</style>
