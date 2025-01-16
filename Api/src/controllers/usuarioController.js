const Controller = require('./controller.js')
const UsuariosServices = require('../services/UsuariosServices.js');
const jwt = require('jsonwebtoken');

const usuariosServices = new UsuariosServices();

class UsuarioController extends Controller{
    constructor(){
        super(usuariosServices)
    }

    async criarUsuario(req, res){
        const dadosUsuario = req.body;
        try{
            const novoUsuario = await usuariosServices.criarUsuario(dadosUsuario)
            return res.status(201).json({
                mensagem: `dados criados`,
                novoUsuario,
              })
        }
        catch(error){
            console.error(error)
            return res.status(500).json(
                { 'error': 'ocorreu um erro',
                    messagem: error.type
                }
              );
        }

    }

    async login(req, res){
      const { usuario_usuario, usuario_senha } = req.body;

    try {
      const usuarioLogado = await usuariosServices.autenticadoUsuario(usuario_usuario, usuario_senha);

      if (!usuarioLogado) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }

      const token = jwt.sign(
        { id: usuarioLogado.id, usuario: usuarioLogado.usuario },
        process.env.SECRET,
        { expiresIn: '1h' } // Token expira em 1 hora
      );

      return res.status(200).json({ usuarioLogado, token });
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error.message);
      return res.status(500).json({
        error: 'Ocorreu um erro ao realizar login.',
        mensagem: error.message,
      });
    }
  }
}

module.exports = UsuarioController;