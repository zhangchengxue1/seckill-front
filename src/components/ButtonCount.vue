<template >
  <div id="button-counter" >
      <slot></slot>
      <button @click="count++">------{{propName}}点击了我{{count}}</button>
  </div>
</template>

<script>
  export default {
    name: 'button-counter',
    props:['propName'],
    data () {
      return {
          count:0
      }
    }


  }
</script>

<style>

</style>
