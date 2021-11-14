<template>
  <div>
    <h1>MyListForm</h1>
    <input type="text" v-model.trim="movieTitle" @keypress.enter="createMyList">
    <button @click="createMyList">Add</button>
  </div>
</template>

<script>
export default {
  name: 'MyListForm',
  data: function () {
    return {
      movieTitle: '',
    }
  },
  methods: {
    createMyList: function () {
      const movieItem = {
        title: this.movieTitle
      }
      if (this.movieTitle) {
        this.$store.dispatch('createMyList', movieItem)
      }
      this.movieTitle = ''
    }
  }
}
</script>

<style>

</style>
