# Dia 2

- Melhoria nas rotas
- Erros personalizados
- JWT
- Regexp
- Finalização do CRUD

### O Regex
Sinceramente, o regex foi uma merda de implementar, varias pessoas colocaram de varios modos diferente, mas eu queria que epe pesquisase com aquele paramentros, mas no fim eu conseguir

No arquivo [LinkerServices](../Api/src/services/LinkerServices.js) eu coloquei a seguinte função que pesquisa de acordo com a rota passada

```javascript
async procurarLinkParamentro(filtrotitulo) {
    try {
      const linksFiltrados = await dataSource[this.model].findAll({
        where: {
          titulo: { [Sequelize.Op.like]: `%${filtrotitulo}%` },
        },
      });
  
      return {
        sucesso: linksFiltrados.length > 0,
        dados: linksFiltrados,
      };
    } catch (error) {
      console.error('Erro ao procurar link:', error.message);
      throw error;
    }
  }
  ```
  o ``where`` sendo responsavel pela pesquisa, e o `titulo: { [Sequelize.Op.like]: `%${filtrotitulo}%` }` pelo filtro e afins.