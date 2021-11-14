<template>
  <div>
    <h1>Home</h1>
    <movie-card
      v-for="movieCard in movieCards"
      :key="movieCard.id"
      :movieCard="movieCard"
    ></movie-card>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    MovieCard,
  },
  created: function () {
    this.$store.dispatch('loadMovieCards')
  },
  computed: {
    ...mapState(['movieCards'])
  }
}
</script>

<style>

</style>
