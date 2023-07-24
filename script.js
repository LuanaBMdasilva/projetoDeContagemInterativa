function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Faltam dados!')

} else {
    resultado.innerHTML = 'contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
        window.alert('Passo Inválido! Considerando passo 1')
        p = 1
    }

    if (i < f) {
        //CONTAGEM CRESCENTE
        for(let c = i; c <= f; c +=p) {
            resultado.innerHTML += ` ${c} \u{1F449}	`
        }
    
    }else {
        //CONTAGEM REGRESSIVA
        for(let c = i; c >= f; c -= p) {
            resultado.innerHTML += ` ${c} \u{1F449}`
        }
    }
    resultado.innerHTML += ` ${c} \u{1F3C6}	`
  }

}