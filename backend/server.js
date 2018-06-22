const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// on passe le middleware bodyParser.json() qui parse en json les données du formulaire
app.use(bodyParser.json());

// custom middleware pour gestion des headers
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

const api = express.Router();
app.use('/api', api);

const port = 4201;
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});