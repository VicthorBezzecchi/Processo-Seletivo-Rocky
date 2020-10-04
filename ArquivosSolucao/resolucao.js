    let json = require('./broken-database.json')

    function restauraDados(json)
    {
        for(i=0;i <= 9;i++)
        {
            json[i].name = json[i].name.replace(/ø/g, 'o').replace(/¢/g, 'c').replace(/æ/g, 'a').replace(/ß/g, 'b')
            json[i].price = parseFloat(json[i].price)
            if(!json[i].quantity)
            {
                json[i].quantity = 0
            }
        }
        console.log(json)
    }


    let saida = require('./saida.json')

    function listaNomes(saida)
    {
        console.log("\nCategoria Acessórios:")
        console.log("\nProduto 1: ",saida[9].name)
    
        console.log("\nCategoria Eletrodomésticos:")
        console.log("\nProduto 1: ",saida[2].name,"\nProduto 2: ",saida[3].name,"\nProduto 3: ",saida[4].name,"\nProduto 4: ",saida[1].name)
    
        console.log("\nCategoria Eletrônicos:")
        console.log("\nProduto 1: ",saida[7].name,"\nProduto 2: ",saida[8].name,"\nProduto 3: ",saida[5].name,"\nProduto 4: ",saida[6].name)

        console.log("\nCategoria Panelas:")
        console.log("\nProduto 1: ",saida[0].name)
    }

    function valorTotal(saida)
    {
        let valAcessorio, valEletroDome, valEletronico, valPanela;

        valAcessorio = (saida[9].price*saida[9].quantity)
        valEletroDome = (saida[1].price*saida[1].quantity) + (saida[2].price*saida[2].quantity) + (saida[3].price*saida[3].quantity) + (saida[4].price*saida[4].quantity)
        valEletronico = (saida[5].price*saida[5].quantity) + (saida[6].price*saida[6].quantity) + (saida[7].price*saida[7].quantity) + (saida[8].price*saida[8].quantity)
        valPanela = (saida[0].price*saida[0].quantity)
            
            
        console.log("\nValor total da categoria Acessórios: R$",valAcessorio.toFixed(2))
    
        console.log("\nValor total da categoria Eletrodomésticos: R$",valEletroDome.toFixed(2))
    
        console.log("\nValor total da categoria Eletrônicos: R$",valEletronico.toFixed(2))

        console.log("\nValor total da categoria Panelas: R$",valPanela.toFixed(2))
    }


    console.log(restauraDados(json))
    console.log(listaNomes(saida))
    console.log(valorTotal(saida))