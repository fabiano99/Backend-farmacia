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
var laboratorio_model_1 = require("./laboratorio.model");
var routes_1 = require("../routes/routes");
var laboratorioRotas = /** @class */ (function (_super) {
    __extends(laboratorioRotas, _super);
    function laboratorioRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    laboratorioRotas.prototype.applyRouter = function (application) {
        application.get('/laboratorio', function (req, resp, next) {
            laboratorio_model_1.Laboratorio.find().then(function (laboratorio) {
                resp.json(laboratorio);
                return next();
            });
        });
        application.get('/laboratorio/:id', function (req, resp, next) {
            laboratorio_model_1.Laboratorio.findById(req.params.id).then(function (laboratorio) {
                resp.json(laboratorio);
                return next();
            });
        });
        application.post('/laboratorio', function (req, resp, next) {
            var laboratorio = new laboratorio_model_1.Laboratorio(req.body);
            laboratorio.save().then(function (laboratorio) {
                resp.json(laboratorio);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/laboratorio/:id', function (req, resp, next) {
            laboratorio_model_1.Laboratorio.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
            });
            return next();
        });
        application.patch('/laboratorio/:id', function (req, resp, next) {
            laboratorio_model_1.Laboratorio.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (laboratorio) {
                resp.json(laboratorio);
                return next();
            });
        });
    };
    return laboratorioRotas;
}(routes_1.Routes));
exports.LaboratorioRotas = new laboratorioRotas();
