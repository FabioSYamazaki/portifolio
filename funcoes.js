window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
var _AlturaDocumento = $(window).height(); //pega altura da janela

function AlturaSecao() {
$('.secao').height(_AlturaDocumento); //atribui o valor da variável a todas as divs com a classe secao
$('#subcorpo').height(_AlturaDocumento);
}

function ScrollSecao() {
console.log('entrou');
var body = $('html, body');
if($(this).parent('.secao').is('#secao-01')) {
    //verifica se está na primeira seção e rola para a segunda
    body.animate({scrollTop: _AlturaDocumento},);
    $('#subcorpo').height(_AlturaDocumento*2);
    //document.getElementById("psobremim").style.opacity = "1";
    document.getElementById("psobremim").innerHTML = "Portifólio"
    document.getElementById("psobremim").style.marginTop = _AlturaDocumento*2/3 + "px";
} else if ($(this).parent('.secao').is('#secao-02')) {
    //verifica se está na segunda seção e rola para a terceira
    body.animate({scrollTop: _AlturaDocumento*2},);
    $('#subcorpo').height(_AlturaDocumento*3);
    
    
    document.getElementById("psobremim").innerHTML = "Experiências"
    document.getElementById("psobremim").style.marginTop = _AlturaDocumento*5/3 + "px";
} else {
    //rola para o início da página
    document.getElementById("psobremim").style.marginTop = "0";
    document.getElementById("psobremim").innerHTML = "";
    $('#subcorpo').height(_AlturaDocumento);
    body.animate({scrollTop: 0}, 300);
}
}

$('.icon').click(ScrollSecao); //chama a função na ação de click no ícone

$(AlturaSecao); //chama a nossa função só depois que o documento estiver completamente carregado


