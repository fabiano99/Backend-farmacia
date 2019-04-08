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
var venda_model_1 = require("./venda.model");
var routes_1 = require("../routes/routes");
var vendaRotas = /** @class */ (function (_super) {
    __extends(vendaRotas, _super);
    function vendaRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    vendaRotas.prototype.applyRouter = function (application) {
        application.get('/venda', function (req, resp, next) {
            venda_model_1.Venda.find().then(function (venda) {
                resp.json(venda);
                return next();
            });
        });
        application.post('/venda', function (req, resp, next) {
            var venda = new venda_model_1.Venda(req.body);
            venda.save().then(function (venda) {
                resp.json(venda);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/venda/:id', function (req, resp, next) {
            venda_model_1.Venda.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
            });
            return next();
        });
        application.patch('/venda/:id', function (req, resp, next) {
            venda_model_1.Venda.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (venda) {
                resp.json(venda);
                return next();
            });
        });
    };
    return vendaRotas;
}(routes_1.Routes));
exports.VendaRotas = new vendaRotas();
