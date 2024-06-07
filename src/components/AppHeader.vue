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
            const movieResponse = await axios.get(`https://${this.store.apiMovie}&query=${this.store.searchTitle}`);
            this.store.filmArray = movieResponse.data.results;
            console.log(this.store.filmArray);

            const seriesResponse = await axios.get(`https://${this.store.apiSeries}&query=${this.store.searchTitle}`);
            this.store.seriesArray = seriesResponse.data.results;
            console.log(this.store.seriesArray);
        },
    },
    //computed for comined array of series and movie

    computed : {
        combinedArray() {
            return [...this.store.filmArray, ...this.store.seriesArray];
            console.log(this.store.combinedArray);
        }
    }
 
};
</script>
<template>
    <div class="navbar p-4 d-flex">


        <div class="col-md-6">
            <!-- Logo -->
            <img src="/src/img/logo-boolflix.png" alt="Logo" class="logo">
        </div>
        <div class="col-md-3 d-flex justify-content-end">
            <!-- Input di ricerca -->
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cerca" v-model="store.searchTitle">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="search">Cerca</button>
                </div>
            </div>
        </div>
    </div>


    <div class="d-flex flex-row overflow-auto">
        <AppCard v-for="(item, index) in combinedArray" :key="index" :item="item" />
    </div>




</template>
<style>
.navbar {
    background-color: #1a1a1a;
    color: white;
}



.logo {
    width: 200px;
    height: 100px;


}

/* cambio colore button */
.btn-outline-secondary {
    color: white;
    border-color: white;
}
.overflow-auto {
    overflow-x: auto;
    white-space: nowrap;
}


</style>