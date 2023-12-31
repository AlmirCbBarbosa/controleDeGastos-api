import 'dotenv/config';
import {fastify} from 'fastify';
import DatabasePostgres from './controllers/DatabasePostgres.js';

const {PORT} = process.env;
const server = fastify();
const database = new DatabasePostgres(); // banco de dados postgres

server.get('/', ()=>{ //raiz
    return 'Gerenciador de gastos';
});

//routes
server.post('/compras', async(request, reply)=>{
    const {data, produto, valor} = request.body;

    await database.create({
        data: data,
        produto: produto,
        valor: valor
    });

    return reply.status(201).send();
});

server.get('/compras', async(request, reply)=>{
    const search = request.query.search
    const produto = await database.list(search);

    return reply.status(200).send(produto);
});

server.put('/compras/:id', async (request, reply)=>{
    const compraId = request.params.id;
    const {data, produto, valor} = request.body;

    await database.update(compraId,{
        data: data, 
        produto: produto,
        valor: valor
    } )    

    console.log(`A compra com id:${compraId} foi atualizada com sucesso`);
    return reply.status(204).send();
});

server.delete('/compras/:id', async (request, reply)=>{
    const compraId = request.params.id;

    await database.delete(compraId);

    console.log(`A compra com id:${compraId} foi apagada com sucesso`);
    return reply.status(204).send();
})

console.log(`Servidor esta rodando em http://localhost:${PORT}/`);

server.listen({
    port: PORT
})
