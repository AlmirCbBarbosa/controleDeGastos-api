import 'dotenv/config';
import {fastify} from 'fastify';

const {PORT} = process.env;
const server = fastify();


server.get('/', ()=>{ //raiz
    return 'Gerenciador de gastos';
});

//routes
server.post('/compras',(request, reply)=>{
    console.log('esta rota criara um novo resgistro de compras no banco de dados.');

    return reply.status(201).send('criando registro');
});

server.get('/compras', (request, reply)=>{
    console.log('esta rota exibira uma compra específica através de query, ou todas as compras realizadas');

    return reply.status(200).send('consulta realizada')
});

server.put('/compras/:id',(request, reply)=>{
    const compraId = request.params.id;
    console.log(`A compra com id:${compraId} foi atualizada com sucesso`);

    return reply.status(200).send(`A compra com id:${compraId} foi atualizada com sucesso`);
});

server.delete('/compras/:id', (request, reply)=>{
    const compraId = request.params.id;
    console.log(`A compra com id:${compraId} foi apagada com sucesso`);

    return reply.status(200).send(`A compra com id:${compraId} foi apagada com sucesso`);
})

console.log(`Servidor esta rodando em http://localhost:${PORT}/`);

server.listen({
    port: PORT
})