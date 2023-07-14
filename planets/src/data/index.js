const planets = require('./planets.json')
const axios = require("axios")

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/planets");
        return results.data;
    },
    create: async () => {
        throw Error("Hay un error en la BDD al momento de cear el personaje")
    }
}