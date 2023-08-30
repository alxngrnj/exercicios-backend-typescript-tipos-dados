const soletrar = (palavra: string): string => {
    let palavraSoletrada: string = "";
    let caractereAtual: number = 0;

    while (caractereAtual < palavra.length) {
        palavraSoletrada += palavra[caractereAtual];
        if (caractereAtual !== palavra.length - 1) {
            palavraSoletrada += "-";
        }
        caractereAtual++;
    }

    return palavraSoletrada;
}

console.log(soletrar("programador"));
