<template xmlns="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
    <img src="./assets/logo.png">
    <!--<h1 v-if="flag>3">{{ msg }}</h1>-->
    <!--<h1 v-else-if="flag==1">1111</h1>-->
    <!--<h1 v-else>222</h1>-->
    <!--<h1 v-for="item in list">{{item}}</h1>-->
    <h1 v-for="(item,index) in list " :key="index">{{item}} - {{index}}</h1>

    <hr>
    <button-counter :propName="a">
      <span>
        4564647
      </span>
    </button-counter>

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

    <hr>
    输入名字:<input v-model="name"> <button @click="addUser" >添加</button>
    <ul>
      <li v-for="(item ,index) in userList" :key="index">
        <span v-if="index % 3 == 0" class="red">{{item}}</span>
        <span v-else-if="index % 3 == 1" class="green">{{item}}</span>
        <span v-else class="blue">{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import ButtonCounter from './components/ButtonCount.vue'
 export default {
  name: 'app',
   components:{
     ButtonCounter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      type: 'button',
      firstName: 'zhang',
      lastName: 'andy',
      fullNameWatch:'zhang andy',
      flag:4,
      list:[111,222,333],
      name:'',
      userList:[],
      a:'AAA'
    }
  },
  methods:{
     addUser(){
          this.userList.push(this.name);
          this.name='';
      },
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
  .red{
    background-color: #ff0000;
  }
  .green{
    background-color: #00ff00;
  }
  .blue{
    background-color: #0000ff;
  }



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

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

a {
  color: #42b983;
}
</style>
