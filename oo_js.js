/*
  • Crie uma classe de uma abstração;
  • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
  • Crie pelo menos três instâncias de objetos;
*/
class TipoDeCafe {
  constructor(cafe, tamanho, acucar) {
    this.cafe = cafe;
    this.tamanho = tamanho;
    this.acucar = acucar;
  }

  prepararCafe() {
    return `Preparando um café ${this.cafe} ${this.tamanho}`;
  }
}

class CafeComAcucar extends TipoDeCafe {
  constructor(cafe, tamanho, acucar) {
    super(cafe, tamanho, acucar);
  }

  prepararCafe() {
    if (this.acucar) {
      return `${super.prepararCafe()} com açúcar`;
    } else {
      return `${super.prepararCafe()} sem açúcar`;
    }
  }
}

class ParaViagem extends TipoDeCafe {
  constructor(cafe, tamanho) {
    super(cafe, tamanho);
  }

  prepararCafe() {
    return `${super.prepararCafe()} para levar na viagem`;
  }
}

const pedidoCafe1 = new TipoDeCafe('Puro', 'pequeno');
const pedidoCafe2 = new CafeComAcucar('Cappuccino', 'grande', true);
const pedidoCafe3 = new ParaViagem('Expresso', 'médio');

console.log(pedidoCafe1.prepararCafe());
console.log(pedidoCafe2.prepararCafe());
console.log(pedidoCafe3.prepararCafe());
