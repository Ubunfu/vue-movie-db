<template>
    <div class="body">
        <h1>
            {{movie.title}}
        </h1>
    </div>
</template>

<script>
export default {
    name: 'Movie Detail',
    computed: {
        
    },
    data() {
        return {
            movie: {}
        }
    },
    created: function() {
        return this.getMovie();
    },
    methods: {
        getMovie: async function() {
            try {
                const resp = await fetch(
                    `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=b8ee317aa83128da77a8f9baec68b329`
                    );
                const movie = await resp.json();
                this.movie = movie;
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>
.body {
    background: url();
}
</style>