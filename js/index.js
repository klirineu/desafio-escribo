const readLine = require('readline')

const cmd = readLine.createInterface(process.stdin, process.stdout)

function somaDivisiveis(valor) {
  const parsedValue = parseInt(valor)

  let soma = 0

  for(let i = 0; i < parsedValue; i++) {
    if(!(i%3) || !(i%5)) {
      soma += i
    }
  }

  return soma
}

cmd.prompt()

cmd.question("Digite um número inteiro: ", (valor) => {
  const res = somaDivisiveis(valor)

  console.log(`A soma de todos os múltiplos por 5 e 3 menores que ${valor} é: ${res}`)

  cmd.close()
})