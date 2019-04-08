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
var estoque_model_1 = require("./estoque.model");
var routes_1 = require("../routes/routes");
var estoqueRotas = /** @class */ (function (_super) {
    __extends(estoqueRotas, _super);
    function estoqueRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    estoqueRotas.prototype.applyRouter = function (application) {
        application.get('/estoque', function (req, resp, next) {
            estoque_model_1.Estoque.find().then(function (estoque) {
                resp.json(estoque);
                return next();
            });
        });
        application.post('/estoque', function (req, resp, next) {
            var estoque = new estoque_model_1.Estoque(req.body);
            estoque.save().then(function (estoque) {
                resp.json(estoque);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/estoque/:id', function (req, resp, next) {
            estoque_model_1.Estoque.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    return (200);
                }
                else {
                    return (404);
                }
                return next();
            });
        });
        application.patch('/estoque/:id', function (req, resp, next) {
            estoque_model_1.Estoque.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (estoque) {
                resp.json(estoque);
                return next();
            });
        });
    };
    return estoqueRotas;
}(routes_1.Routes));
exports.EstoqueRotas = new estoqueRotas();
