function confirmar (){
    var year = document.getElementById("ano")
    var ano = Number(year.value)
    var data = new Date()
    var today = data.getFullYear()
    var imagem = document.getElementById('img')

    if(year.value.length  == 0 || Number(year.value) >today ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var nasc = today - ano
        var sex = document.getElementsByName("radsex")
        var genero = ""
        if (sex[0].checked) {
            genero = "Homem"
            if ( nasc < 12 ) {
                imagem.src = `./img/bebem.png`
                msg.innerHTML = `Você é homem e tem  ${nasc} anos.`
                document.body.style.background = '#D3D3D3';
                box.style.width = '350px'; // Ajuste para o tamanho desejado
                box.style.height = '380px'; // Ajuste para o tamanho desejado
                box.style.transition = 'width 2s, height 4s';
            } else if (nasc >= 12 && nasc < 18) {
                img.src = './img/adom.png';
                msg.innerHTML = `Você é homem e tem  ${nasc} anos.`
                document.body.style.background = '#FFDEAD';
                box.style.width = '350px'; // Ajuste para o tamanho desejado
                box.style.height = '380px'; // Ajuste para o tamanho desejado
                box.style.transition = 'width 2s, height 4s';
            } else if (nasc >= 18 && nasc < 40) {
                img.src = './img/adum.png';
                msg.innerHTML = `Você é homem e tem  ${nasc} anos.`
                document.body.style.background = '#FFDEAD';
                box.style.width = '350px'; // Ajuste para o tamanho desejado
                box.style.height = '380px'; // Ajuste para o tamanho desejado
                box.style.transition = 'width 2s, height 4s';
            } else {
                img.src = './img/idosom.png';
                msg.innerHTML = `Você é homem e tem  ${nasc} anos.`
                document.body.style.background = '#808080';
                box.style.width = '350px'; // Ajuste para o tamanho desejado
                box.style.height = '380px'; // Ajuste para o tamanho desejado
                box.style.transition = 'width 2s, height 4s';
        }
        }else if (sex[1].checked) {
            genero = "Mulher"
            if ( nasc < 12 ) {
                img.src = './img/bebef.png';
                msg.innerHTML = `Você é mulher e tem  ${nasc} anos.`
                document.body.style.background = '#D3D3D3';
                box.style.width = '350px'; // Ajuste para o tamanho desejado
                box.style.height = '380px'; // Ajuste para o tamanho desejado
                box.style.transition = 'width 2s, height 4s';
            } else if (nasc >= 12 && nasc < 18) {
                img.src = './img/adof.png';
                msg.innerHTML = `Você  é mulher e tem  ${nasc} anos.`
                document.body.style.background = '#FFDEAD';
                box.style.width = '350px'; // Ajuste para o tamanho desejado
                box.style.height = '380px'; // Ajuste para o tamanho desejado
                box.style.transition = 'width 2s, height 4s';
            } else if (nasc >= 18 && nasc < 40) {
                img.src = './img/adulf.png';
                msg.innerHTML = `Você  é mulher e tem  ${nasc} anos.`
                document.body.style.background = '#FFDEAD';
                box.style.width = '350px'; // Ajuste para o tamanho desejado
                box.style.height = '380px'; // Ajuste para o tamanho desejado
                box.style.transition = 'width 2s, height 4s';
            } else {
                img.src = './img/idosaf.png';
                msg.innerHTML = `Você é mulher e tem  ${nasc} anos.`
                document.body.style.background = '#808080';
                box.style.width = '350px'; // Ajuste para o tamanho desejado
                box.style.height = '380px'; // Ajuste para o tamanho desejado
                box.style.transition = 'width 2s, height 4s';
            }
        }

        console.log(nasc, genero)
        }
        }



    
