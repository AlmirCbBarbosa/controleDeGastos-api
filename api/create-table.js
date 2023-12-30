import sql from './db.js';

sql `
    CREATE TABLE compra(
        id TEXT PRIMARY KEY,
        data TEXT,
        produto TEXT,
        valor REAL
    );
`.then(()=>{
    console.log('tabela criada');
});