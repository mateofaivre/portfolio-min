export function slugify( string, isArray = false ) {
	
	if ( !isArray ) {
		return stringToSlug( string );
	} else {
		const newArray = [];
		string.map( item => {
			newArray.push( stringToSlug( item )
			)
		} );
		return newArray;
	}
}


function stringToSlug( string ) {
	return string.normalize( 'NFD' )
		.replace( /[\u0300-\u036f]/g, '' )
		.toLowerCase()
		.replace( /\s+/g, '-' )
		.replace( /&/g, '-and-' )
		.replace( /[^\w\-]+/g, '' )
		.replace( /\-\-+/g, '-' );
}
