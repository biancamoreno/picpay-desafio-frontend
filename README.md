# Desafio Front-end PicPay
Primeiramente, obrigado pelo seu interesse em trabalhar na melhor plataforma de pagamentos do mundo!
Abaixo você encontrará todos as informações necessárias para iniciar o seu Test.

## Avisos antes de começar
* Primeiro crie uma branch apartir da `develop` nesse padrão de nomenclatura: dd-mm-yy/nome-sobrenome (por exemplo, 30-04-20/julio-rodrigues)
* Você poderá consultar o Google, Stackoverflow ou algum projeto particular na sua máquina.
* Você terá 45 minutos para completar seu teste, portanto, foque em nos mostrar sua linha de raciocínio, bem como aplicar todas os conceitos que você julga interessante mostrar.
* É obrigatório o compartilhamento da tela enquanto o candidato inicia o teste prático.
* Fique à vontade para perguntar qualquer dúvida aos entrevistadores.
* Fique tranquilo, respire, assim como você, também já passamos por essa etapa. Boa sorte! :)

## Setup do projeto
* Angular CLI: 8.3.18
* Node: 10.15.3
* Angular: 8.2.14

## Como Rodar?

- na pasta src, rode este comando `ng serve` for a dev server. 
- Rode aplicação na porta `http://localhost:4200/`


## Objetivo

O objetivo é construir uma aplicação que simula o envio de dinheiro para uma outra pessoa, via cartão de crédito.

#

## Cartões para exibir
O cartão válido vai aprovar a transação no backend;
```javascript
let cards = [
  // valid card
  {
    card_number: "1111111111111111",
    cvv: 789,
    expiry_date: "01/18"
  },
  // invalid card
  {
    card_number: "4111111111111234",
    cvv: 123,
    expiry_date: "01/20"
  }
];
```

#

## Transação
### Endpoint: https://www.mocky.io/v2/5d542ec72f000048248614b3
### Método: POST
```typescript
// Payload:

interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}
```

#

## Usuários
### Endpoint: https://www.mocky.io/v2/5d531c4f2e0000620081ddce
### Método: GET

```typescript
// Payload:

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}
```
