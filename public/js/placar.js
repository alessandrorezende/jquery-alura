//------------------------------------------------------------------------------
//6- parte
function inserirPlacar(){
  var corpoTabela = $(".placar").find("tbody");
  var usuario= "Alessandro";
  var numPalavras = $("#qtd-frase").text();

  var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>" ;
  //var linha = "<tr>" + "<td>" + usuario + "</td>" + "<td>" + numPalavras + "</td>" + "<td>"+ botaoRemover + "</td>" + "</tr>";

  var linha = novaLinha(usuario,numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.prepend(linha); //inserir no inicio
}

function novaLinha(usuario,numPalavras){
      var linha = $("<tr>");
      var colunaUsuario = $("<td>").text(usuario);
      var colunaPalavras = $("<td>").text(numPalavras);
      var colunaRemover = $("<td>");

      var link = $("<a>").attr("href","#").addClass("botao-remover");
      var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

      // Icone dentro do <a>
      link.append(icone);

      // <a> dentro do <td>
      colunaRemover.append(link);

      // Os três <td> dentro do <tr>
      linha.append(colunaUsuario);
      linha.append(colunaPalavras);
      linha.append(colunaRemover);

      return linha;
}

$(".botao-remover").click(function(event){
  event.preventDefault(); //parar de fazer o padrao do <a>
  $(this).parent().parent().remove();
});

function removeLinha(event){
  event.preventDefault(); //parar de fazer o padrao do <a>
  $(this).parent().parent().remove();
}
