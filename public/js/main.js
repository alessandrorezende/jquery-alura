//inicializa documento
var tempoMax = 10;
var tempoInit = 0;
var campo = $(".campo-digitacao");
var frase = $(".frase").text();

$(document).ready(function(){
  inicializaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  reiniciarJogo();
  $("#botao-reiniciar").click(reiniciarJogo);

});

//------------------------------------------------------------------------------
//1- parte
function inicializaTamanhoFrase(){
  var numPalavras = frase.split(" ").length;
  $("#frase-size").text(numPalavras);
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
        clearInterval(cronometroID);
        finalizaJogo();
      }
    },1000);
  });
}

function finalizaJogo(){
  campo.attr("disabled",true);
  //campo.css("background-color","lightgray");
  //campo.addClass("campo-desativado");
  campo.toggleClass("campo-desativado"); //coloca ou retira a classe
  inserirPlacar();
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
    //campo.removeClass("campo-desativado");
    campo.toggleClass("campo-desativado"); //coloca ou retira a classe
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}
//------------------------------------------------------------------------------
//5- parte
function inicializaMarcadores(){
  campo.on("input", function(){
      var digitado = campo.val();
      var comparavel = frase.substr(0,digitado.length);

      if(digitado == comparavel){
        campo.addClass("borda-verde");
        campo.removeClass("borda-vermelha");
      }else{
        campo.addClass("borda-vermelha");
        campo.removeClass("borda-verde");
      }
  });

}
//------------------------------------------------------------------------------
//6- parte
function inserirPlacar(){
  var corpoTabela = $(".placar").find("tbody");
  var usuario= "Alessandro";
  var numPalavras = $("#qtd-frase").text();

  var linha = "<tr>" + "<td>" + usuario + "</td>" + "<td>" + numPalavras + "</td>" + "</tr>";

  corpoTabela.prepend(linha); //inserir no inicio
}
