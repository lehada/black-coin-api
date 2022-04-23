# black-coin-api
#### Библиотека для легкого использования API Black Coin

## Установка

```js
$ npm i black-coin-api
```

### Использование

```js
const { API } = require('black-coin-api');
const bc = new API({
    token: 'apiToken'
});
```

## Примеры

### Получение баланса
#### Параметры не требуются
```js
const { API } = require('black-coin-api');
const bc = new API({
   token: 'apiToken' 
});

setTimeout(async () => {
    console.log(await bc.getBalance());
}, 1000);
```
#### На выходе вы получите свой баланс (например: 5000)
#### Если на выходе вы получили 'false', то вы неправильно указали токен!

##

### Получение списка транзакций
#### Параметры (не обязательны)
#### type — in/out/all (по умолчанию all)
#### after_id — вернуть операции после указанной (например: 100000) (по умолчанию 0)
#### limit — максимальное количество возвращаемых записей (например: 3) (по умолчанию 20)
```js
const { API } = require('black-coin-api');
const bc = new API({
   token: 'apiToken' 
});

setTimeout(async () => {
    console.log(await bc.getTransHistory({
        type: 'in',
        after_id: 120000,
        limit: 1
    }));
}, 1000);
```
#### На выходе вы получите массив с транзакциями:
```js
[
  {
    id: 126513,
    sender_id: 655037535,
    recipient_id: 655037535,
    amount: 1,
    created_at: '2022-04-23 21:25:47'
  }
]
```
#### Если на выходе вы получили 'false', то вы неправильно указали токен или параметры!

##

### Получение списка транзакций
#### Параметры (обязательны)
#### amount — сумма перевода (например: 1000)
#### recipient_id — ВК айди получателя (например: 655037535)
```js
const { API } = require('black-coin-api');
const bc = new API({
   token: 'apiToken' 
});

setTimeout(async () => {
    console.log(await bc.sendCoins(1, 655037535));
}, 1000);
```
#### На выходе вы получите 'true'
#### Если на выходе вы получили 'false', то вы неправильно указали токен или параметры!

## 

### На этом все.

##

### Контакты:
#### Вк разработчика - https://vk.com/ymenaidtopa.json
#### Ссылка на группу Black Coin - https://vk.com/black_coin_roulette
#### GitHub Репозиторий - https://github.com/lehada/black-coin-api
#### NpmJs ссылка - https://npmjs.com/package/black-coin-api