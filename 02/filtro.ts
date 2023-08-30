const usuarios: { nome: string, idade: number, status: boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

function filtrarUsuarios(lista: {
    nome: string,
    idade: number,
    status: boolean
}[], parametroDeBusca: string): {
    nome: string,
    idade: number,
    status: boolean
}[] | [] {
    return lista.filter((objeto: {
        nome: string,
        idade: number,
        status: boolean
    }) => objeto.nome.startsWith(parametroDeBusca))
}

console.log(

    filtrarUsuarios(usuarios, "Jo")
)