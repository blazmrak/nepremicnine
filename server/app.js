(async () => {
    const express = require('express');
    const app = express();
    const port = 3000;
    const bodyParser = require('body-parser')
    const cookieParser = require('cookie-parser')
    const path = require('path')

    require('dotenv').config();

    require('db-migrate').getInstance(true).up();

    if(process.env.NODE_ENV == 'production') {
        app.use(express.static(path.join(__dirname, 'client', 'dist', 'client')))
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'public', 'client', 'index.html'));
        });
    }

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use('/v1', require('./api/router'));

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})();
