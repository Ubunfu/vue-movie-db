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
                    <li>{{movie.vote_average}}/10 ({{movie.vote_count}} reviews)</li>
                    <li>US Rating: {{usRating}}</li>
                    <li>{{movie.runtime}} min</li>
                    <li>{{genres}}</li>
                    <li>Spoken Languages: {{spokenLangs}}</li>
                </ul> 
            </div>
            <div class="description">
                <div class="tagline">
                    <p>{{movie.tagline}}</p>
                </div>
                <div class="overview">
                    <p>{{movie.overview}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/Loading';

const BACKDROP_BASE = 'https://image.tmdb.org/t/p/w1280';
const IMDB_BASE = 'https://www.imdb.com/title'
const TMDB_API_BASE = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = 'b8ee317aa83128da77a8f9baec68b329';

export default {
    name: 'MovieDetail',
    data() {
        return {
            movie: {},
            releaseDates: {},
            isMovieLoading: true,
            isReleaseDateLoading: true
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
        },
        spokenLangs() {
            let languages = '';
            this.movie.spoken_languages.forEach(lang => {
                if(languages != ''){
                    languages = `${languages}, ${lang.name}`;
                } else {
                    languages = `${lang.name}`;
                }
            });
            return languages;
        },
        genres() {
            let genres = '';
            this.movie.genres.forEach(genre => {
                if(genres != ''){
                    genres = `${genres}, ${genre.name}`;
                } else {
                    genres = `${genre.name}`;
                }
            });
            return genres;
        },
        usRating() {
            let usReleasesFound = false;
            let usReleases;
            let usRatingFound = false;
            let usRating;
            let i = 0;

            // Find the US Release Dates
            while(!usReleasesFound && (i < this.releaseDates.results.length)) {
                if(this.releaseDates.results[i].iso_3166_1 == 'US') {
                    usReleases = this.releaseDates.results[i].release_dates;
                    usReleasesFound = true;
                    i = 0;
                } else {
                    i++;
                }
            }

            // If we found US releases, check for one with a Rating
            if(usReleasesFound) {
                // Find a populated rating 
                while(!usRatingFound && (i < usReleases.length)) {
                    if(usReleases[i].certification != ''){
                        usRating = usReleases[i].certification;
                        usRatingFound = true;
                    } else {
                        i++;
                    }
                }
            }

            // If we were not able to find a US Rating, set default text
            if(!usRatingFound) {
                usRating = 'N/A';
            }

            return usRating;
            
        },
        isLoading() {
            let loading = true;
            if(!this.isMovieLoading && !this.isReleaseDateLoading) {
                loading = false;
            }
            return loading;
        }
    },  
    created: function() {
        this.getReleaseDates();
        this.getMovie();
        // return this.getMovie();
    },
    methods: {
        getMovie: async function() {
            try {
                const resp = await fetch(
                    `${TMDB_API_BASE}/movie/${this.$route.params.id}?api_key=${TMDB_API_KEY}`
                    );
                const movie = await resp.json();
                this.movie = movie;
                this.isMovieLoading = false;
            } catch (e) {
                throw e;
            }
        },
        getReleaseDates: async function() {
            try {
                const resp = await fetch(`${TMDB_API_BASE}/movie/${this.$route.params.id}/release_dates?api_key=${TMDB_API_KEY}`);
                const releaseDates = await resp.json();
                this.releaseDates = releaseDates;
                this.isReleaseDateLoading = false;
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
.description {
    padding: 10px 0;
}
.tagline {
    font-weight: bold;
}
.movie-wrapper {
    position: relative;
    padding-top: 60vh;
}
.movie-info {
    background: rgba(0, 0, 0, 0.7);
    padding: 20px 10%;
    text-align: left;
}
.highlights {
    padding: 3px 0;
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