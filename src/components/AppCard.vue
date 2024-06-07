<script>
import { store } from '../data/store.js';
export default {
  name: 'AppCard',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

  
<template>
  <div class="col-md-4">
    <h2>{{ movie.title }}</h2>
    <p>Titolo Originale: {{ movie.original_title }}</p>
    <p>Lingua: {{ movie.original_language }}</p>
    <p>Voto: {{ movie.vote_average }}</p>
  </div>
</template>

