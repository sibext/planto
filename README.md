# Planto

**ruby version:** 2.4.2

**gemset:** planto

## How to start application for developing

Install postgres dependencies:

_For mac_

```
brew install libpq
```

_For linux_

```
apt-get install postgresql-client
```

Start postgres container:

```
docker-compose up
```

Create migrations:

```
rake db:create db:migrate
```

Start your Rails server:

```
rails start
```

Start webpack dev server:

```
./bin/webpack-dev-server

```

## How to start system tests

```
rake assets:precompile
rails test:system
```

## How to start common tests

```
rails test
```

_Links:_

[Graphiql IDE](http://localhost:3000/graphiql)

[Home page](http://localhost:3000/graphiql)

[Apollo client docs](https://www.apollographql.com/docs/react/basics/queries.html)


## How to add a new package

```
yarn add package-name
```

## On/Off caching in dev mode
```
rails dev:cache
```

## Production usage

```
version: "3"

volumes:
  db: {}

services:
  app:
    image: sibext/planto:latest
    environment:
      SECRET_KEY_BASE: xxxxxxxxx
      POSTGRES_USER=postgres
      POSTGRES_HOST=db
    depends_on:
      - db
    ports:
    - 3000:3000

  db:
    image: postgres:9.6.5
    volumes:
      - db:/var/lib/postgresql/data
```