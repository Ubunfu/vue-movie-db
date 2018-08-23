<template>
    <ul>
        <li v-for="movie in movies">
            <Movie :movie="movie" />
        </li>
    </ul>
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
        getMovies: async function () {
            try {
                // const resp = await fetch('https://api.themoviedb.org/3/movie/550?api_key=b8ee317aa83128da77a8f9baec68b329');
                const resp = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=b8ee317aa83128da77a8f9baec68b329');
                // const resp = await fetch('https://api.ryanallen.ninja/info/businesscard');
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
</style>
