const input = document.querySelector('input')
const btnAdicionar = document.querySelector('button')
const lista = document.querySelector('.lista-de-tarefas')
const btnRemover = document.querySelector('.btn-remover')

let tarefa

function criarTarefa() {
  let value = input.value
  tarefa = document.createElement('li')
  tarefa.innerText = value
  clear()
  return tarefa
}

function removerTarefa() {
  let btnRemover = document.createElement('button')
  btnRemover.addEventListener('click', remover)
  btnRemover.textContent = 'remover'
  return btnRemover
}

function remover(event) {
  const parentLi = event.target.parentElement
  parentLi.remove()
}

function mostrar() {
  lista.append(criarTarefa())
  tarefa.append(removerTarefa())
}

btnAdicionar.addEventListener('click', () => {
  mostrar()
})

function clear() {
  input.value = ''
  input.focus()
}
