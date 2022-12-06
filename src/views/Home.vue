<template>
  <div>
    <div @click="goTodo">goTodo</div>
  </div>
</template>

<script>
  export default {
    name: "Home.vue",
    methods: {
      goTodo() {
        this.$router.push({
          path: '/todo'
        })
      }
    }
  }
</script>

<style scoped>

</style>
