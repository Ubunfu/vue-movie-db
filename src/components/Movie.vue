<template>
    <div>
        <router-link :to="moviePath">
            <img :src="posterImgUrl" :alt="movie.title" />  
        </router-link>
    </div>
</template>

<script>
const POSTER_BASE = 'https://image.tmdb.org/t/p/w300';
export default {
    name: 'Movie',
    props: ['movie'],
    computed: {
        posterImgUrl: function() {
            return `${POSTER_BASE}${this.movie.poster_path}`;
        },
        moviePath: function() {
            return `/movies/${this.movie.id}`;
        }
    }
};
</script>

<style scoped>
img {
    box-shadow: 0 0 35px black;
}
</style>
