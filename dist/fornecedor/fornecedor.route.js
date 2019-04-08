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
var fornecedor_model_1 = require("./fornecedor.model");
var routes_1 = require("../routes/routes");
var fornecedorRotas = /** @class */ (function (_super) {
    __extends(fornecedorRotas, _super);
    function fornecedorRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    fornecedorRotas.prototype.applyRouter = function (application) {
        application.get('/fornecedor', function (req, resp, next) {
            fornecedor_model_1.Fornecedor.find().then(function (fornecedor) {
                resp.json(fornecedor);
                return next();
            });
        });
        application.post('/fornecedor', function (req, resp, next) {
            var fornecedor = new fornecedor_model_1.Fornecedor(req.body);
            fornecedor.save().then(function (fornecedor) {
                resp.json(fornecedor);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/fornecedor/:id', function (req, resp, next) {
            fornecedor_model_1.Fornecedor.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
            });
            return next();
        });
        application.patch('/fornecedor/:id', function (req, resp, next) {
            fornecedor_model_1.Fornecedor.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (fornecedor) {
                resp.json(fornecedor);
                return next();
            });
        });
    };
    return fornecedorRotas;
}(routes_1.Routes));
exports.FornecedorRotas = new fornecedorRotas();
