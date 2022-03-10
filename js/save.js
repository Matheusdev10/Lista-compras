// Criei uma constante chamada btnSave..... depois eu uso uma função que chama getelementbyid que serve para pegar um elemento pelo id no documento do html
const btnSave = document.getElementById('btn-save')
// eu chamo a constante btnsave porque eu quero escutar o evento de click dela. Consigo escutar essa função pelo addeventlistener que esta dentro da função
btnSave.addEventListener('click', saveInfo)
// Crio a função para salvar os dados

// a função criada saveInfo serve para que toda vez que eu clicar no botão essa função vai pegar o valor dos input e salvar em algum lugar
function saveInfo() {
  const inputName = document.getElementById('input-name-produto')
  const inputPrice = document.getElementById('input-price-produto')
  localStorage.setItem('inputName', inputName.value)
  localStorage.setItem('inputPrice', inputPrice.value)
}
