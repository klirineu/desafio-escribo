import 'dart:io';

String somaDivisiveis(valor) {
  valor = int.parse(valor);

  int soma = 0;

  for (int i = 0; i < valor; i++) {
    if ((i % 3) == 0 || (i % 5) == 0) {
      soma += i;
    }
  }

  return ('A soma de todos os múltiplos por 5 e 3 menores que ' +
      valor.toString() +
      ' é: ' +
      soma.toString());
}

void main() {
  stdout.write("Digite um número inteiro: ");

  var valor = stdin.readLineSync();

  stdout.write(somaDivisiveis(valor));
}
