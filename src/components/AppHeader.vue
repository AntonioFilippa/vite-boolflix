<script>
import axios from 'axios';
import { store } from '../data/store.js';
import AppCard from './AppCard.vue';

export default {
        name: 'AppHeader',
        components: {
                AppCard,
        },
        data() {
                return {
                        store: store,
                        searchText: '',
                };
                
        },
        methods: {
                async search() {
             const response = await axios.get(`https://${this.store.apiMovie}&query=${this.store.searchTitle}`);
            this.store.filmArray = response.data.results;
            console.log(this.store.filmArray);
        },
    },
 
};
</script>
<template>
    <div>

        <div class="input-group mb-3">
        
            <input type="text" class="form-control" placeholder="Cerca" v-model="store.searchTitle">
        
            <div class="input-group-append">
        
                <button class="btn btn-outline-secondary" type="button" @click="search">Cerca</button>
    
            </div>
  
        </div>

         <div class="row">
      
            <AppCard class="col-md-4" v-for="movie in store.filmArray" :key="movie.id" :movie="movie" />
    
        </div>

    </div>
   
  
  
</template>
