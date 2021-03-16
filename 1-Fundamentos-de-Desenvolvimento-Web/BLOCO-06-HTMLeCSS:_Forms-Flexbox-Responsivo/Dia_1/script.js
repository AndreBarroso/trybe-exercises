const nome = document.getElementById('nome')
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const estado = document.getElementById('estado');
const resumoProfissional = document.getElementById('resumoProfissional');
const cargo = document.getElementById('cargo');
const descricaoCargo = document.getElementById('descricaoCargo');
const dataDeInicio = document.getElementById('dataDeInicio');
const submit = document.getElementById('submit');
const limpar = document.getElementById('clear');

const rNome = document.getElementById('rNome');
const rEmail = document.getElementById('rEmail');
const rCpf = document.getElementById('rCPF');
const rEndereco = document.getElementById('rEndereco');
const rEstado = document.getElementById('rEstado');
const rResumoProfissional = document.getElementById('rResumoProfissional');
const rCargo = document.getElementById('rCargo');
const rDescricaoCargo = document.getElementById('rDescricaoCargo');
const rDataDeInicio = document.getElementById('rDataDeInicio');
const rSubmit = document.getElementById('rSubmit');

function eventSubmeter(e) {
    e.preventDefault();
    rNome.innerText = nome.value; 
    rEmail.innerText = email.value;
    rCpf.innerText = cpf.value;
    rEndereco.innerText = endereco.value;
    rEstado.innerText = estado.value;
    rResumoProfissional.innerText = resumoProfissional.value;
    rCargo.innerText = cargo.value;
    rDescricaoCargo.innerText = descricaoCargo.value;
    rDataDeInicio.innerText = dataDeInicio.value;
}

function submete() {
    submit.addEventListener('click', eventSubmeter)
}

function limparEvent() {
    rNome.innerText = '';
    rEmail.innerText = '';
    rCpf.innerText = '';
    rEndereco.innerText = '';
    rEstado.innerText = '';
    rResumoProfissional.innerText = '';
    rCargo.innerText = cargo.value;
    rDescricaoCargo.innerText = '';
    rDataDeInicio.innerText = '';
}

function limpa() {
    limpar.addEventListener('click', limparEvent);
}

submete();
limpa();