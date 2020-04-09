<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <!--<input v-bind:type="type" v-bind:value="msg">-->
    <!--<input :value="msg">-->
    <input v-model="msg">
    <!--<button v-on:click="changeMsg" >click me</button>-->
    <button @click="changeMsg" >click me</button>
    <hr>
    firstName: <input v-model="firstName"><br>
    lastName: <input v-model="lastName"> <br>
    fullName: {{getFullName()}}<br>
    fullName: {{fullName}}<br>
    fullNameWatch: {{fullNameWatch}}<br>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      type: 'button',
      firstName: 'zhang',
      lastName: 'andy',
      fullNameWatch:'zhang andy'
    }
  },
  methods:{
      changeMsg(){
         this.msg = 'andy'
      },
      getFullName(){
          return this.firstName+"  "+this.lastName
      }
  },
  computed:{
      fullName(){
        return this.firstName+"  "+this.lastName
      }
  },
  watch:{
    firstName:function (val) {
      this.fullNameWatch=val+'  '+this.lastName;
    },
    lastName:function (val) {
      this.fullNameWatch=this.lastName+'  '+ val;
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
