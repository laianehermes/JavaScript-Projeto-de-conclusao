var criaJogo = function(sprite){
    var processaChute = function (chute) {

        var exp = new RegExp(chute, 'gi')
            , resultado
            , acertou = false;
    
        while (resultado = exp.exec(palavraSecreta)) {
    
            acertou = lacunas[resultado.index] = chute;
        }
    
       if (!acertou) sprite.nextFrame();
    };

    var setPalavraSecreta = function(palavra){
        palavraSecreta = palavra;
        criaLacunas();
        setEtapa();
    };

    var criaLacunas = function(){
        //lacunas = Array(palavraSecreta.length).fill('');
        for (let index = 0; index < palavraSecreta.length; index++) {
            lacunas.push('');
            
        }
    };

    var getLacunas = function(){
        return lacunas;
    };

    var getEtapa = function(){
        return etapa;
    }

    var setEtapa = function(){
        return etapa+=1;
    }

    var ganhou = function () {
        console.log('falta implementar');
    };

    var perdeu = function () {
        console.log('falta implementar');
    };

    var ganhouOuPerdeu = function () {
        console.log('falta implementar');
    };

    var reinicia = function () {
        console.log('falta implementar');
    };

    var palavraSecreta = '';
    var lacunas = Array();
    var etapa = 1;

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu, 
        reinicia: reinicia
    }
};