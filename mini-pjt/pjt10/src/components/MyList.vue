<template>
  <div>
    <h1>MyList</h1>
      <my-list-item
        v-for="(title, idx) in movieTitle"
        :title="title"
        :key="idx"
      ></my-list-item>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import MyListItem from '@/components/MyListItem.vue'

export default {
  name: 'MyList',
  components: {
    MyListItem,
  },
  computed: {
    ...mapState([
      'movieTitle'
    ])
  }
}
</script>

<style>

</style>
