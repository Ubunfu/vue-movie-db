<template>
    <div>
        <SearchTools />
        <ul>
            <li :key="movie.id" v-for="movie in movies">
                <Movie :movie="movie" />
            </li>
        </ul>
    </div>
</template>

<script>
import { bus } from '@/main'
import Movie from '@/components/Movie'
import SearchTools from '@/components/SearchTools'

export default {
    name: 'MoviesList',
    data() {
        return {
            movies: []
        };
    },
    created: function() {
        bus.$on('searchDone', searchResults => {
            this.movies = searchResults;
        });
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
        }
    },
    components: {
        Movie,
        SearchTools
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
.search-controls input { 
    margin: 0 5px 0 0;
}
.search-controls button {
    width: 50px;
    height: 21px;
}
</style>
