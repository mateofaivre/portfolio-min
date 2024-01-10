async function importSvg( name ) {
	try {
		const svgModule = await import(`../../svg/${name}.svg`);
		return svgModule.default;
	} catch ( e ) {
		console.error( 'Erreur lors de l\'importation du SVG:', e );
		return null;
	}
}


export default importSvg;
