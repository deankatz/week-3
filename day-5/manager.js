//Each method should also invoke the renderer for its own section

class APIManager {
    constructor(renderer) {
        this.renderer = renderer

    }
    getUsers() {
        // Generate 7 new Users
        $.ajax({
            url: 'https://randomuser.me/api/?results=7&inc=name,location,picture',
            dataType: 'json',
            success: data => {
                let results = data.results
                let mainUser = results.pop()
                this.renderer.renderUsers(mainUser);
                
                this.renderer.renderFriends(results);
            }
        });
    }
    getQuote() {
        // get a random quote and author
        $.ajax({
            method: 'Get',
            url: 'https://talaikis.com/api/quotes/random/',
            success: data => {
                this.renderer.renderQuote(data);
            }
        })
    }
    getPokemon() {
        // Generate a random pokemon
        
        let pokeID = Math.floor(Math.random()*150)+1
        $.ajax({
            method: 'Get',
            url: `https://pokeapi.co/api/v2/pokemon/${pokeID}/`,
            success: data => {    
                let pokeObj = {pokeName:data.name, pokePic: data.sprites['front_default']}
                this.renderer.renderPokemon(pokeObj)
        
            }
        })
    }
    getMeat() {
        // generate two paragraphs of text that are all meat
        $.ajax({
            method: 'Get',
            url: 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1',
            success: data => {
                this.renderer.renderMeat(data)

                console.log(data)
            }
        })

    }
    generateNewPage() {
        // generate your new page here
    }
}
