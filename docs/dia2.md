# Dia 2

- Erros personalizados
- JWT
- Regexp
- Finalização do CRUD
- Hash

### Implementando tambem erros

Erros??? brincadeira
Criei uma base para futuramentemente escreve erros mais robustos e claro quando implementar o JEST, algo que eu nunca trabalhei muito mas a ideia de ter algo que automatiza os erros é sempre bem vindo.

### JWT

Apesar do JWT esta no projeto, ele esta 100% implementado, preciso depois ver mais afundo, mas por enquanto ja esta funcionando.
Acho engraçado que sobri para colocar o token no posteman, mas pelo menos conseguir fazer funcionar, com testes eu não teria isso.

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

o `where` sendo responsavel pela pesquisa, e o `titulo: { [Sequelize.Op.like]: `%${filtrotitulo}%` }` pelo filtro e afins.

### CRUD

é tudo CRUD?
sempre foi
Então, terminei o CRUD do projeto, ou algo assim, espero que no ultimo dia seja a finalização e eu tenha pelo menos o CRUD 100% redondo caso eu tenha esquecido de algo.

### Hash

Tambem implemente um Hash simples para não ver as senhas dos usuario.
