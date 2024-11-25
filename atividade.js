$(document).ready(function(){
    // function calcularQuantidadeDeProdutos() {
    //     quant = $("#produtos tbody tr").length;
    //     $("#quant").text(quant);
    // }

    $("#salvar").click(function(){
        nome = $("#nome").val();
        cor = $("#cor").val();
        tamanho = $("#tamanho").val();
        quantidade = $("#quantidade").val();
        imagem = $("#imagem").val();
        nome_arq = imagem.substring(12);
        $("#produtos").append(
         "<div class='produto' style='border: solid black 1px;'>" +
            "<ul>" +
                "<li class='image'>" +  
                    "<img src='"+nome_arq+"'>" +
                "</li>" +   
                "<li class='nome'>" + nome + "</li>" +
                "<li class='cor'>" + cor + "</li>" +
                "<li class='tamanho'>" + tamanho + "</li>" + 
                "<li class='quantidade'>" + quantidade + "</li>" + 
                "<li><a href=''>Excluir</a></li>" +
            "</ul>" +
        "</div>"
        );
    });

    $("#excluirtudo").click(function(){
        if (confirm("Deseja realmente excluir todos os dados?")) {
            $("#produtos tbody").empty();
        }
    });

    $("#produtos").on("click", "a", function(event){
        event.preventDefault();
        $(this).closest("div").remove();
    });
});