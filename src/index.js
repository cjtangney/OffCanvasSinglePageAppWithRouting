const express = require('express');
const path = require('path');
const app = new express();

pushHistory = page => {
  history.pushState(null, null, page);
};

app.use(express.static('public'));

app.get('/', (response) => {
  response.sendFile(`${__dirname}/index.html`);
});

// routing for pages is handled by the folder name
app.get('/pages/:page', (request, response) => {
  const page = request.params['page'];
  response.sendFile(`${__dirname}/pages/${page}/index.js`);
});

// routing for components is handled by the folder name
app.get('/components/:component', (request, response) => {
  const component = request.params['component'];
  response.sendFile(`${__dirname}/components/${component}/index.js`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
