import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)
export default new Vuex.Store({

  state: {
    movieCards: [],
    randomMovieCard: [],
  },
  mutations: {
    LOAD_MOVIE_CARDS: function (state, results) {
      state.movieCards = results
      console.log(_.sample(results))
      // const randomMovie = _.sample(results)
      // state.randomMovieCard = randomMovie
    },
    LOAD_RANDOM_MOVIE: function (state, movie) {
      state.randomMovieCard = movie
    }
  },
  actions: {
    loadMovieCards: function ({ commit }) {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: {
          api_key: '5c0473d3908a00a4da0ae0ec8c035283',
          language: 'ko-KR',
        }
      })
      .then((res) => {
        // console.log(res)
        commit('LOAD_MOVIE_CARDS', res.data.results)
      })

    },
    loadRandomMovie: function ({ commit }) {
      const randomMovie = _.sample(this.state.movieCards)
      commit('LOAD_RANDOM_MOVIE', randomMovie)
      

    }
  },
  modules: {
  }
})
