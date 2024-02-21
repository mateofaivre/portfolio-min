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
			menuName: window.navigator.language === 'fr' ? 'Accueil' : 'Home',
			component: HomeView,
		},
		{
			path: window.navigator.language === 'fr' ? '/projets' : '/projects',
			name: 'Projects',
			menuName: window.navigator.language === 'fr' ? 'Projets' : 'Projects',
			component: ProjectsView,
		},
		{
			path: window.navigator.language === 'fr' ? '/projets/:slug' : '/projects/:slug',
			name: 'Project',
			menuName: window.navigator.language === 'fr' ? 'Projet' : 'Project',
			component: ProjectView,
			ignoreInMenu: true,
		},
	],
} );

router.beforeEach( ( to, from, next ) => {
	store.commit( 'setLoading', true );
	next();
	document.querySelector( '#loader' ).classList.remove( 'loader--hidden' );
} );

router.afterEach( ( to, from ) => {
	if ( from.name === 'Project' ) {
		store.commit( 'setProject', null );
	}
	store.commit( 'setLoading', false );

	const delayDuration = store.state.isFirstLoad ? 0.3 : 0;
	gsap.delayedCall( delayDuration, () => {
		document.querySelector( '#loader' ).classList.add( 'loader--hidden' );
	} );

	if ( store.state.isFirstLoad ) {
		store.commit( 'setFirstLoading', false );
	}
} );

export default router;
