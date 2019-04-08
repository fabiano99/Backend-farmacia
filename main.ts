import { Server } from './server/server';
import { FuncionarioRotas } from './funcionario/funcionario.route'
import { AdminRotas } from './admin/admin.route';
import { EnderecoRotas } from './endereco/endereco.route';

const server: Server = new Server;

server.bootstrap([FuncionarioRotas, AdminRotas, EnderecoRotas]).then(server => {
    console.log(`Servidor executando na porta: ${server.application.address().port}[]`)
}).catch(error => {
    console.log("Servidor não inicializou!")
    console.log(error)
    process.exit(1)    
})




