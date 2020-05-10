<template>
  <div id="order-list">
    order-list  ---{{getUsername}}
  </div>
</template>

<script>
export default {
  name: 'order-list',
  data () {
    return {
    }
  },
  computed:{
      getUsername : function () {
        return this.$store.getters.getUsername
      }
  }
}
</script>

<style>

</style>
