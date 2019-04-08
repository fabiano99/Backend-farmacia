import { Server } from './server/server';
import { AdminRotas } from './admin/admin.route';
import { ClienteRotas } from './cliente/cliente.route';
import { EnderecoRotas } from './endereco/endereco.route';
import { EstoqueRotas } from './estoque/estoque.route';
import { FornecedorRotas } from './fornecedor/fornecedor.route';
import { FuncionarioRotas } from './funcionario/funcionario.route'
import { LaboratorioRotas } from './laboratorio/laboratorio.routes';
import { ProdutoRotas } from './produto/produto.route';
import { RelatorioVendaRotas } from './relatorio/relatoriovenda.route';
import { VendaRotas } from './venda/venda.route';


const server: Server = new Server;

server.bootstrap([AdminRotas, ClienteRotas, EnderecoRotas, EstoqueRotas, FornecedorRotas, FuncionarioRotas, LaboratorioRotas, ProdutoRotas, RelatorioVendaRotas, VendaRotas]).then(server => {
    console.log(`Servidor executando na porta: ${server.application.address().port}[]`)
}).catch(error => {
    console.log("Servidor não inicializou!")
    console.log(error)
    process.exit(1)
})




