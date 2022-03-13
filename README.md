# JUPTER

- POC using nginx as a reverse proxy for containerized node js microservices
- Node (Express) + NGINX

- [JUPTER](#jupter)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Acesso](#acesso)
    - [Aplicação](#aplicação)
  - [Referências](#references)

## Requisitos

- [Docker](https://www.docker.com/get-started) (Windows)
- [Docker Compose](https://docs.docker.com/compose/install/) (Linux)

## Instalação

- Clone este repositório

```bash
$ git clone https://github.com/faxina-projects/jupter.git
```

- Acesse a pasta do projeto

```bash
$ cd jupter
```

- Build da imagem e criação do container

```bash
$ docker-compose up --build
```

## Acesso

### Aplicação

- app: http://localhost:8080
- client: http://localhost:4200
- calisto: http://localhost:3000
- europa: http://localhost:3001

## Referências
- https://javascript.plainenglish.io/using-nginx-as-a-reverse-proxy-for-containerized-node-js-microservices-e7c4800f05a1
- https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b
