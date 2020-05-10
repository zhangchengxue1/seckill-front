<template>
  <div id="course">
    course  ---{{getUsername}}
  </div>
</template>

<script>
export default {
  name: 'course',
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
