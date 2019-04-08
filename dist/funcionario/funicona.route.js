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
var funcionario_model_1 = require("./funcionario.model");
var FuncionarioRotas = /** @class */ (function (_super) {
    __extends(FuncionarioRotas, _super);
    function FuncionarioRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FuncionarioRotas.prototype.applyRouter = function (application) {
        application.get('/funcionarios', function (req, resp, next) {
            funcionario_model_1.Funcionario.find().then(function (funcionario) {
                resp.json(funcionario);
                return next();
            });
        });
    };
    return FuncionarioRotas;
}(routes_1.Routes));
