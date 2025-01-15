# Dia 1

- Escolha das bibliotecas iniciais
- Sqlite3, sequelize e express
- Estruturação da Api
- Criando as migrations e models
- Criando as rotas
- Criando as seed

# Inicio do projeto

## ideia do projeto
A ideia do projeto é um projeto simples, algo bem mais simplificado do que qualquer outro projeto que ja fiz, com o objetivo de finalizar um projeto em uma semana, sem nunca ter programado um projeto 100% javascript, descidi fazer a api com nodejs.

## Bibliotecas
As ferramentas que eu pensei em usar no projeto como de padrão, ``javascript | node.js`` como linguagem, acabei usando tambem a o `express` para API, e o `Sequelize` para modelo de banco de dados relacionais.

sendo tambem o `nodemon` para executar o projeto, com o planejamento de usar o `eslint` e o `jest` para manutenção do codigo.
o banco esta sendo utilizado com `sqlite3`.

## Estruturação

Pelo que entendi, para usar as configurações do `sequelize-cli` é preciso um arquivo `.sequelizerc` contendo as rotas que cada comando vai ser aplicado, então, de inicio a estrutura do scr ficou predefinida assim

```javascript
const path = require('path');

module.exports = {
    'config': path.resolve('./src/config', 'config.json'),
    'models-path': path.resolve('./src/models'),
    'seeders-path': path.resolve('./src/seeders'),
    'migrations-path': path.resolve('./src/migrations'),
}
```

## Migrations e models
As migrations e models não tiveram muito segredo, como cada uma vai contar com uma simplicidade de dados, foi facil implementar as variaveis iniciais.
Comando com `sequelize-cli`

```bash
npx sequelize-cli model:generate --name Nome --attributes props:tipos,lastName:string,email:string
```
Apos isso aplicado as [forageKey](https://sequelize.org/docs/v6/other-topics/legacy/#foreign-keys) manualmente, com o inicio do olhar sobre as [Validations](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)

## Routers

As rotas sendo criadas atraves do [Router](/Api/src/routes/index.js) e configuradas la mesmo.

## As seed
Seeds criadas manualmente e rodado com `npx`:
```bash
npx sequelize-cli db:seed:all
```