<template>
    <div class="movie-wrapper" :style="styles">
        <div class="movie-info">
            <h1>
                {{movie.title}}
            </h1>
            <div class="highlights">
                <ul>
                    <li>{{movie.release_date}}</li>
                    <li>{{movie.vote_average}}/10 ({{movie.vote_count}})</li>
                </ul> 
            </div>
            <p>
                {{movie.overview}}
            </p>
        </div>
    </div>
</template>

<script>
const BACKDROP_BASE = 'https://image.tmdb.org/t/p/w1280';
export default {
    name: 'Movie Detail',
    computed: {
        
    },
    data() {
        return {
            movie: {}
        }
    },
    computed: {
        styles() {
            return {
                'background-image': `url(${BACKDROP_BASE}/${this.movie.backdrop_path})`,
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            }
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
.movie-wrapper {
    position: relative;
    padding-top: 50vh;
}
.movie-info {
    background: rgba(0, 0, 0, 0.4);
    padding: 20px 10%;
    text-align: left;
}
.highlights ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.highlights ul li {
    display: inline;
    padding: 0 25px 0 0;
}
</style>