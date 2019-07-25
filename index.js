const express = require('express');
const path = require('path');
const app = new express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (response) => {
  response.sendFile(`${__dirname}/index.html`);
});

// routing for pages is handled by the folder name
app.get('/pages/:page', (request, response) => {
  const page = request.params['page'];
  response.sendFile(`${__dirname}/src/pages/${page}/index.js`);
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
