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

    async update(compraId, compra){
        const {data, produto, valor} = compra;
        await sql` UPDATE compra SET data=${data}, produto=${produto}, valor=${valor} WHERE id=${compraId}`
    }

    async delete(compraId){
        await sql`DELETE FROM compra WHERE id = ${compraId}`       
    }
    
}


export default DatabasePostgres;