const express = require('express');
const app = express();
const port = 3000;

const helloWorldHandler = require('./bin/modules/helloWorld/api_handler');

// app.get('/', (req, res) => {
//   res.send('Hello World! Data science lab');
// });

app.get('/', helloWorldHandler.helloWorld);
app.get('/data', helloWorldHandler.datascience);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
