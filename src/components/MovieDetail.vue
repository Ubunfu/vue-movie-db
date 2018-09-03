<template>
    <Loading v-if="isLoading == true"/>
    <div v-else class="movie-wrapper" :style="wrapperStyles">
        <div class="movie-info">
            <h1>
                <a class="title-link" :href="imdbLink">
                    {{movie.title}}
                </a>
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
import Loading from '@/components/Loading';

const BACKDROP_BASE = 'https://image.tmdb.org/t/p/w1280';
const IMDB_BASE = 'https://www.imdb.com/title'

export default {
    name: 'Movie Detail',
    data() {
        return {
            movie: {},
            isLoading: true
        }
    },
    computed: {
        wrapperStyles() {
            return {
                'background-image': `url(${BACKDROP_BASE}/${this.movie.backdrop_path})`,
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            }
        },
        imdbLink() {
            return `${IMDB_BASE}/${this.movie.imdb_id}`;
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
                this.isLoading = false;
            } catch (e) {
                throw e;
            }
        }
    },
    components: {
        Loading
    }
}
</script>

<style scoped>
.movie-wrapper {
    position: relative;
    padding-top: 60vh;
}
.movie-info {
    background: rgba(0, 0, 0, 0.7);
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
a:link, a:visited {
    color: inherit;
    text-decoration: none;
}
a:hover {
    color: #ccc;
}
</style>