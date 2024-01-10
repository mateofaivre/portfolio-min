import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router';
import $ from 'cash-dom';
import store from './store';
import VueGtag from 'vue-gtag';

// Gsap and plugins
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

import Scroll from '@/assets/js/lib/Scroll';

gsap.registerPlugin( SplitText, ScrollTrigger, Observer );
globalThis.gsap = gsap;
globalThis.$ = $;
globalThis.SplitText = SplitText;
globalThis.ScrollTrigger = ScrollTrigger;
globalThis.Observer = Observer;

const app = createApp( App );

app.use( router );
app.use( store );

app.use( VueGtag, {
	config: {
		id: 'G-V6LSRTZ4E6',
		anonymize_ip: true,
	},
	appName: 'Portfolio Min',
	pageTrackerScreenviewEnabled: true,
}, router );

// store.dispatch( 'loadFonts' );

app.directive( 'add-arrow-link', {
	mounted( el ) {
		let links = el.querySelectorAll( '.rich__text a:not(.message__content--button-link)' );

		links.forEach( ( link ) => {
			const nextNode = link.nextSibling;
			let firstCharAfterLink = null;
			const valuesToIgnore = [ '.',
				',',
				null,
				undefined ];

			link.className = 'link__external';

			if ( nextNode ) {
				firstCharAfterLink = nextNode.textContent.trim()[ 0 ];
			}
			if ( ! valuesToIgnore.includes( firstCharAfterLink ) ) {
				link.classList.add( 'link__external--spaced' );
			}

			link.innerHTML += '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.70523 0.664336L4.70523 8.47434L1.12523 4.89434C0.865234 4.63434 0.445234 4.63434 0.185234 4.89434C-0.0747659 5.15434 -0.0747658 5.57434 0.185234 5.83434L4.90523 10.5643C4.96523 10.6243 5.04523 10.6743 5.12523 10.7043C5.28523 10.7743 5.47523 10.7743 5.63523 10.7043C5.71523 10.6743 5.79523 10.6243 5.85523 10.5643L10.5652 5.85434C10.8252 5.59434 10.8252 5.17434 10.5652 4.91434C10.3052 4.65434 9.88523 4.65434 9.62523 4.91434L6.04523 8.49434L6.04523 0.674336C6.04523 0.304336 5.74523 0.00433611 5.37523 0.00433612C5.00523 0.00433614 4.70523 0.304336 4.70523 0.674336L4.70523 0.664336Z" fill="currentColor"/></svg>';
		} );
	},
} );

app.mount( '#app' );

new Scroll();

globalThis.easeDefaultDuration = parseFloat( getComputedStyle( document.querySelector( 'html' ) ).getPropertyValue( '--ease-duration' ) );
