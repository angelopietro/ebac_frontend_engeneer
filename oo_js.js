/*
  • Crie uma classe de uma abstração;
  • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
  • Crie pelo menos três instâncias de objetos;
*/
class TipoDeCafe {
  constructor(cafe, tamanho, acucar, levar) {
    this.cafe = cafe;
    this.tamanho = tamanho;
    this.acucar = acucar;
    this.levar = levar;
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
  constructor(cafe, tamanho, acucar, levar) {
    super(cafe, tamanho, acucar, levar);
  }

  prepararCafe() {
    if (this.levar) {
      return `${super.prepararCafe()} para levar na viagem`;
    } else {
      return `${super.prepararCafe()} para beber na cafeteria com os amigos`;
    }
  }
}

const pedidoCafe1 = new TipoDeCafe('Puro', 'pequeno');
const pedidoCafe2 = new CafeComAcucar('Cappuccino', 'grande', true);
const pedidoCafe3 = new ParaViagem('Expresso', 'médio', null , false);

console.log(pedidoCafe1.prepararCafe());
console.log(pedidoCafe2.prepararCafe());
console.log(pedidoCafe3.prepararCafe());
