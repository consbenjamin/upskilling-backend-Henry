const axios = require("axios")
const films = require('./films.json')

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/films");
        return results.data;
    },
    create: async () => {
        throw Error("Hay un error en la BDD al momento de cear la pelicula")
    }
}