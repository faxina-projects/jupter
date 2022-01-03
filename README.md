# JUPTER

- POC using nginx as a reverse proxy for containerized node js microservices
- Node (Express) + NGINX

- [JUPTER](#jupter)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Acesso](#acesso)
    - [Aplicação](#aplicação)

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
