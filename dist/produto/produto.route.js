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
var prouto_model_1 = require("./prouto.model");
var routes_1 = require("../routes/routes");
var produtoRotas = /** @class */ (function (_super) {
    __extends(produtoRotas, _super);
    function produtoRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    produtoRotas.prototype.applyRouter = function (application) {
        application.get('/produto', function (req, resp, next) {
            prouto_model_1.Produto.find().then(function (produto) {
                resp.json(produto);
                return next();
            });
        });
        application.post('/produto', function (req, resp, next) {
            var produto = new prouto_model_1.Produto(req.body);
            produto.save().then(function (produto) {
                resp.json(produto);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/produto/:id', function (req, resp, next) {
            prouto_model_1.Produto.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
            });
            return next();
        });
        application.patch('/produto/:id', function (req, resp, next) {
            prouto_model_1.Produto.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (produto) {
                resp.json(produto);
                return next();
            });
        });
    };
    return produtoRotas;
}(routes_1.Routes));
exports.ProdutoRotas = new produtoRotas();
