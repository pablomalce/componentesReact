# componentesReact

A small React shopping-cart exercise: a product list with "buy" buttons and a cart that lets you remove items.

## Context

Built in August 2020 (four commits, 24-26 Aug 2020) while learning React. It was bootstrapped with Create React App and used to practise function components, props and the `useState` hook. UI text and identifiers are in Spanish.

## What it does

- `App.js` holds two pieces of state with `useState`: a hard-coded list of four products and the cart contents.
- `Producto` renders a product with a "Comprar" (buy) button when shown in the product list, or an "Eliminar" (remove) button when shown inside the cart.
- `Carrito` renders the cart as a fixed panel in the top-right corner, with an empty-state message.
- `Header` and `Footer` are simple presentational components (the footer shows the current year).

There is no backend, routing, persistence or checkout. Known limitation: adding the same product twice creates duplicate React keys, and removing it removes every copy.

## Stack

React 16.13, Create React App (`react-scripts` 3.4.3), Yarn. The CRA default test setup is present, but no tests were written.

## Running it

```bash
yarn install
yarn start   # http://localhost:3000
```

These are the standard Create React App scripts from `package.json`. The 2020 dependency versions may need an older Node.js release to run.

## Status

Archived learning project, not maintained.
