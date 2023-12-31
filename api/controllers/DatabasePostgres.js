import sql from '../db.js';
import {randomUUID} from 'node:crypto';

class DatabasePostgres{    

//métodos
    async create(compra){//rota post
        const compraId = randomUUID();
        const {data, produto, valor} = compra;

        await sql` INSERT INTO compra (id, data, produto, valor) VALUES(${compraId}, ${data}, ${produto}, ${valor})`;
    }

    async list(search){//rota get
        let compra

        if(search){
            compra = await sql`SELECT *FROM compra WHERE produto LIKE ${'%'+search+'%'}`;
        }else{
            compra = await sql` SELECT *FROM compra`;
        }

        return compra;
    }

    update(compraId, compra){
        
    }

    delete(compraId){
       
    }
    
}


export default DatabasePostgres;