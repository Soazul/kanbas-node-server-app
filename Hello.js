// function that accepts app reference to express module
export default function Hello(app) {
    app.get('/hello', (req, res) => {res.send('Life is Good!')}); // creates a route that responds to '/hello'
    app.get('/', (req, res) => {res.send('Welcome to Full Stack Development')});
}
