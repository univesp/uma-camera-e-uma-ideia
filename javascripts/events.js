$(document).ready(function(){

  //animação título
  $("#camera").addClass("animated slideInDown");

  //desabilita autoplay do carousel
  $(".carousel").carousel(
    {
      interval: false
    });

  // Parallax horizontal
  SmoothParallax.init();


  // Eventos da ficha
    var ficha = $("#ficha");

    // Init

      // Insere um primeiro bloco na div novos-blocos baseado no modelo
      var clone = $(".bloco-modelo .bloco").clone();
      $(".novos-blocos").append(clone);


    // Menu de Ações

      // Mover para cima
      $("#ficha").on('click', '.moverAcima', function(){
        // Reconhece o bloco imediatamente anterior ao bloco pai e insere o bloco pai acima dele.
        var blocoAnterior = $(this).parents(".bloco").prev(".bloco");
        $(this).parents(".bloco").insertBefore(blocoAnterior);
      });

      // Mover para baixo
      $("#ficha").on('click', '.moverAbaixo', function(){
        // Reconhece o bloco imediatamente posterior ao bloco pai e insere o bloco pai acima dele.
        var blocoSeguinte = $(this).parents(".bloco").next(".bloco");
        $(this).parents(".bloco").insertAfter(blocoSeguinte);
      });

      // Apagar cena
      $("#ficha").on('click', '.apagarCena', function(){
        // Remove o bloco pai
        $(this).parents(".bloco").remove();
      });

      // Adicionar cena
      $(".adicionarCena").on("click", function(){
        // Habilita botão Apagar tudo a partir do segundo bloco.
        if($(".novos-blocos .blocos").length != 1){
          $(".apagarTudo").removeAttr("disabled");
        }
        // Gera um clone do bloco modelo com todos os textareas zerados e o adiciona na div novos-blocos.
        var clone = $(".bloco-modelo .bloco").clone();
        $(".novos-blocos").append(clone);
      });

      // Apagar tudo
      $(".apagarTudo").on("click", function(){
        // Remove todo o conteúdo inserido em novos-blocos e apaga textos dos blocos iniciais.
        $(".novos-blocos").empty();
        $("#ficha textarea").val('');
        // Desabilita botão Apagar tudo, já que a div novos-blocos ficará vazia.
        $(".apagarTudo").attr("disabled", "disabled")
      });

    // Expande automaticamente a textarea
    function autoheight(a) {
      if (!$(a).prop('scrollTop')) {
          do {
              var b = $(a).prop('scrollHeight');
              var h = $(a).height();
              $(a).height(h - 5);
          }
          while (b && (b != $(a).prop('scrollHeight')));
      };
      $(a).height($(a).prop('scrollHeight') + 20);
    }

    // $("textarea").keyup(function (e) {
    //   autoheight(this);
    //   console.log("keyup!")
    // });
    $(".novos-blocos").on('keyup', 'textarea', function() {
      autoheight(this);
    });


});
