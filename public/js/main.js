//inicializa documento
var tempoMax = 10;
var tempoInit = 0;
var campo = $(".campo-digitacao");

$(document).ready(function(){
  inicializaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  reiniciarJogo();
  $("#botao-reiniciar").click(reiniciarJogo);
});

//------------------------------------------------------------------------------
//1- parte
function inicializaTamanhoFrase(){
  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;
  $("#frase-size").text(numPalavras);
  $("#caracteres-size").text(frase.length);
}
//------------------------------------------------------------------------------
//2- parte
function inicializaContadores(){
  var qtdFrase = $("#qtd-frase");

  campo.on("input",function(){
    var conteudo = campo.val();
    //console.log(campo.val()); //mostrar no console o conteudo do campo-digitacao
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    qtdFrase.text(qtdPalavras);

    //Retira os espaço da String
    var conteudoSemEspaco = conteudo.replace(/\S+/,'');
    $("#qtd-caracteres").text(conteudoSemEspaco.length);
  });
}
//------------------------------------------------------------------------------
//3- parte
function inicializaCronometro(){
  var tempo = tempoMax;
  campo.one("focus",function(){
    var cronometroID = setInterval(function(){
      tempo--;
      //console.log(tempo);
      $("#tempo-segundos").text(tempo);
      if(tempo < 1){
        campo.attr("disabled",true);
        clearInterval(cronometroID);
      }
    },1000);
  });
}
//------------------------------------------------------------------------------
//4- parte
function reiniciarJogo(){
    campo.attr("disabled",false);
    campo.val("");
    $("#qtd-caracteres").text(tempoInit);
    $("#qtd-frase").text(tempoInit);
    $("#tempo-segundos").text(tempoMax);
    inicializaCronometro();
}
