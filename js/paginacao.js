function listarItens(cribs, pagina, maxCribs) {
    let resultado = [];
    let totalDePaginas = Math.ceil(cribs.length / maxCribs);
    let contador = (pagina * maxCribs) - maxCribs;
    let limitador = contador + maxCribs;
    
    if(pagina <= totalDePaginas) {
        for(let i = contador; i < limitador; i++) {
            if(cribs[i] != null) {
                resultado.push(cribs[i]);
            }
            contador++
        }
    }
    console.log(cribs);
    return resultado;
};

// https://braziljs.org/artigos/criando-um-sistema-de-paginacao-simples-com-javascript/