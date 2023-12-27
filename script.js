// Selecionando elementos do DOM
let sliderElement = document.querySelector("#slider");   // Elemento do tipo range (input)
let buttonElement = document.querySelector("#button");   // Elemento do tipo button (botão)

let sizePassword = document.querySelector("#valor");     // Elemento que exibe o tamanho da senha
let password = document.querySelector("#password");      // Elemento que exibe a senha gerada

let containerPassword = document.querySelector("#container-password");   // Elemento que contém informações sobre a senha

// Conjunto de caracteres para gerar a senha
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

// Variável para armazenar a senha gerada
let novaSenha = "";

// Inicializando o tamanho da senha com o valor do slider
sizePassword.innerHTML = sliderElement.value;

// Adicionando um ouvinte de evento para o evento 'input' do slider
sliderElement.oninput = function(){
    // Atualizando o elemento que exibe o tamanho da senha com o valor do slider
    sizePassword.innerHTML = this.value;
}

//função para gerar a senha
function generatePassword(){

    let pass = "";


    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

//Função para copiar a senha gerada
function copyPassword(){
    console.log("Função de cópia acionada");
    navigator.clipboard.writeText(novaSenha);
}

