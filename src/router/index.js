import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ProjectView from '../views/ProjectView.vue';
import store from '@/store';

const router = createRouter( {
	history: createWebHistory( import.meta.env.BASE_URL ),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomeView,
		},
		{
			path: '/projects',
			name: 'Projects',
			component: ProjectsView,
		},
		{
			path: '/projects/:slug',
			name: 'Project',
			component: ProjectView,
			ignoreInMenu: true,
		},

		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	// component: () => import('../views/AboutView.vue')
		// },
	],
} );

router.beforeEach( ( to, from, next ) => {
	store.commit( 'setLoading', true );
	next();
	document.querySelector('#loader').classList.remove('loader--hidden');
} );

router.afterEach( ( to, from ) => {
	if ( from.name === 'Project' ) {
		store.commit( 'setProject', null );
	}
	store.commit( 'setLoading', false );
	document.querySelector('#loader').classList.add('loader--hidden');
} );

export default router;
