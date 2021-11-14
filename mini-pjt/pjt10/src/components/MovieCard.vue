<template>
  <div>
    <img :src="movieImageSrc" alt="moive_img">
    <h2>{{ movieCard.title }}</h2>
    <h3>{{ movieCard.overview }}</h3>    
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movieCard: Object,
  },
  computed: {
    movieImageSrc: function () {
      return `https://image.tmdb.org/t/p/original/${this.movieCard.poster_path}`
    }
  }
}  
</script>

<style>

</style>