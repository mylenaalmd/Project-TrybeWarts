const button = document.getElementById('button');
const input = document.getElementById('input1');
const input2 = document.getElementById('input2');
const formulario = document.getElementById('evaluation-form');

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const content = document.getElementById('content');
const textArea = document.getElementById('textarea');
const span = document.getElementById('counter');
const button2 = document.getElementById('submit-btn');
const inputt = document.getElementById('agreement');

button.addEventListener('click', () => {
  const email = input.value;
  const password = input2.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

inputt.addEventListener('click', () => {
  if (inputt.checked === true) {
    button2.disabled = false;
  } else {
    button2.disabled = true;
  }
});

textArea.addEventListener('input', (event) => {
  const contador = 500;
  const caracteres = event.target.value.length;
  const numeroCaracteres = contador - caracteres;
  span.innerText = numeroCaracteres;
});

function createList() {
  const list = document.createElement('ul');
  formulario.appendChild(list);
  return list;
}

function subjects() {
  const checkbox = content.querySelectorAll('input[type="checkbox"]:checked');
  let newString = '';
  for (let i = 0; i < checkbox.length; i += 1) {
    newString += `${checkbox[i].value}, `;
  }
  return newString;
}

button2.addEventListener('click', () => {
  const family = document.querySelector('input[name="family"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked');
  const newString = subjects();
  formulario.innerHTML = '';
  const list = createList();
  for (let i = 0; i < 7; i += 1) {
    const li = document.createElement('li');
    const values = [
      `Nome: ${inputName.value} ${inputLastName.value}`,
      `Email: ${inputEmail.value}`,
      `Casa: ${house.value}`,
      `Família: ${family.value}`,
      `Matérias: ${newString}`,
      `Avaliação: ${rate.value}`,
      `Observações: ${textArea.value}`];
    li.innerText = values[i];
    list.appendChild(li);
  }
});
