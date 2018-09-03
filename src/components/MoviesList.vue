<template>
    <div>
        <div class="search-controls">
            <input id="searchInput" type="text">
            <button type="submit" @click="searchMovies">Search</button>
        </div>
        <ul>
            <li v-for="movie in movies">
                <Movie :movie="movie" />
            </li>
        </ul>
    </div>
</template>

<script>
import Movie from './Movie.vue'

export default {
    name: 'MoviesList',
    data() {
        return {
            movies: []
        };
    },
    created: function() {
      this.getMovies();  
    },
    methods: {
        getMovies: async function() {
            try {
                const resp = await fetch('https://api.themoviedb.org/3/discover/movie?&sort_by=vote_average.desc&api_key=b8ee317aa83128da77a8f9baec68b329');
                // const resp = await fetch('https://api.ryanallen.ninja/info/businesscard');
                const movies = await resp.json();
                this.movies = movies.results;
            } catch (e) {
                // console.error(e);
            }
        },
        searchMovies: async function() {
            try {
                let query = document.getElementById('searchInput').value;
                const queryEncoded = encodeURI(query);
                const resp = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=b8ee317aa83128da77a8f9baec68b329&language=en-US&query=${queryEncoded}&page=1&include_adult=false`
                    );
                const movies = await resp.json();
                this.movies = movies.results;
            } catch (e) {
                console.error(e);
            }
        }
    },
    components: {
        Movie
    }
}
</script>

<style scoped>
ul {
    display: grid;
    list-style: none;
    padding: 1rem;
    margin: 0;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
}
.search-controls {
    padding: 10px 20px;
}
</style>
