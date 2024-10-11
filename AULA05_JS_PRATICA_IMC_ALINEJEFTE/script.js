var peso;
var altura;
var imc;
var resultado;

//1 recebendo o event
function calcular(event) {
  //refresh dos inputs
  event.preventDefault();
  //alert('teste');

  //recebendo os dados digitados pelo usuário
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  //calculo do imc
  imc = peso / (altura * altura);

  //testando a recepção dos valores de peso e altura
  //e testando o cálculo do imc
  console.log(peso);
  console.log(altura);
  console.log(imc);

  resultado = document.getElementById("resultado");
  if (imc < 17) {
    resultado.innerHTML =
      "</br> Seu resultado foi: " +
      imc.toFixed(2) +
      "</br>Cuidado, você está muito abaixo do peso";
  } else if (imc >= 17 && imc < 18.5) {
    resultado.innerHTML =
      "</br>Seu resultado foi: " +
      imc.toFixed(2) +
      "</br>Você está no peso normal";
  } else if (imc >= 17 && imc < 18.5) {
    resultado.innerHTML =
      "</br>Seu resultado foi: " +
      imc.toFixed(2) +
      "</br>Você está no peso normal";
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML =
      "</br>Seu resultado foi: " +
      imc.toFixed(2) +
      "</br>Você está no peso normal";
  } else if (imc >= 25 && imc < 29.99) {
    resultado.innerHTML =
      "</br>Seu resultado foi: " +
      imc.toFixed(2) +
      "</br>Você está no peso normal";
  } else if (imc > 30) {
    resultado.innerHTML =
      "</br>Seu resultado foi: " +
      imc.toFixed(2) +
      "</br>Você está no peso normal";
  }
}
