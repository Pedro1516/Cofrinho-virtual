const add = document.querySelectorAll('.add')
const sub = document.querySelectorAll('.sub')
const totalMoedas = document.querySelector('#quant-moedas')
const totalCedulas = document.querySelector('#quant-cedulas')
const valorTotal = document.querySelector('#total')
const btnMenuCedulas = document.querySelector('#ver-inf-cedulas')
const menuCedulas = document.querySelector('#informacoes-cedulas')
const btnMenuMoedas = document.querySelector('#ver-inf-moedas')
const menuMoedas = document.querySelector('#informacoes-moedas')

const dinheiro = {
  moedas: 0,
  cedulas: 0,
  total: 0
}


add.forEach((item, i) => {
  item.addEventListener('click', () => {
    const valor = Number(item.attributes.valor.value)

    if(i < 7){
      dinheiro.cedulas += valor
    }
    else {
      dinheiro.moedas += valor
    }

    dinheiro.total = dinheiro.cedulas + dinheiro.moedas

    totalMoedas.innerText = dinheiro.moedas.toFixed(2)
    totalCedulas.innerText = dinheiro.cedulas.toFixed(2)
    valorTotal.innerText = dinheiro.total.toFixed(2)
  })
});

sub.forEach((item, i) => {
  item.addEventListener('click', () => {
    const valor = Number(item.attributes.valor.value)

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

    dinheiro.total = dinheiro.cedulas + dinheiro.moedas

    totalMoedas.innerText = dinheiro.moedas.toFixed(2)
    totalCedulas.innerText = dinheiro.cedulas.toFixed(2)
    valorTotal.innerText = dinheiro.total.toFixed(2)
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
