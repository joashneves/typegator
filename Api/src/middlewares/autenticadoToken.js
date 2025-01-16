const jwt = require('jsonwebtoken');

function autenticadoToken(req, res, next) {
  console.log(req.headers['authorization'])
  const token = req.headers['authorization']; // O token é enviado no cabeçalho "Authorization"

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  try {
    // Verifica e decodifica o token
    const tokenValido = jwt.verify(token.replace('Bearer ', ''), process.env.SECRET);
    req.usuario = tokenValido; // Adiciona os dados do usuário ao objeto req
    next(); // Continua para a próxima middleware ou rota
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido ou expirado.' });
  }
}

module.exports = autenticadoToken;
