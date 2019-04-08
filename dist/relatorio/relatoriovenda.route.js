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
var relatoriovenda_model_1 = require("./relatoriovenda.model");
var routes_1 = require("../routes/routes");
var relatorioVendaRotas = /** @class */ (function (_super) {
    __extends(relatorioVendaRotas, _super);
    function relatorioVendaRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    relatorioVendaRotas.prototype.applyRouter = function (application) {
        application.get('/relatorioVenda', function (req, resp, next) {
            relatoriovenda_model_1.RelatorioVenda.find().then(function (relatorioVenda) {
                resp.json(relatorioVenda);
                return next();
            });
        });
        application.post('/relatorioVenda', function (req, resp, next) {
            var relatorioVenda = new relatoriovenda_model_1.RelatorioVenda(req.body);
            relatorioVenda.save().then(function (funcioario) {
                resp.json(relatorioVenda);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/relatorioVenda/:id', function (req, resp, next) {
            relatoriovenda_model_1.RelatorioVenda.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            });
        });
        application.patch('/relatorioVenda/:id', function (req, resp, next) {
            relatoriovenda_model_1.RelatorioVenda.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (relatorioVenda) {
                resp.json(relatorioVenda);
                return next();
            });
        });
    };
    return relatorioVendaRotas;
}(routes_1.Routes));
exports.RelatorioVendaRotas = new relatorioVendaRotas();
