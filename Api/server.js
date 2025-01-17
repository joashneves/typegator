require('dotenv').config();
const app = require('./src/app.js');
const manipulador404 = require('./src/middlewares/manipulador404.js');
const manipuladorDeErros = require('./src/middlewares/manipuladorDeErros.js')
const { auth } = require('express-openid-connect');
const cors = require('cors')
//JWT
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};
const corsOptions = {
  origin: ['http://localhost'],
  allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
  credentials: true,
  enablePreflight: true
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

app.all('', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //Auth Each API Request created by user.
    next();
});
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

