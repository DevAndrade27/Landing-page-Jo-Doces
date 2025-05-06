// Quando o DOM estiver totalmente carregado...
$(document).ready(function() {

    // Quando o botão com id "mobile_btn" for clicado...
    $("#mobile_btn").on("click", function(){

        // Alterna a classe "active" no menu com id "mobile_menu"
        $("#mobile_menu").toggleClass("active");

        // Alterna o ícone dentro do botão (ex: troca de "menu" para "X")
        $("#mobile_btn").find("i").toggleClass("fa-x");
    });

    // Seleciona todas as seções e itens do menu
    const sections = $('section');
    const navItems = $('.nav-item');

    // Evento de scroll da janela
    $(window).on('scroll', function(){
        const header = $("header"); // Seleciona o header
        const scrollPosition = $(window).scrollTop() - header.outerHeight(); // Posição do scroll menos a altura do header

        let activeSectionIndex = 0; // Variável para guardar qual seção está ativa

        // Se estiver no topo da página (ou acima do header)
        if(scrollPosition <= 0){
            header.css("box-shadow", "none"); // Remove sombra
        } else {
            header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1)"); // Adiciona sombra ao rolar
        }

        // Loop por cada seção para verificar qual está visível no scroll atual
        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96; // topo da seção com compensação do header fixo (96px)
            const sectionBottom = sectionTop + section.outerHeight(); // base da seção

            // Verifica se o scroll está dentro da seção atual
            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i; // Atualiza índice da seção ativa
                return false; // Encerra o loop assim que encontrar a seção correspondente
            }
        });

        // Atualiza os links do menu:
        $(navItems).removeClass('active'); // Remove a classe "active" de todos os links
        $(navItems[activeSectionIndex]).addClass('active'); // Adiciona "active" no link da seção ativa
    });

    ScrollReveal().reveal("#cta", {
        origin: "left",
        duration: 2000,
        distance: "20%"
    });
    ScrollReveal().reveal("#banner", {
        origin: "right",
        duration: 2000,
        distance: "20%",
        
    })
    ScrollReveal().reveal(".dish", {
        origin: "bottom",
        duration: 1500,
        distance: "20%",
        delay: 200
    });
    ScrollReveal().reveal(".testmonials-chef", {
        origin: "left",
        duration: 1000,
        distance: "20%"
    });
    ScrollReveal().reveal(".feedback", {
        origin: "right",
        duration: 1000,
        distance: "20%"
    })

  

    
});
