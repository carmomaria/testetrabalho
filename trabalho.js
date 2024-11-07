// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço `while`.
function somaNumeros(num) {
    let soma = 0
    let i = 1
    while (i <= num) {
        soma += i
        i++
    }

    return soma
}
console.log(somaNumeros(6))


// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.
function somaMaioresQue10(num) {
    let soma = null
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 10) {
            soma += num[i]
        }
    }
    return soma
}
const numeros = [5, 12, 8, 15, 3, 20]
const resultado = somaMaioresQue10(numeros)
console.log(resultado)



// Exemplo de chamada:
// console.log(somaMaiorQueDez([5, 15, 3, 20, 7]));  // 35 (15 + 20)

// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.
function encontrar(filmes) {
    for (let filme of filmes)
        if (filme.length > 5) {
            return filme
        }
}
const filmes = [`Senhores dos Aneis`, `O Poço`, `Como eu era antes de voce`, `O pequenino`]
console.log(encontrar(filmes))



// Exemplo de chamada:
// console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]));  // "Avengers"

// 4. Crie uma função que receba um array de nomes de personagens de *Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array de números representando a força de cada personagem, respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço `for`.
function filtrarPersonagensPorForca(nomes, forcas) {
    let personagensFortes = []
    for (let i = 0; i < nomes.length; i++) {
        if (forcas[i] > 150) {
            personagensFortes.push(nomes[i])
        }
    }
    return personagensFortes
}
const nomes = ["Barbie", "Hulk", "Nhonho"]
const forcas = [180, 195, 140]
const resultado1 = filtrarPersonagensPorForca(nomes, forcas)
console.log(resultado)




// Exemplo de chamada:
//const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
//const forcas = [80, 95, 40];

//console.log(personagemComForcaSuperiorA100(nomes, forcas));


// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.


// Exemplo de chamada:
// console.log(contarNegativos([3, -2, -5, 7, 0, -1]));  // 3

// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.


// Exemplo de chamada:
// console.log(contarLetraA("Naruto é um anime top!"));  // 4

// 7. Crie uma função que percorra um array de filmes e retorne um novo array com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.


// Exemplo de chamada:
// console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  // ["Star Wars", "Superman", "Shrek"]

// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.


// Exemplo de chamada:
// console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  // "Alexandre"

// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.


// Exemplo de chamada:
// console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.


// Exemplo de chamada:
// console.log(repetirNumero(7, 4));  // "7, 7, 7, 7"