<script>
import { store } from '../data/store.js';
export default {
  name: 'AppCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

  
<template>
  <div class="col-md-4">
    <h3>{{ item.title || item.name }}</h3>
    <img v-if="item.poster_path" :src="'https://image.tmdb.org/t/p/w342' + item.poster_path" alt="Poster">
    <img v-else src="/src/img/No-Image-Placeholder.png" alt="Placeholder">
    <p>Lingua: <img :src="`/src/img/flags/${item.original_language}.png`" alt="flag"></p>
    <p> Titolo Originale:{{ item.original_title || item.original_name }}</p>
    <p>
      Voto:
      <i v-for="index in 5" :key="index" class="fa"
        :class="{ 'fa-star': index <= Math.round(item.vote_average / 2), 'far fa-star': index > Math.round(item.vote_average / 2) }"></i>
    </p>


  </div>
</template>

<style>
.fa-star {
  color: orange;
}
.far fa-star {
  color: grey;
}

</style>
