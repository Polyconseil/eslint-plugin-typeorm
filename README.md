# @taccolaa/eslint-plugin-typeorm

` npm install @taccolaa/eslint-plugin-typeorm --save-dev `

.eslintrc :
``` json
"plugins": ["@taccolaa/typeorm"], 
```

``` json
"rules": {
  "@taccolaa/typeorm/no-double-where-query": "error"
},
```
It will match this patten :

``` js
abc.where().where()
```
