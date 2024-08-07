# Métodos de Array em JavaScript

## Dias de estudo
| Dia de estudo | período |
| ----------------- | ------ |
| 27/07/2024 sábado | manhã |
| 28/07/2024 domingo | noite |
| 29/07/2024 segunda-feira | manhã e tarde |

## Aprendizados do Curso:
- Obter dados de uma API:
```js
  async function buscarLivros() {
  const endPointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
  const res = await fetch(endPointDaAPI);
  const livros = await res.json();
  };
```
- Método `.toFixed(2)` para mostrar apenas duas casas decimais de um número
- Método `console.table(array)` para mostrar um array em formato de tabela  
- Método `.map()`:
```js
  const numeros = [1, 2, 3, 4, 5, 6];
  const dobro = numeros.map(numero => numero *2);
  console.log(numeros); // [1, 2, 3, 4, 5, 6]
  console.log(dobro); // [2, 4, 6, 8, 10, 12]
```
- Método `.filter()`:
```js
  const idades = [12, 18, 21, 22, 35, 8, 11, 42];
  const idadesParaDirigir = idades.filter(idade => idade >= 18);
  console.log(idades); // [12, 18, 21, 22, 35, 8, 11, 42]
  console.log(idadesParaDirigir); // [18, 21, 22, 35, 42]
```
- Método `.sort()`:
```js
  const precos = [29.98, 11, 1, 101, 110, 28];
  const precosOrdenados = precos.sort((a, b) => a - b);
  console.log(precosOrdenados); // [1, 11, 28, 29.98, 101, 110]
```

- Método `.reduce()`:
```js
  const valores = [12, 36, 60];

  // Primeiro parâmetro da função: acumulador (acc)
  // Segundo parâmetro da função: valor atual (atual)
  // Segundo parâmetro: valor inicial do acumulador

  const valorTotal = valores.reduce((acc, atual) => acc + atual, 0);
  console.log(valorTotal); // 108

  const maiorValor = valores.reduce((acc, atual) => acc > atual ? acc : atual);
  console.log(maiorValor); // 60

  const menorValor = valores.reduce((acc, atual) => acc < atual ? acc : atual);
  console.log(menorValor); // 12
```
