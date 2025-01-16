require('dotenv').config();
const app = require('./src/app.js');
const manipulador404 = require('./src/middlewares/manipulador404.js');
const manipuladorDeErros = require('./src/middlewares/manipuladorDeErros.js')
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/status', (req, res) => {
  if (req.oidc.isAuthenticated()) {
      res.send('Usuário autenticado');
  } else {
      res.send('Usuário não autenticado');
  }
});
const PORT = 3000;
app.use(manipuladorDeErros);
app.use(manipulador404);
app.listen(PORT, () => {
  console.log('servidor escutando!');
});

