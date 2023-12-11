import {randomUUID} from 'node:crypto';

class DatabaseMemory{
    #compras = new Map();

//métodos
    create(compra){//rata post
        const compraId = randomUUID();

        this.#compras.set(compraId, compra);
    }

    list(search){
        return Array.from(this.#compras.entries())
        .map((compraArry)=>{
            const id = compraArry[0];
            const data = compraArry[1];

            return {//rota get
                id: id,
                ...data
            }
        })
        .filter((compra)=>{
            if(search){
                return compra.produto.includes(search);
            }
            return true;
        })
        
    }

    
}


export default DatabaseMemory;
