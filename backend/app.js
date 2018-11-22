const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'https://smartcat-test-frontend.azurewebsites.net',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Json and form params parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adding routes
app.use('/api', require('./routers/default'));

var port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
