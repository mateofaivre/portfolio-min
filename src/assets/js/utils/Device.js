export function isMobile() {
	return window.matchMedia( '(max-width: 960px)' ).matches && window.matchMedia( '(pointer: coarse)' ).matches;
}
