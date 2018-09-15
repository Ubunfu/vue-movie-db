<template>
    <!-- @submit.prevent is an Event Modifier that prevents the page from
            being reloaded when the form is submitted -->
    <form class="search-controls" @submit.prevent="search">
        <input name="searchInput" id="searchInput" type="text" placeholder="Quick search...">
        <input type="submit" style="display: none"/>
    </form>
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
/* Style the quick search text box */
input[type=text] {
    padding: 0;
    height: 25px;
    position: relative;
    left: 0;
    outline: none;
    border: none;
    /* border-color: rgba(0,0,0,.15); */
    border-bottom: 1px solid #2ce6d6;
    background-color:inherit;
    font-size: 16px;
    color: inherit;
    width: 25%;
    
}
::placeholder {
    color: inherit;
}
</style>
