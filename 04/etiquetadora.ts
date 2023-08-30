const imprimirEtiquetas = (produto: {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}): string[] => {
    let quantidadeAtual: number = 0;
    const etiquetas: string[] = [];

    while (quantidadeAtual < produto.qtd) {
        quantidadeAtual++;
        etiquetas.push(`${produto.lote}-${produto.ano}-${quantidadeAtual}`)
    }

    return etiquetas;
}

console.log(imprimirEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));
