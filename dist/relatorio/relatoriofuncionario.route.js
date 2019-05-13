"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var relatoriofuncionario_model_1 = require("./relatoriofuncionario.model");
var routes_1 = require("../routes/routes");
var relatorioFuncionarioRotas = /** @class */ (function (_super) {
    __extends(relatorioFuncionarioRotas, _super);
    function relatorioFuncionarioRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    relatorioFuncionarioRotas.prototype.applyRouter = function (application) {
        application.get('/relatorioVenda', function (req, resp, next) {
            relatoriofuncionario_model_1.RelatorioFuncionario.find().then(function (relatorioFuncionario) {
                resp.json(relatorioFuncionario);
                return next();
            });
        });
        application.post('/relatorioVenda', function (req, resp, next) {
            var relatorioFuncionario = new relatoriofuncionario_model_1.RelatorioFuncionario(req.body);
            relatorioFuncionario.save().then(function (funcioario) {
                resp.json(relatorioFuncionario);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/relatorioFuncionario/:id', function (req, resp, next) {
            relatoriofuncionario_model_1.RelatorioFuncionario.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/relatorioFuncionario/:id', function (req, resp, next) {
            relatoriofuncionario_model_1.RelatorioFuncionario.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (relatorioFuncionario) {
                resp.json(relatorioFuncionario);
                return next();
            });
        });
    };
    return relatorioFuncionarioRotas;
}(routes_1.Routes));
exports.RelatorioFuncionarioRotas = new relatorioFuncionarioRotas();
