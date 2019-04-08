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
var routes_1 = require("../routes/routes");
var funcionario_model_1 = require("../funcionario/funcionario.model");
var funcionarioRotas = /** @class */ (function (_super) {
    __extends(funcionarioRotas, _super);
    function funcionarioRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    funcionarioRotas.prototype.applyRouter = function (application) {
        application.get('/funcionario', function (req, resp, next) {
            funcionario_model_1.Funcionario.find().then(function (funcionario) {
                resp.json(funcionario);
                return next();
            });
        });
        application.post('/funcionario', function (req, resp, next) {
            var funcionario = new funcionario_model_1.Funcionario(req.body);
            funcionario.save().then(function (funcioario) {
                resp.json(funcionario);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/funcionario/:id', function (req, resp, next) {
            funcionario_model_1.Funcionario.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/funcionario/:id', function (req, resp, next) {
            funcionario_model_1.Funcionario.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (funcionario) {
                resp.json(funcionario);
                return next();
            });
        });
    };
    return funcionarioRotas;
}(routes_1.Routes));
exports.FuncionarioRotas = new funcionarioRotas();
