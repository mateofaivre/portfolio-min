/**
 * Imports
 */
import Lenis from '@studio-freight/lenis';


/**
 * Scroll manager
 */
export default class Scroll {
	constructor() {
		this.init();
	}
	
	
	/**
	 * Initialize the class
	 */
	init() {
		/**
		 * Disable scroll restoration
		 *
		 * @see https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration
		 */
		if ( 'scrollRestoration' in history ) {
			history.scrollRestoration = 'manual';
		}
		
		this.initSmooth();
		
		gsap.ticker.add( this.#raf.bind( this ) );
	}
	
	
	/**
	 * Creates the scroll smoother
	 */
	initSmooth() {
		this.smooth = new Lenis();
	}
	
	
	#raf( time ) {
		this.smooth.raf( time );
	}
};
