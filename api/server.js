import 'dotenv/config';
import {fastify} from 'fastify';
import DatabaseMemory from './controllers/DatabaseMemory.js';//banco de testes

const {PORT} = process.env;
const server = fastify();
const database = new DatabaseMemory();


server.get('/', ()=>{ //raiz
    return 'Gerenciador de gastos';
});

//routes
server.post('/compras',(request, reply)=>{
    const {data, produto, valor} = request.body;

    database.create({
        data: data,
        produto: produto,
        valor: valor
    });

    return reply.status(201).send();
});

server.get('/compras', (request, reply)=>{
    const search = request.query.search
    const videos = database.list(search);

    return reply.status(200).send(videos);
});

server.put('/compras/:id',(request, reply)=>{
    const compraId = request.params.id;
    const {data, produto, valor} = request.body;

    database.update(compraId,{
        data: data, 
        produto: produto,
        valor: valor
    } )    

    console.log(`A compra com id:${compraId} foi atualizada com sucesso`);
    return reply.status(204).send();
});

server.delete('/compras/:id', (request, reply)=>{
    const compraId = request.params.id;

    database.delete(compraId);

    console.log(`A compra com id:${compraId} foi apagada com sucesso`);
    return reply.status(204).send();
})

console.log(`Servidor esta rodando em http://localhost:${PORT}/`);

server.listen({
    port: PORT
})
