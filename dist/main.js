"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var funcionario_route_1 = require("./funcionario/funcionario.route");
var admin_route_1 = require("./admin/admin.route");
var endereco_route_1 = require("./endereco/endereco.route");
var server = new server_1.Server;
server.bootstrap([funcionario_route_1.FuncionarioRotas, admin_route_1.AdminRotas, endereco_route_1.EnderecoRotas]).then(function (server) {
    console.log("Servidor executando na porta: " + server.application.address().port + "[]");
}).catch(function (error) {
    console.log("Servidor não inicializou!");
    console.log(error);
    process.exit(1);
});
