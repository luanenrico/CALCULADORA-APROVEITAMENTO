type Tmaterial = {
    material: string,
    valorKG: number
}

type Tvendedor = {
    nome: string,
    produto: Tmaterial[] 
}

const pesomaterial: number = 5

const materiais: Tvendedor = { 
    nome: 'wilton',
    produto: [
        {
            material: 'aluminio',
            valorKG: 10.00
        },
        {
            material: 'ferro',
            valorKG: 8.00
        },
        {
            material: 'metalon',
            valorKG: 20.00
        }

    ]
}

let cobrar = 0

function escolhaProduto(material: string, pesomaterial: number) {
    
    const materialSelecionado = materiais.produto.find(item => item.material === material)

if (!materialSelecionado) {
    return 'material não selecionado'
}
cobrar = materialSelecionado.valorKG * pesomaterial

}
escolhaProduto("metalon", pesomaterial)

console.log(cobrar)