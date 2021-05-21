/**
 * Combines a 'now' timestamp with a random letter to create a strong identifier
 *
 * @returns {string} a string identifier
 */
export const createId = () => {
    const randomLetter = String.fromCharCode( 65 + Math.floor( Math.random() * 26 ) ); // eslint-disable-line
    return `${ randomLetter }${ Date.now() }`;
};