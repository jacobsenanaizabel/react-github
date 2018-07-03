# React app usando API GitHub :zap: 

Disponivel online :
https://githubconcrete.herokuapp.com/

Tecnologias usadas : Webpack, React, React router, Bootstrap, Sass, CSS3/Flexbox, es6, gitflow
 
![npm](https://imgur.com/KTAmhas.png)

## Configuração de ambiente 

1. Install [node js](http://nodejs.org/)  
2. Clone o repositório [https://github.com/jacobsenanaizabel/react-github/](https://github.com/jacobsenanaizabel/react-github/)
3. Instale as dependencias 
```bash
$ npm i 
```
4. Rode o projeto 
```bash
$ npm run dev 
```
5. Rode os testes
```bash
$ npm test
```

localhost:8081... Seja bem-vindo! 🎉

## Services
### Requests utilizados no sistema 

### Procurar por um usuario pelo mone 
Retorna lista de usuarios no github  

| Field            | Value                                                                 |
|----------------- |-----------------------------------------------------------------------|
| **URL Template** | https://api.github.com/search/users?q={{user}}                        |
| **Method**       | GET                                                                   |
| **Security**     | public                                                                |


### Buscar dados de um determinado usario 
Retorna array com dados do usuario 

| Field            | Value                                                                      |
|----------------- |----------------------------------------------------------------------------|
| **URL Template** | https://api.github.com/users/{{user}}                                      |
| **Method**       | GET                                                                        |
| **Security**     | public                                                                     |


### Visualizar todos os repositórios de um determinado usuario 
Retorna lista de todos os repositórios 

| Field            | Value                                                                      |
|----------------- |----------------------------------------------------------------------------|
| **URL Template** | https://api.github.com/users/{{user}}/repos |
| **Method**       | GET                                                                        |
| **Security**     | public                                                                     |
