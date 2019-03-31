let  renderPage = new Renderer()
let apiManager = new APIManager(renderPage)




// Render your page and create an on-click to generate a new user here

const createPage = function () {
    let  renderPage = new Renderer()
    let apiManager = new APIManager(renderPage)
    apiManager.getUsers();
    apiManager.getQuote();
    apiManager.getPokemon();
    apiManager.getMeat();

}

apiManager.getUsers();
apiManager.getQuote();
apiManager.getPokemon();
apiManager.getMeat();
