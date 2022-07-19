const add = document.querySelectorAll('.add')
const sub = document.querySelectorAll('.sub')
const totalMoedas = document.querySelector('#quant-moedas')
const totalCedulas = document.querySelector('#quant-cedulas')
const valorTotal = document.querySelector('#total')
const btnMenuCedulas = document.querySelector('#ver-inf-cedulas')
const menuCedulas = document.querySelector('#informacoes-cedulas')
const btnMenuMoedas = document.querySelector('#ver-inf-moedas')
const menuMoedas = document.querySelector('#informacoes-moedas')
const quantidadeMoedas = document.querySelectorAll('.quantia-moeda')
const quantidadeCedulas = document.querySelectorAll('.quantia-cedula')

const dinheiro = {
  moedas: 0,
  cedulas: 0,
  total: 0
}

const quantiaMoedas = {
  moeda5: 0,
  moeda10: 0,
  moeda25: 0,
  moeda50: 0,
  moeda1: 0

}

const quantiaCedulas = {
  cedula2: 0,
  cedula5: 0,
  cedula10: 0,
  cedula20: 0,
  cedula50: 0,
  cedula100: 0,
  cedula200: 0
}

function atualizarQuantidade() {
    //Atualiza a quantidade de cedulas de acordo com o obj quantiaCedulas
    quantidadeCedulas.forEach((item, i) => {
      const nomeCedula = Object.keys(quantiaCedulas)[i]
      item.innerText = quantiaCedulas[nomeCedula]
    })
    //Atualiza a quantidade de moedas de acordo com o obj quantiaMoedas
    quantidadeMoedas.forEach((item, i) => {
      const nomeMoeda = Object.keys(quantiaMoedas)[i]
      item.innerText = quantiaMoedas[nomeMoeda]
    })
}


add.forEach((item, i) => {
  item.addEventListener('click', () => {
    const valor = Number(item.attributes.valor.value)

    //Soma o valor do dinheiro ao array
    if(i < 7){
      dinheiro.cedulas += valor
    }
    else {
      dinheiro.moedas += valor
    }

    //Aumenta a quantidade da moeda/nota
    switch (i) {
      case 0:
        quantiaCedulas.cedula2++
        break;
      case 1:
        quantiaCedulas.cedula5++
        break
      case 2:
        quantiaCedulas.cedula10++
        break;
      case 3:
        quantiaCedulas.cedula20++
        break
      case 4:
        quantiaCedulas.cedula50++
        break
      case 5:
        quantiaCedulas.cedula100++
        break
      case 6:
        quantiaCedulas.cedula200++
        break
      case 7:
        quantiaMoedas.moeda5++
        break
      case 8:
        quantiaMoedas.moeda10++
        break
      case 9:
        quantiaMoedas.moeda25++
        break
      case 10:
        quantiaMoedas.moeda50++
        break
      case 11:
        quantiaMoedas.moeda1++
        break
    }


    dinheiro.total = dinheiro.cedulas + dinheiro.moedas

    totalMoedas.innerText = dinheiro.moedas.toFixed(2)
    totalCedulas.innerText = dinheiro.cedulas.toFixed(2)
    valorTotal.innerText = dinheiro.total.toFixed(2)

    atualizarQuantidade()
  })
});

sub.forEach((item, i) => {
  item.addEventListener('click', () => {
    const valor = Number(item.attributes.valor.value)

    //Diminui o valor do total
    if(i < 7){
      if(dinheiro.cedulas - valor >= 0){
        dinheiro.cedulas -= valor
      }
    }
    else {
      if(dinheiro.moedas - valor >= 0){
        dinheiro.moedas -= valor
      }
    }

    //Subtrai uma moeda/cedula do contador
    switch (i) {
      case 0:
        quantiaCedulas.cedula2 > 0 ? (quantiaCedulas.cedula2--) : false
        break;
      case 1:
        quantiaCedulas.cedula5 > 0 ? (quantiaCedulas.cedula5--) : false
        break
      case 2:
        quantiaCedulas.cedula10 > 0 ? (quantiaCedulas.cedula10--) : false
        break;
      case 3:
        quantiaCedulas.cedula20 > 0 ? (quantiaCedulas.cedula20--) : false
        break
      case 4:
        quantiaCedulas.cedula50 > 0 ? (quantiaCedulas.cedula50--) : false
        break
      case 5:
        quantiaCedulas.cedula100 > 0 ? (quantiaCedulas.cedula100--) : false
        break
      case 6:
        quantiaMoedas.moeda200 > 0 ? (quantiaCedulas.cedula200--) : false
        break
      case 7:
        quantiaMoedas.moeda5 > 0 ? (quantiaMoedas.moeda5--) : false
        break
      case 8:
        quantiaMoedas.moeda10 > 0 ? (quantiaMoedas.moeda10--) : false
        break
      case 9:
        quantiaMoedas.moeda25 > 0 ? (quantiaMoedas.moeda25--) : false
        break
      case 10:
        quantiaMoedas.moeda50 > 0 ? (quantiaMoedas.moeda50--) : false
        break
      case 11:
        quantiaMoedas.moeda1 > 0 ? (quantiaMoedas.moeda1--) : false
        break
    }

    dinheiro.total = dinheiro.cedulas + dinheiro.moedas

    totalMoedas.innerText = dinheiro.moedas.toFixed(2)
    totalCedulas.innerText = dinheiro.cedulas.toFixed(2)
    valorTotal.innerText = dinheiro.total.toFixed(2)

    atualizarQuantidade()

    })
});

btnMenuCedulas.addEventListener('mouseenter', () => {
  menuCedulas.style.display = 'flex'
})

btnMenuCedulas.addEventListener('mouseout', () => {
  menuCedulas.style.display = 'none'
})

btnMenuMoedas.addEventListener('mouseenter', () => {
  menuMoedas.style.display = 'flex'
})

btnMenuMoedas.addEventListener('mouseout', () => {
  menuMoedas.style.display = 'none'
})
