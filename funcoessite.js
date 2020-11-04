//pag1
var img = document.getElementById('calendario')
var cond = 1
function mudaFoto(){
    if (cond == 1) {
    img.src = "trans.png"
    cond += 1
        setTimeout(function mudaFoto2(){
            img.src = "trans2.png"
            setTimeout(function mudaFoto3(){
            img.src = "31demaioobss.png"
        },130)
        },130)
    }else{
    }
}

function retornaFoto(){
    if (cond == 2){
        
        setTimeout(function mudaFoto2(){
            img.src = "trans2.png"
            setTimeout(function mudaFoto3(){
            img.src = "trans.png"
                setTimeout(function mudaFoto3(){
                    img.src = "calendario.png"
                    cond -= 1
        },150)
        },150)
        },150)
    }else{
    }
}

//pag2
function surgeFoto (n1){ 
    document.getElementById(n1).style.opacity = "0.85";
    
}

function someFoto(n2){
    document.getElementById(n2).style.opacity = "0"
}
function surgeFotoComida (){ 
    document.getElementById('tatatan').style.opacity = "0.85";
    document.getElementById('batata').style.opacity = "0.85";
}

function someFotoComida (){
    document.getElementById('tatatan').style.opacity = "0";
    document.getElementById('batata').style.opacity = "0";
}

//pag3
var abrev = document.querySelector(".fotoss")
var condFoto = 0
function flash () {
    if (condFoto < 14){
    document.getElementById("camera").src = "cameraflash.png"
    setTimeout(function voltaCamera() {
        document.getElementById("camera").src = "camera.png"
    },400)
    }else if (condFoto < 17){

    }else{
        alert('AFF QUEBROU A CAMERA DERRR')
        document.getElementById("camera").src = "cameraquebrada.png"
        document.getElementById("varal").src = "varalbravo.png"
    }
}



function revelaFoto() {
    condFoto++
    abrev.style.transition = "all 0s";
    abrev.style.marginTop = "-345px";
    abrev.src = ""
    
    setTimeout (function meawhile(){
        switch (condFoto) {
            case 1:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto1.png"
                abrev.style.marginTop = "0px";
                
            break
            case 2:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto2.png"
                abrev.style.marginTop = "0px";
            break
            case 3:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto3.png"
                abrev.style.marginTop = "0px";
            break
            case 4:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto4.png"
                abrev.style.marginTop = "0px";
            break
            case 5:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto5.png"
                abrev.style.marginTop = "0px";
            break
            case 6:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto6.png"
                abrev.style.marginTop = "0px";
            break
            case 7:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto7.png"
                abrev.style.marginTop = "0px";
            break
            case 8:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto8.png"
                abrev.style.marginTop = "0px";
            break
            case 9:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto9.png"
                abrev.style.marginTop = "0px";
            break
            case 10:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto10.png"
                abrev.style.marginTop = "0px";
            break
            case 11:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto11.png"
                abrev.style.marginTop = "0px";
            break
            case 12:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto12.png"
                abrev.style.marginTop = "0px";
            break
            case 13:
                abrev.style.transition = "all 1.5s";
                abrev.src = "foto13.png"
                abrev.style.marginTop = "0px";
            break
            case 14:
                abrev.style.transition = "all 1.5s";
                abrev.src = "filme.png"
                abrev.style.marginTop = "0px";
            break
            default: 
        }
    },500)
}
var _AlturaDocumento = $(window).height(); //pega altura da janela

function AlturaSecao() {
$('.secao').height(_AlturaDocumento); //atribui o valor da variável a todas as divs com a classe secao
}

function ScrollSecao() {
console.log('entrou');
var body = $('html, body');
if($(this).parent('.secao').is('#secao-01')) {
    //verifica se está na primeira seção e rola para a segunda
    body.animate({scrollTop: _AlturaDocumento}, '500');
} else if ($(this).parent('.secao').is('#secao-02')) {
    //verifica se está na segunda seção e rola para a terceira
    body.animate({scrollTop: _AlturaDocumento*2}, '500');
} else if ($(this).parent('.secao').is('#secao-03')) {
    //verifica se está na terceira seção e rola para a quarta
    body.animate({scrollTop: _AlturaDocumento*3}, '500');
} else {
    //rola para o início da página
    body.animate({scrollTop: 0}, '800');
}
}

$('.icone-scroll').click(ScrollSecao); //chama a função na ação de click no ícone

$(AlturaSecao); //chama a nossa função só depois que o documento estiver completamente carregado
