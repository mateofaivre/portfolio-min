import { createStore } from 'vuex';
import axios from 'axios';
import { slugify } from '@/assets/js/utils/Helpers';

const API_URL = import.meta.env.VITE_STRAPI_API_URL;

export default createStore( {
	state: {
		isFirstLoad: true,
		isLoading: true,
		fontsLoaded: false,
		home: [],
		projects: [],
		project: [],
		options: [],
		lang: 'en',
	},
	mutations: {
		setLang( state, lang ) {
			state.lang = lang;
		},
		setFirstLoading( state, status ) {
			state.isFirstLoad = status;
		},
		setLoading( state, status ) {
			state.isLoading = status;
		},
		setFontsLoaded( state, status ) {
			state.fontsLoaded = status;
		},
		setHome( state, home ) {
			state.home = home;
		},
		setProjects( state, projects ) {
			state.projects = projects;
		},
		setProject( state, projects ) {
			state.project = projects;
		},
		setOptions( state, options ) {
			state.options = options;
		},
	},
	actions: {
		setLang( { commit }, lang ) {
			commit( 'setLang', lang );
		},
		loadFonts( { commit } ) {
			if ( 'fonts' in document ) {
				Promise.race( [
					Promise.all( [
						document.fonts.load( '16px Magnat Text' ),
						// document.fonts.load( '16px Magnat Head' )
					] ),
					new Promise( resolve => setTimeout( resolve, 8000 ) ), // Avoid to stay blocked if a font is not available
				] ).then( () => {
					commit( 'setFontsLoaded', true );
				} ).catch( () => {
					commit( 'setFontsLoaded', false );
				} );
			}
		},
		fetchHome( {
					   commit,
					   state,
				   } ) {
			axios.get( `${ API_URL }/home?locale=${ state.lang }&populate=deep` )
				.then( response => {
					commit( 'setHome', response.data );
				} )
				.catch( error => {
					console.error( error );
					commit( 'setHome', [] );
				} );
		},
		fetchProjects( {
						   commit,
						   state,
					   } ) {
			axios.get( `${ API_URL }/project?locale=${ state.lang }&populate=deep` )
				.then( response => {
					commit( 'setProjects', response.data );
				} )
				.catch( error => {
					console.error( error );
					commit( 'setProjects', [] );
				} );
		},
		fetchProject( {
						  commit,
						  state,
					  }, projectSlug ) {
			axios.get( `${ API_URL }/project?locale=${ state.lang }&populate=deep` )
				.then( response => {
					const projectItems = response.data.data?.attributes?.projects_item;

					const projects = {};

					projects.project = projectItems.find( item => slugify( item.name ) === projectSlug );
					const specificProjectIndex = projectItems.indexOf( projects.project );

					if ( specificProjectIndex > 0 ) {
						projects.prevProject = projectItems[ specificProjectIndex - 1 ];
					} else {
						projects.prevProject = projectItems[ projectItems.length - 1 ];
					}
					if ( specificProjectIndex < projectItems.length - 1 ) {
						projects.nextProject = projectItems[ specificProjectIndex + 1 ];
					} else {
						projects.nextProject = projectItems[ 0 ];
					}

					commit( 'setProject', projects );
				} )
				.catch( error => {
					console.error( error );
					commit( 'setProject', {} );
				} );
		},
		fetchOptions( {
						  commit,
						  state,
					  } ) {
			axios.get( `${ API_URL }/option?locale=${ state.lang }&populate=deep` )
				.then( response => {
					commit( 'setOptions', response.data );
				} )
				.catch( error => {
					console.error( error );
					commit( 'setOptions', [] );
				} );
		},
	},
} );
