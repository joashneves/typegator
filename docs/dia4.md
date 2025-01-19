# Dia 4

- Configurando package.json
- Configurando a API e o front para rodarem em uma unica url
- Configurado a square com o github

# Configurando o Package.json

Eu estava muito tempo ja querendo colocar o npm run, para funcionar em um comando só, ja que, a ideia de abrir dois terminal e sempre ter que escrever npm run para cada um, sempre me pareceu enjoado.
Mas, depois de mudar toda a estrutura do projeto, para criar uma pagina estatica e da pagina estatica jogar o html para o client, eu descobri a biblioteca `concurrently` que quando eu for desenvolver a aplicação vai ser uma mão na roda!

# Configurando a API e o front

A ideia de ter um mono repository foi para poder ter uma unica url, e fazendo o build dela, e depois jogando para API eu conseguir fazer isso funcionar direitor, eu to ate que feliz com o andamento desse projeto.

# Configurando a square com o github

Coloquei para que cada deploy na main, faça ele puxar, sem a necessidade de eu ficar atualizando manualmente, e só por 15 reais, foi uma mão na roda.

# Colocando no ar

Coloquei no ar o site esta [aqui](https://typergator.squareweb.app/) e tambem coloquei as rotas ligada pra API como /api/\*
