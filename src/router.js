import Vue from 'vue';
import Router from 'vue-router';

// Import components I want to route to
import MoviesList from '@/components/MoviesList';
import MovieDetail from '@/components/MovieDetail';

Vue.use(Router);

// Define a new Router
// Make it use HTML 5 history mode
// TODO check out the other modes too
// We have a list of routes set up, each one rendering a given component.
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Movies List',
            component: MoviesList
        },
        {
            path: '/movies/:id',
            name: 'Movie Detail',
            component: MovieDetail
        }
    ]
})