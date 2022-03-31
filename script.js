const button = document.getElementById('button');
const input = document.getElementById('input1');
const input2 = document.getElementById('input2');

button.addEventListener('click', () => {
  const email = input.value;
  const password = input2.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
