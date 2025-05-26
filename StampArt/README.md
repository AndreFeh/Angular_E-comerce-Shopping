# TouchtechnologySite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Commands necessaries

> CART SERVICE

  addToCart(product: any)

  Adiciona um produto ao carrinho.
  Se o produto já existir, incrementa a quantidade.
  Caso contrário, adiciona o produto como um novo item no carrinho.
  getCart()

  Retorna todos os itens atualmente no carrinho.
  updateQtd(productId: number, qtd: number)

  Atualiza a quantidade de um produto baseado no id.
  Remove o produto automaticamente do carrinho se a quantidade for menor que 1.
  removeFromCart(productId: number)

  Remove diretamente o produto do carrinho com base no id.
  clearCart()

  Esvazia completamente o carrinho.

------------------------
O carrinho carrega os produtos corretamente?
  Sim, usando this.service.getCart().subscribe(...).

Os totais (preço e quantidade) são atualizados corretamente?
  Sim, com calculateTotal sendo chamado sempre que os dados mudam.

O <app-resulted> exibe os valores atualizados?
  Sim, com os bindings [price], [qtd], e [desc].

As mudanças no <app-elements> refletem no carrinho?
  Sim, graças ao (updateQtd).

