import dotenv from 'dotenv'
import express from 'express';
import hbs from 'hbs';
import { fileURLToPath } from 'url'
import path from 'path'
import { dirname } from 'path'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = process.env.PORT

//Handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// contenido estatico
app.use(express.static('public'));

//rutas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Omar Barrios',
        titulo: 'Omar Barrios | Websites'
    });
})


app.listen(port, () => {
    console.log(`app listening http://localhost:${port}`);
})
