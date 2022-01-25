<h1 align="center">

![Trinca](https://raw.githubusercontent.com/newerton/trinca-barbecue-schedule-web-test/main/public/images/logo-readme.png)

Trinca - Barbecue Schedule - API - Test

</h1>

## ⚠️ Aviso

Este repositório faz parte de um teste de conhecimento, se você estiver fazendo o mesmo teste, por favor não copie esse código.

## 🆕 Inicializando

```
cp .env.example .env
yarn install
yarn typeorm migration:run
yarn seed migration:run
yarn dev
```

## 🌱 Seed

```
./src/shared/infra/typeorm/seeds/1643080892110-Users
```

```
name: 'Test'
email: 'test@barbecue.io'
password: 'abc123'
```
