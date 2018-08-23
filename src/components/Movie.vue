<template>
    <div>
        <p>
            <strong>{{movie.title}}</strong> - {{movie.vote_average}}/10
        </p>
        <img :src="posterImgUrl" :alt="movie.title" />  
    </div>
</template>

<script>
const POSTER_BASE = 'https://image.tmdb.org/t/p/w300';
export default {
    props: ['movie'],
    computed: {
        posterImgUrl: function() {
            return `${POSTER_BASE}${this.movie.poster_path}`;
        }
    }
};
</script>

<style scoped>
img {
    box-shadow: 0 0 35px black;
}
</style>
