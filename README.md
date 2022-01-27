<h1 align="center">

![Trinca](https://raw.githubusercontent.com/newerton/trinca-barbecue-schedule-web-test/main/public/images/logo-readme.png)

Trinca - Barbecue Schedule - API - Test

</h1>

## ⚠️ Aviso

Este repositório faz parte de um teste de conhecimento, se você estiver fazendo o mesmo teste, por favor não copie esse código.

## 🆕 Inicializando

```
cp .env.example .env
cp ormconfig.example.ts ormconfig.ts
yarn install
yarn typeorm migration:run
yarn seed migration:run
yarn dev
```

## ⚒️ Build


Abra o ormconfig.ts, e altere todos os caminhos das pastas, de <code>./src/</code> para <code>./dist/</code>, e as extensões de <code>.ts</code> para <code>.js</code>

```
yarn build
node .\dist\shared\infra\http\server.js
```


## 🌱 Seed

```
./src/shared/infra/typeorm/seeds/1643080892110-Users
```

```
email: test@barbecue.io
password: abc123
```
