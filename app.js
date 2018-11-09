const express = require('express');
const cors = require('cors');
const config = require('config');

const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Json and form params parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adding routes
app.use('/api', require('./routers/default'));

const vals = config.get("root.vals");

app.listen(vals.port, () => {
  console.log(`Server is listening on port ${vals.port}`);
});
