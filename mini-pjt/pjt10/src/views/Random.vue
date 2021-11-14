<template>
  <div>
    <h1>Random</h1>
    <button @click="randomPick">PICK</button>
    <hr>
    <img v-if="picked === true" :src="randomMovieImageSrc" alt="moive_img">
    <h2 v-if="picked === true" >{{randomMovieCard.title }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import _ from 'lodash'

export default {
  name: 'Random',
  data: function () {
    return {
      picked: false,
    }
  },
  methods: {
    randomPick: function () {
      this.picked = !this.picked
    }
  },
  created: function () {
    this.$store.dispatch('loadRandomMovie')
  },
  computed: {
    ...mapState(['randomMovieCard']),
    // 1) 원래 있던거 map으로 사용가능, 2) 무조건 가져온거를 쓸 때는 this를 잊지말기
    
    randomMovieImageSrc: function () {
      return `https://image.tmdb.org/t/p/original/${this.randomMovieCard.poster_path}`
    },    
  }
}
</script>

<style>

</style>
