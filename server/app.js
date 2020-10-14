(async () => {
    const express = require('express');
    const app = express();
    app.disable("x-powered-by");
    const bodyParser = require('body-parser')
    const cookieParser = require('cookie-parser')
    const path = require('path')

    require('dotenv').config();

    const port = process.env.PORT || 3000;

    require('db-migrate').getInstance(true).up();

    if(process.env.NODE_ENV == 'production') {
        const client = path.join(__dirname, 'public', 'client');
        app.use(express.static(client));
        app.get('/', (req, res) => {
            res.sendFile(path.join(client, 'index.html'));
        });
    }

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use('/v1', require('./api/router'));

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})();
