<template>
  <div id="
  foo">
    foo -----{{getUsername}}
    <button @click = "changeUsername">change username to 'foo'</button>
  </div>
</template>

<script>

export default {
  name: 'foo',
  data () {
    return {
    }
  },
  methods:{
      changeUsername: function () {
        this.$store.dispatch('changeMyUsername',{username:'foo'})
        this.$router.push('bar')
      }
  },
  computed:{
      getUsername:function () {
        return this.$store.getters.getUsername
      }
  }
}
</script>

<style>

</style>
