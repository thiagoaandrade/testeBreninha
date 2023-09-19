// ° Variáveis
let idade = 21
console.log(idade)
let nomeCompleto = 'Alysson Thiago Araújo Andrade'
console.log(nomeCompleto)
let profissao = 'Desempregado'
console.log(profissao)
console.log(`Olá, meu nome é ${nomeCompleto} tenho ${idade} anos e minha situação de trabalho atual é ${profissao}`)

let semDefinicao
console.log(semDefinicao)
console.log(typeof(semDefinicao))

// ° Objeto
const teste = {
    nome: 'teste',
    numero: 23
}
teste.numero = 25
console.log(teste)

let pessoa = {
    nome: 'Cleiton',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza',
    situacao: 'Desempregado',
    raca: 'Branco',
    animalEstimacao: 'Toddy'
}
console.log(pessoa.nome)

// ° Arrays
let eu = ['Alysson Thiago', 20, 'Itapajé', 'branco']
console.log(eu)
console.log(eu[1])

// ° Função
// Verbo + Substantivo
let numero = 2
function resetaNumero(){
    numero = 0
}
console.log(numero)
resetaNumero()
console.log(numero)
numero = 2

function somaNumero(num){
    numero += num
}
console.log(numero)
somaNumero(5)
console.log(numero)

// ° Tipos de funções
// Realizar uma tarefa, não devolve nada
function dizerNome(){
    console.log('Xablau')
}
dizerNome()
// Realiza uma tarefa e devolve algo
function multiplicaPorDois(valor){
    let numero = valor * 2
    return numero
}
let resultado = multiplicaPorDois(9)
console.log(resultado)

// ° Operador ternário
// Condição ? Resultado se for verdadeiro : Resultado se for falso
let pontos = 25
let result = pontos > 50 ? true : false
console.log(result)

let num1 = 21
let divisivelPorDois = num1 % 2 === 0 ? `${num1}É divisível por 2` : `${num1} Não é divisível por 2`
console.log(divisivelPorDois)

let caractere = 'a'
let eString = typeof(caractere) === 'string' ? 'é string' : 'não é string'

// ° Operador lógico
// and = &&, or = ||, not = !
// O and irá retornar true apenas se todas as condições forem verdadeiras
// O or irá retornar true se ao menos uma das condições forem verdadeiras
// O not irá retornar true se a condição for falsa
let maiorDeIdade = true
let carteiraDeTrabalho = false
let verifica = maiorDeIdade && carteiraDeTrabalho
console.log(verifica)

// ° Falsy e Truthy
// Falsy:
// let a; Undefined
// let b = null; Null
// let c = 0; 0
// let d = false; False
// let e = ''; ''
// let f = NaN; NaN
// Pode-se utilizar !! antes da variável para verificar se ela é truthy ou falsy
// No exemplo abaixo é feita a verificação com o or, como na primeira variável ja deu true ele ja irá parar ali, caso desse false ele iria para a segunda.
let corSecundaria = 'Verde'
let corPrimaria = ''
let corPerfil = corSecundaria || corPrimaria
console.log(corPerfil)
// Neste próximo exemplo, é feita a verificação com o and, ele irá passar pelo primeiro elemento que é a corSecundaria e verificará se é true, caso seja ele irá escolher o segundo elemento e caso não seja irá escolher o primeiro elemento.
corSecundaria = 'xama'
corPrimaria = false
corPerfil = corSecundaria && corPrimaria
console.log(corPerfil)
// O falsy e o truthy também pode ser utilizado dentro de um if como condição
if (corSecundaria && !corPrimaria){
    console.log('Passou, pois, por corPrimaria ser false e estar com o not ela se transformou em true.')
}
console.log(!corPrimaria)

// ° Mini projeto 1 - Trocando valor de variáveis
let a = 'vermelho'
let b = 'azul'
let c
c=a
a=b
b=c
console.log(`O valor de a: ${a}`)
console.log(`O valor de b: ${b}`)

// ° Condicional if, else if e else
// Verificando horas
let hora = 19
if(hora > 6 && hora < 12){
    console.log('Bom dia')
}
else if(hora < 18){
    console.log('Boa tarde')
}
else{
    console.log('Boa noite')
}

// ° Condicional switch case
let permissao // funcionario, supervisor, chefe
permissao = 'chefe'
switch(permissao){
    case 'funcionario':
        console.log('Você está com o cargo de funcionário')
        break
    case 'supervisor':
        console.log('Você está com o cargo de supervisor')
        break
    case 'chefe':
        console.log('Você está com o cargo de chefe')
        break
    default:
        console.log('Usuário não foi reconhecido')
}

// ° Laço de repetição for
let maximo = 50
console.log(`Aqui estão os números ímpares entre 1 e ${maximo}`)
for(let i = 1; i <= maximo; i++){
    if(i%2 !== 0){
        console.log(i)
    }
}
console.log(`Aqui estão os números pares entre 1 e ${maximo}`)
for(let i = 1; i <= maximo; i++){
    if(i%2 === 0){
        console.log(i)
    }
}

for(let i=0;i<eu.length;i++){
    console.log(eu[i])
}
// ° Laço de reptição while
let i = 0
while (i<=6){
    if(i%2 === 0){
        console.log(i)
    }
    i++
}

// ° Laço de repetição for-in
// O in ao contrário do python, irá tratar sobre o índice do array e não do elemento dentro dele
for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}
// Neste exemplo ele irá mostrar 0,1,2,3 pois são os índices dos elementos dentro do array
for(let i in eu){
    console.log(i)
}
// Neste exemplo irá mostrar o índice e irá utilizar esse índice para acessar o elemento dentro do vetor
for(let i in eu){
    console.log(`Índice: ${i} - ${eu[i]}`)
}

// ° Laço de repetição for-of
// O of se assemelha ao in do python, pois ele irá mostrar o elemento do array e não o índice
for(let caracteristica of eu){
    console.log(caracteristica)
}
// O for-of não funciona com objetos.

// ° Mini-Projeto 2 - Criar função que retorna o maior valor entre 2 números
function maiorValor(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}
console.log(maiorValor(5,2))

// ° Mini-Projeto 3 - Carai do fizzbuzz
function fizzBuzz(entrada){
    if(entrada % 3 === 0 && entrada % 5 === 0){
        return 'FizzBuzz'
    }else if(entrada % 3 === 0){
        return 'Fizz'
    }else if(entrada % 5 === 0){
        return 'Buzz'
    }else if(typeof(entrada) !== 'number'){
        return 'Não é um número'
    }else{
        return entrada
    }
}

console.log(fizzBuzz(true))

// ° Mini-Projeto 4 - Medidor de velocidade
function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    const kmPorPonto = 5

    if(velocidade > velocidadeMaxima){
        const pontuacao = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
        if(pontuacao < 1){
            return 'Você está acima da velocidade permitida'
        }
        if(pontuacao > 12){
            return 'Carteira Suspensa'
        }
        return `Pontos: ${pontuacao}`
    }else{
        return 'ok'
    }
}
console.log(verificarVelocidade(200))

// ° Mini-Projeto 5 - Par ou Impar
function exibirTipo(limite){
    for(let i=0; i<=limite; i++){
        if(i%2 === 0){
            console.log(`${i} é par`)
        }else{
            console.log(`${i} é impar`)
        }
    }
}
exibirTipo(5)

// ° Mini-Projeto 6 - Encontre o string
function exibirPropriedades(obj){
    for(chave in obj){
        if(typeof(obj[chave]) === 'string'){
            console.log(chave, obj[chave])
        }
    }
}

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Homem de ferro'
}
exibirPropriedades(filme)

// ° Mini-Projeto 7 - Multiplos de 3 e 5
function somar(limite){
    let result = 0
    for(let i=1; i<=limite;i++){
        if(i % 3 === 0 || i % 5 === 0){
            result+=i
        }
    }
    console.log(result)
}
somar(10)

// ° Mini-Projeto 8 - Média de Nota Escolar
function mediaDoAluno(notas){
    let media;
    let cont = 0
    for(nota of notas){
        cont += nota
    }
    media = cont/notas.length
    if(media < 60){
        console.log('F')
    }else if(media < 70){
        console.log('D')
    }else if(media < 80){
        console.log('C')
    }else if(media < 90){
        console.log('B')
    }else{
        console.log('A')
    }
}
const array = [90,90,90]
mediaDoAluno(array)

// ° Mini-Projeto 9 - Contador de asteriscos
function exibirAsteriscos(linhas){
    let caracter = '*'
    for(let i=1; i<=linhas; i++){
        console.log(caracter.repeat(i))
    }
}
exibirAsteriscos(100)

// ° Mini-Projeto 10 - Números primos
function exibirNumerosPrimos(limite){
    for(let numerou=2; numerou<=limite ; numerou++){
        if(numeroPrimo(numerou)){
            console.log(numerou)
        }
    }
}
function numeroPrimo(numero){
    for(let divisor=2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false
        }
    }
    return true
}

exibirNumerosPrimos(20)

// Factory Functions
const computador = {
    processador: 'i3 2328m',
    memoriaRam: 8,
    placaDeVideo: 'gtx 960',
    led: true,
}
// Poderia utilizar dessa forma para criar o objeto de uma forma dinâmica
function criarComputador1(processador, memoriaRam, placaDeVideo, led){
    return {
        processador: processador,
        memoriaRam: memoriaRam,
        placaDeVideo: placaDeVideo,
        led: led,
        ligar: function(){
            console.log('Computador ligando...')
        }
    }
}
// Mas também possui essa forma quando o nome do parâmetro que seria o valor é o mesmo da chave do objeto. Dessa forma ele vai pegar o nome do parâmetro e utilizar como o nome da chave e o valor que estava nesse parâmetro será o valor dessa chave.
function criarComputador2(processador, memoriaRam, placaDeVideo, led){
    return {
        processador,
        memoriaRam,
        placaDeVideo,
        led,
        ligar(){
            console.log('Computador ligando...')
        }
    }
}

function criarAtleta(nome, idade, esporte){
    return {
        nome,
        idade,
        esporte,
    }
}
const meuComputador = criarComputador1('i3 2328m', 8, 'Intel HD Graphics 3000', false)
meuComputador.ligar()
console.log(criarComputador2('Ryzen 5 5600g', 16, 'GTX 1660 TI', true))
const neymar = criarAtleta('Neymar', 31, 'Futebol')
console.log(neymar)
console.log(neymar.idade)
console.log(criarAtleta('Gabriel Medina', 29, 'Surfista'))

// ° Constructor function
// Essa forma de criar objetos funciona quase que da mesma forma que o python, mas ao invés de utilizar self é utilizado this e deve colocar vírgula dps das propriedades ou funções. Quando vai criar o objeto é colocado new antes(será mostrado mais na frente.)
function Jogador(nome, nickname, idade, jogoDeAtuacao){
    this.nome = nome,
    this.nickname = nickname
    this.idade = idade,
    this.jogoDeAtuacao = jogoDeAtuacao,
    this.situacao = function () {
        if(this.idade > 40){
            console.log(`Jogador(a) ${this.nickname} ta meio velhinho(a)`)
        }else{
            console.log(`Jogador(a) ${this.nickname} está novinho(a)`)
        }
    }
}

const jogador1 = new Jogador('Gabriel Toledo', 'Fallen', 32, 'CS GO')
console.log(jogador1)
jogador1.situacao()
const jogador2 = new Jogador('Daigo Umehara', 'Daigo', 52, 'Street Fighter')
console.log(jogador2)
jogador2.situacao()

// ° Natureza dinâmica de Objetos
// No javascript você pode adicionar ou remover atributos ou funções dentro de um objeto sem ter que adicionar diretamente dentro do objeto, o exemplo a seguir fica mais fácil de entender.
const foneDeOuvido = {
    marca: 'Samsung',
    cor: 'branco',
    bluetooth: false
}
// Aqui embaixo temos o objeto foneDeOuvido que acabou de ser criado
console.log(foneDeOuvido)
// Agora iremos adicionar um novo atributo a ele
// Para adicionar um novo atributo ou função a um objeto é utilizada da seguinte sintaxe:
// objeto.novoAtributo = 'valor que desejar'
// objeto.novaFuncao = function (){ ... }
foneDeOuvido.stereo = true
console.log(foneDeOuvido)
foneDeOuvido.aumentarGrave = function (){
    console.log('Grave aumentado')
}
foneDeOuvido.aumentarGrave()
console.log(foneDeOuvido)

// ° Clonar Objetos
// Possui 2 formas de se clonar um objeto, uma é utilizando um método chamado Object.assign() e outra é utilizando o spread {...objetoQueVaiSerCopiado}
// 1° Método:
// Sintaxe do método - const novoObjeto = Object.assign({aqui dentro é possível e opcional adicionar novos atributos a cópia e que não estão no objeto principal},objetoQueVaiSerCopiado)
const viagem = {
    origem: 'Itapajé',
    destino: 'Fortaleza',
    distanciaEmKm: 109
}

const viagem2 = Object.assign({
    tempoDeViagemEmMinutos: 92,
    oi: function (){
        console.log('oi')
    }
}, viagem)

console.log(viagem)
console.log(viagem2)
viagem2.oi()
// 2° Método:
// A síntaxe dessa nova forma é simplesmente - const novoObjeto = {...objetoQueVaiSerCopiado}
const viagem3 = {...viagem}
console.log(viagem3)

// ° Strings metodos
let stringTeste = 'Eu num sei é de nada'
// Atributo string.length irá retornar o tamanho dessa string
console.log(stringTeste.length)
// Método string.includes('string que deseja verificar') irá verificar se a palavra ou frase que está como parâmetro esta dentro da string e retornará false ou true.
console.log(stringTeste.includes('num sei'))
console.log(stringTeste.includes('xambra'))
// Método string.startsWith('String que deseja verificar') irá verificar se a string começa com a palavra ou frase que foi passada como parâmetro.
console.log(stringTeste.startsWith('Eu'))
console.log(stringTeste.startsWith('Você'))
// Método string.endsWith('String que deseja verificar') irá verificar se a string termina com a palavra ou frase que foi passado como parâmetro.
console.log(stringTeste.endsWith('nada'))
console.log(stringTeste.endsWith('tudo'))
// Método string.indexOf('String que deseja verificar') irá verificar qual o índice que inicia a palavra ou frase que foi passada como parâmetro.
console.log(stringTeste.indexOf('é'))
console.log(stringTeste.indexOf('de'))
// Método string.replace('Palavra ou frase que será mudada na string', 'Nova palavra ou frase que ficará no lugar')
console.log(stringTeste.replace('nada','tudo'))
console.log(stringTeste.replace('num',''))
// Método string.trim() irá remover os espaços que ficaram a mais no começo e no final
stringTeste = '  Eu num sei é de nada  '
console.log(stringTeste)
stringTeste = stringTeste.trim()
console.log(stringTeste)
// Método string.split('Aqui ficará o separador') esse método irá separar a string em um array de acordo com o que foi especificado
stringSeparada = stringTeste.split(' ')
console.log(stringSeparada)

// ° Date lidando com datas
// Existem varias formas de trabalhar com o objeto Date
// Primeiro para criar uma variável com objeto Date
const data1 = new Date() // Quando não se passa parãmetro ele pega a data atual
const data2 = new Date('August 05 2023 11:22') // Passando a data como uma string
const data3 = new Date(2023,8,5,11,25)
// Existem os métodos get para pegar alguma informação desse objeto para trabalhar com eles
console.log(data1.getDate())
console.log(data2.getHours())
console.log(data3.getFullYear())
// Existem os métodos set para modificar alguma informação do objeto como mudar o dia, ano, etc.
data3.setFullYear(2040)
console.log(data3)
data2.setDate(23)
console.log(data2)
// Para transformar a data em string utiliza o método variavelData.toDateString()
console.log(data1.toDateString())
// Para utilizar ver qual a informação de zona que ele utiliza de qual local esta pegando o fuso-horário utiliza o método variavelData.toTimeString()
console.log(data1.toTimeString())
// Para transformar em um formato que é visualizado no servidor utiliza o método variavelData.toISOString()
console.log(data1.toISOString())

// ° Mini-Projeto 11 - Montador de Endereço
const minhaCasa = {
    rua: 'Teixeira Pinto',
    cidade: 'Itapajé',
    cep: '62600-000'
}

function exibirEndereco(endereco){
    for(informacao in endereco){
        console.log(`${informacao}: ${endereco[informacao]}`)
    }
}
exibirEndereco(minhaCasa)

// ° Mini-Projeto 12 - Igualdade de Objetos
function EnderecoCasa(rua, cidade, cep){
    this.rua = rua
    this.cidade = cidade
    this.cep = cep
}
const endereco1 = new EnderecoCasa('Teixeira Pinto', 'Itapajé', '62600-000')
const endereco2 = new EnderecoCasa('Teixeira Pinto', 'Itapajé', '62600-000')

console.log(Object.keys(endereco1).length)
function saoIguais(endereco1, endereco2){
    let quantidadePropriedades = Object.keys(endereco1).length
    let cont = 0
    for(chave in endereco1){
        if(endereco1[chave] === endereco2[chave]){
            cont += 1
        }
    }
    if(cont === quantidadePropriedades){
        return true
    }else{
        return false
    }
}
console.log(saoIguais(endereco1, endereco2))

function temEnderecoMemoriaIguais(endereco1, endereco2){
    return endereco1 === endereco2
}
console.log(temEnderecoMemoriaIguais(endereco1, endereco2))

// ° Mini-Projeto 13 - Montador de postagens

const postagem = {
    titulo: 'Num sei é de nada',
    mensagem: 'Eu também não sei',
    autor: 'Cleitin',
    visualizacoes: 50,
    comentarios: [
        {autor: 'Robson', mensagem: 'Esse cara é um doido'},
        {autor: 'Claudete', mensagem: 'Concordo com o doido a cima :)'}
    ],
    estaAoVivo: true
}

// Constructor functions
function Postagem(titulo, mensagem, autor){
    this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor
    this.visualizações = 0
    this.comentarios = []
    this.estaAoVivo = false
}

let postagem2 = new Postagem('a','b','c')

// Mini-Projeto 14 - Faixa de preço
let faixas = [
    {tooltips: 'até 700 R$', minimo: 0, maximo: 700},
    {tooltips: '700 R$ e 1000R$', minimo: 700, maximo: 1000},
    {tooltips: 'Mais de 1000 R$', minimo: 1000, maximo: 99999999}
]

function Produtos(nome, valor){
    this.nome = nome
    this.valor = valor
}
let placa = new Produtos('rx', 23)


const placasDeVideo = [
    new Produtos('rx580', 512.86),
    new Produtos('gtx 1650', 929.00),
    new Produtos('rtx 4090', 10300.00)
]

function pesquisaProdutosValor(tipoDeProduto, faixaDePreco){
    for(let produto of tipoDeProduto){
        if(produto['valor'] > faixaDePreco['minimo'] && produto['valor'] < faixaDePreco['maximo']){
            console.log(`Nessa faixa de preço temos o produto: ${produto['nome']}`)
        }
    }
}

pesquisaProdutosValor(placasDeVideo, faixas[2])

// ° Adicionar elementos a um array
const arrayz = [1,2,3,'xablau']
// Adicionar no início do array - Utiliza o método variavelArray.unshift(e aqui dentro o que deseja adicionar no começo do array)
// Ele retorna a quantidade de elementos que estão no array contando com o que foi adicionado
arrayz.unshift('Cleiton')
console.log(arrayz)
arrayz.unshift(234)
console.log(arrayz)
// Adicionar no índice que quiser - Utiliza o método variavelArray.splice(posição em que deseja adicionar, aqui coloca qnts elementos a frente deseja remover para adicionar esse novo elemento e caso não queira remover nenhum coloca 0, e aqui o que deseja adicionar no array)
// Essa função retorna os elementos que foram removidos caso queira adicionar em uma outra variavel
let removidos = arrayz.splice(0, 2, 'num sei')
console.log(removidos)
console.log(arrayz)
// Adicionar no final do array - Utiliza o método variavelArray.push(e aqui dentro o que deseja adicionar no array)
// Ele retorna a quantidade de elementos que estão no array contando com o que foi adicionado
arrayz.push('Final')
console.log(arrayz)

// ° Encontrar valores primitivos dentro de um array
// Mostrar o indice da primeira vez que um elemento aparece no array - Utiliza o método variavelArray.indexOf(e aqui dentro o que deseja buscar dentro do array)
// Caso ele ache o elemento irá retornar o índice dele e caso não ache irá retornar -1
const variasCoisas = [1,2,'Thiago','Ermac', 1]
const posicaoDeThiago = variasCoisas.indexOf('Thiago')
console.log(posicaoDeThiago)
console.log(variasCoisas.indexOf('Não tem no array'))
// Mostrar o índice da última vez que um elemento aparece no array - Utiliza o método variavelArray.lastIndexOf(e aqui dentro o que deseja buscar dentro do array)
// Caso ele ache o elemento irá retornar o índice dele e caso não ache irá retornar -1
console.log(variasCoisas.lastIndexOf(1))
console.log(variasCoisas.lastIndexOf('não tem'))
// Mostra apenas se certo elemento esta dentro do array ou não - Utiliza o método variavelArray.includes(e aqui dentro o que deseja buscar dentro do array)
// esse método irá retornar true para caso o elemento esteja no array e false para caso não esteja
console.log(variasCoisas.includes('Ermac'))
console.log(variasCoisas.includes(`dont't have`))

// ° Encontrando elementos do tipo referência (que eu acho que são objetos kk)
// Não da para utilizar os mesmos métodos que são utilizados em arrays normais em arrays com objetos.
// Utilizamos o método variavelArray.find() e que é utilizado de uma forma mais complexa pois é preciso passar uma função dentro desse método
// Explicativo: variavelArray.find(function (aqui vai ser criada uma variavel que vai meio que assumir os elementos do array que nesse exemplo iremos assumir como pessoa) {return pessoa.idade === 23})
// Prático: variavelArray.find(function (jogador){ return jogador.esporte === 'futebol'})
// Nesse método caso encontre um elemento Objeto que satisfaça a condição irá retornar o Objeto e caso não encontre irá retornar undefined
const testeObj = [
    {id: 2, nome: 'Cristiano Ronaldo', idade: 38},
    {id: 1, nome: 'Neymar', idade: 31},
    {id: 3, nome: 'Messi', idade: 36}
]

const jogador = testeObj.find(function (jogador){
    return jogador.nome === 'xama'
})
console.log(jogador ? jogador.nome : undefined)

// ° Arrow functions
// Utilizando de exemplo com o método find()
// Existem 3 formas
// 1° - variavelArray.find((jogador) => {return jogador.esporte === 'futebol'})
// 2° Caso seja apenas um parâmetro pode tirar os () - variavelArray.find(jogador => {return jogador.esporte === 'futebol'})
// 3° Sendo uma função simples de uma linha não precisa do return e das chaves - variavelArray.find(jogador => jogador.esporte === 'futebol')
const jogadorFutebol2 = testeObj.find((jogador) => {return jogador.idade === 38})
console.log(jogadorFutebol2)
// Exemplo aleatório
const estado = (idade) => {
    if(idade < 18){
        console.log('Criança')
    }else if(idade < 40){
        console.log('Adulto')
    }else{
        console.log('Idoso')
    }
}
estado(19)

// ° Removendo elementos de um array
// Esses métodos funcionam em um array com objetos!
const mkChars = ['Scorpion','Sub-Zero','Ermac','Kabal','Kano','Liu Kang','Classic Sub-Zero']
console.log(mkChars)
// Para remover no inicio do array - variavelArray.shift()
// Esse método irá retornar o elemento que foi removido caso queira guardar em alguma variável
const primeiro = mkChars.shift()
console.log(primeiro)
console.log(mkChars)
// Para remover no meio de um array - variavelArray.splice(aqui vai o indice do elemento que deseja remover, e aqui quantos elementos apartir desse indice serão removidos)
// Esse método irá retornar um array com o/os elementos removidos caso queira guardar em uma variável
const meio = mkChars.splice(3,1)
console.log(meio)
console.log(mkChars)
// Para remover no final do array - variavelArray.pop()
// Esse método irá retornar o elemento que foi removido caso queira guardar em uma variável
const final = mkChars.pop()
console.log(final)
console.log(mkChars)

// ° Esvaziando um array
let veitor = ['Ultimate Mortal Kombat 3', 'Resident Evil 4', 'Mortal Kombat 9', 'Segurança da Informação']
const outro = veitor
// Existem várias formas de esvaziar um array
// 1° forma - variavelArray = []
// Só funcionará se o array não foi declarado com uma constante e caso tenha criado uma cópia dele em uma outra variável não irá apagar esse array dessa outra variável
// veitor = []
// console.log(veitor) - []
// console.log(outro) - ['Ultimate Mortal Kombat 3', 'Resident Evil 4', 'Mortal Kombat 9', 'Segurança da Informação']
// 2° forma - variavelArray.length = 0
// Funcionará mesmo que seja um const e apagará também de todas as outras variáveis que foram feito copias.
// veitor.length = 0
// console.log(veitor) - []
// console.log(outro) - []
// 3° forma - variavelArray.splice(0, variavelArray.length)
// Funcionará mesmo que seja um const e apagará também de todas as outras variáveis que foram feito copias
// veitor.splice(0, veitor.length)
// console.log(veitor)
// console.log(outro)

// Combinando e cortando arrays
// Os métodos a seguir caso tenha apenas tipos primitivos nos arrays ele não será modíficado na cópia, mas caso tenha algum do tipo referência como um Objeto irá alterar o valor em todos até nos combinados.
const arrayAleatorio = [1,2,3,'Thiago','Alysson']
const arrayAleatorio2 = ['Araújo','Andrade',4,5]
// Combinar - const variavelNova = variavelArray1.concat(variavelArray2)
// Esse método retorna um array com os arrays dentro dele. É preciso guardar ele dentro de outra variável pois ele não altera o array que utilizou o método...
const combinadoConcat = arrayAleatorio.concat(arrayAleatorio2)
console.log(combinadoConcat)
// Dividir - const variavelNova = variavelArray.slice(aqui coloca de qual indice irá iniciar o corte, e aqui qual o índice que irá terminar lembrando que ele pega esse último índice e subtrai por 1 como se fosse fim < 7 e não fim <= 7)
// Esse método retorna essa parte que foi cortada do array mas não altera o array original.
// Caso não determine o parâmetro do fim ele irá cortar do índice de inicio até o final do array
const dividido = arrayAleatorio.slice(1,4)
console.log(dividido)
// Também pode utilizar esse método para criar uma cópia. É só não colocar nenhum valor nos parâmetros
const combinadoSlice = arrayAleatorio.slice()
console.log(combinadoSlice)

// Operador spread para combinar arrays
const array1 = ['Alysson','Thiago']
const array2 = ['Araújo','Andrade']
// A síntaxe desse operador é simplesmente - const arrayCopia = [...arrayCopiado1,...arrayCopiado2]
// Quando utilizado esses ... antes do array que será copiado ele irá pegar todos os elementos um por um e adicionar dentro desse novo array.
// É possível adicionar quantos arrays quiser dentro e também é possível passar valores isolados no meio
// Exemplo: const arrayCopia = ['Num sei', ...arrayCopia1, 'Também não sei', ...arrayCopia2,'Sei menos ainda']
const arrayCombinado = ['Num sei',...array1,'Também não sei',...array2,'Sei menos ainda']
console.log(arrayCombinado)
const clonado = [...arrayCombinado]
console.log(clonado)

// ForEach
const arrayEach = [1,2,3,4,5,6,7,8,9,10]
// O forEach funciona como um for of mas com a diferença que você consegue pegar o índice e também deve usar uma função como parâmetro.
// Explicativo: variavelArray.forEach(function (aqui vai ser o parâmetro que vai se passar pelos elementos do array, aqui vai ser o parâmetro que vai se passar pelo índice que é opcional){Aqui dentro vai agir como um for normal podendo utilizar if, outro for, etc.})
// Sintaxe prático: 
// variavelArray.forEach(function (numero, indice){
//     if(numero === 1){console.log(`É o número 1 e está no índice ${indice}`)}
// })
arrayEach.forEach((numero, indice) => {
    if(numero % 2 === 0){
        console.log(`O número ${numero} é par e está no índice ${indice}`)
    }else{
        console.log(`O número ${numero} é ímpar e está no índice ${indice}`)
    }
})
// Mesma coisa mas com um for of e sem o índice
for(numero of arrayEach){
    if(numero % 2 === 0){
        console.log(`O número ${numero} é par`)
    }else{
        console.log(`O número ${numero} é impar`)
    }
}
// Testando com uma matriz
const arrayEach2 = [['Thiago',21],['Neymar',31]]
arrayEach2.forEach((array) => {
    array.forEach((informacao) => {
        console.log(informacao)
    })
    console.log('Foi uma rodada')
})
// Testando com um array com objetos dentro
testeObj.forEach((objeto) => {
    console.log(`Id: ${objeto.id}`)
    console.log(`Nome: ${objeto.nome}`)
    console.log(`Idade: ${objeto.idade}`)
})

// Combinando os elementos do array com join e split
const arrayJoin = [1,2,3,4,5,6,7,8,9,10]
// Utilizando o método variavelArray.join(Aqui dentro irá ficar algum caractere que irá separar os elementos do array na string). Irá colocar os elementos do array em uma string.
// Sintaxe prático: variavelArray.join('-')
// Resultado: 1-2-3-4-5
// Caso não passe nenhum parametro ele irá separar os elementos com uma ,
const arrayString = arrayJoin.join('.')
console.log(arrayString)
// Utilizando o método variavelArray.split(Aqui dentro irá ficar o caractere que irá dividir a string). Irá transformar uma string em um array utilizando o caracter que foi definido para dividir ela
// Ex: const variavelString = 'Isso aqui vai ser divido'
// Iremos dividir essa string utilizando o ' ' espaço como separador
// const variavelArrayDivido = variavelString.split(' ')
// Resultado dentro da variavelArrayDividido: ['Isso','aqui','vai','ser','dividido']
// O espaço serão retirados e dividirão a string
const variavelString = 'Isso aqui vai ser dividido em varios elementos'
const variavelArrayDividido = variavelString.split(' ')
console.log(variavelArrayDividido)
// projetinho - Transformando um link
let pesquisa = 'como fazer uma pesquisa na internet'
pesquisa = pesquisa.split(' ')
pesquisa = pesquisa.join('-')
console.log(`www.youtube.com/watch/${pesquisa}`)

// Receber dado do usuário no navegador
const idadeUsuario = prompt('Qual a sua idade')

if(idadeUsuario < 18){
    console.log('Criança')
}else if(idadeUsuario < 40){
    console.log('Adulto')
}else{
    console.log('Idoso')
}