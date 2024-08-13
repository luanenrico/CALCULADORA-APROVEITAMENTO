type Tmaterial = {
    material: string,
    valor: number
}

type Tvendedor = {
    nome: string,
    produto: Tmaterial[] 
}

let pesomaterial: number =  50.00

const material: Tvendedor = { 
    nome: 'wilton',
    produto: [
        {
            material: 'aluminio',
            valor: 10.00
        },
        {
            material: 'ferro',
            valor: 8.00
        },
        {
            material: 'metalon',
            valor: 20.00
        }

    ]
}


    if (material.produto === 'alumunio'){
        console.log(pesomaterial * 10.00) 
    } else if (material.produto === 'ferro') {
        console.log(pesomaterial * 8.00) 
    } else {
        console.log(pesomaterial * 20.00) 
    }
