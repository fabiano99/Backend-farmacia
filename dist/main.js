"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var admin_route_1 = require("./admin/admin.route");
var cliente_route_1 = require("./cliente/cliente.route");
var endereco_route_1 = require("./endereco/endereco.route");
var estoque_route_1 = require("./estoque/estoque.route");
var fornecedor_route_1 = require("./fornecedor/fornecedor.route");
var funcionario_route_1 = require("./funcionario/funcionario.route");
var laboratorio_routes_1 = require("./laboratorio/laboratorio.routes");
var produto_route_1 = require("./produto/produto.route");
var relatoriovenda_route_1 = require("./relatorio/relatoriovenda.route");
var venda_route_1 = require("./venda/venda.route");
var login_route_1 = require("./login/login.route");
var server = new server_1.Server;
server.bootstrap([admin_route_1.AdminRotas, cliente_route_1.ClienteRotas, endereco_route_1.EnderecoRotas, estoque_route_1.EstoqueRotas, fornecedor_route_1.FornecedorRotas, funcionario_route_1.FuncionarioRotas, laboratorio_routes_1.LaboratorioRotas, produto_route_1.ProdutoRotas, relatoriovenda_route_1.RelatorioVendaRotas, venda_route_1.VendaRotas, login_route_1.LoginRoutes]).then(function (server) {
    console.log("Servidor executando na porta: " + server.application.address().port + "[]");
}).catch(function (error) {
    console.log("Servidor não inicializou!");
    console.log(error);
    process.exit(1);
});
