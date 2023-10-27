
const wordsRandom = (longitud) => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let palabra = '';
    for(let i = 0; i <= longitud; i++){
        const indice = Math.floor(Math.random() *  caracteres.length)
        palabra += caracteres.charAt(indice)
    }
    return palabra;
}

export default wordsRandom;