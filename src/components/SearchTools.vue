<template>
    <div class="search-controls">
        <label for="searchInput">Search: </label>
        <input name="searchInput" id="searchInput" type="text">
        <button type="submit" @click="search">Go!</button>
    </div>
</template>

<script>
import { bus } from '@/main';
export default {
    name: 'Search Tools',
    methods: {
        search: async function() {
            try {
                let query = document.getElementById('searchInput').value;
                const queryEncoded = encodeURI(query);
                const resp = await fetch(
                    `https://api.themoviedb.org/3/search/multi?api_key=b8ee317aa83128da77a8f9baec68b329&language=en-US&query=${queryEncoded}&page=1&include_adult=false`
                    );
                const movies = await resp.json();
                this.movies = movies.results;

                // emit event to update movies list
                bus.$emit('searchDone', this.movies);
            } catch (e) {
                throw e;
            }
        }
    }
}
</script>

<style scoped>

</style>
