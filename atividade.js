$(document).ready(function(){
    $("#salvar").click(function(){
        nome = $("#nome").val();
        cor = $("#cor").val();
        tamanho = $("#tamanho").val();
        estoque = $("#estoque").val();
        imagem = $("#imagem").val();
        nome_arq = imagem.substring(12);
        $("#produtos").append(
         "<div class='produto'>" +
            "<ul>" +
                "<li class='image'>" +  
                    "<img src='"+nome_arq+"'>" +
                "</li>" +   
                "<li class='nome'>Nome: " + nome + "</li>" +
                "<li class='cor'>Cor: " + cor + "</li>" +
                "<li class='tamanho'>Tamanho: " + tamanho + "</li>" + 
                "<li class='estoque'>Estoque: " + estoque + "</li>" + 
                "<li><a href=''>Excluir</a></li>" +
            "</ul>" +
        "</div>"
        );
    });

    $("#excluirtudo").click(function(){
        if (confirm("Deseja realmente excluir todos os dados?")) {
            $("#produtos").empty();
        }
    });

    $("#produtos").on("click", "a", function(event){
        event.preventDefault();
        $(this).closest("div").remove();
    });
});