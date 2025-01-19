# Dia 5

- Colocando Eslint de commit
- Colocando padronizador de commit
- Estilizador Prettier
- Colocando jest e preparando terreno para test automatizados

# Eslint de commit

Amo padronizar as coisas, e automatizar, então deixar do jeito mais bonitos e pratico os commits é algo que me atrai bastante, o unico problema é que eu não sabia que tinha que instalar os verificadores antes do padronizador, quem diria ne...

enfim, coloquei os `@commitlint/cli` o `@commitlint/config-conventional` e o `commitizen`, sem contar com o husk com `husk init`

```json
    "@commitlint/cli": "^19.6.1",
    "@commitlint/config-conventional": "^19.6.0",
    "commitizen": "^4.3.1",    
```

# Prettier

Configurei tambem o prettier, pos acho interessante o jeito que ele funciona e sua ideia.

```json
    "lint:prettier:check": "prettier --check .",
    "lint:prettier:fix": "prettier --write .",
```

# Testes

Comecei tambem a trabalhar com os test automatizados, ja que eles são MUITO UTEIS!