const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const nunjucks = require('nunjucks');
const flash = require('connect-flash');
const path = require('path'); //vem com o node

class App {
    constructor() {
        this.express = express();
        this.isDev = process.env.NODE_ENV !== 'production';

        this.middlewares();
        this.views();
        this.routes();
    }
    middlewares() {
        this.express.use(express.urlencoded({
            extended: false
        }))
        this.express.use(flash());
        this.express.use(session({
            name: 'root',
            secret: 'MyAppSecret',
            resave: true,
            store: new FileStore({
                path: path.resolve(__dirname, '..', 'tmp', 'session')
            }),
            saveUnitialized: true
        }))
    }

    views() {
        nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
            watch: this.isDev,
            express: this.express,
            autoescape: true
        });

        this.express.use(express.static(path.resolve(__dirname, 'public')));
        this.express.set('view engine', 'njk'); //para usar a extensao njk
    }

    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new App().express; //exporta so o express pq é o que eu vou usar
