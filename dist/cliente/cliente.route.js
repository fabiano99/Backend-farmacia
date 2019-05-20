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
var md5_1 = require("ts-md5/dist/md5");
var cliente_model_1 = require("./cliente.model");
var routes_1 = require("../routes/routes");
var clienteRotas = /** @class */ (function (_super) {
    __extends(clienteRotas, _super);
    function clienteRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    clienteRotas.prototype.applyRouter = function (application) {
        application.get('/cliente', function (req, resp, next) {
            cliente_model_1.Cliente.find().then(function (cliente) {
                resp.json(cliente);
                return next();
            });
        });
        application.post('/cliente', function (req, resp, next) {
            var user = new cliente_model_1.Cliente(req.body);
            var myHash = md5_1.Md5.hashStr(user.password);
            user.password = myHash;
            user.save().then(function (user) {
                resp.json(user);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.del('/cliente/:id', function (req, resp, next) {
            cliente_model_1.Cliente.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
            });
            return next();
        });
        application.patch('/cliente/:id', function (req, resp, next) {
            cliente_model_1.Cliente.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (cliente) {
                resp.json(cliente);
                return next();
            });
        });
    };
    return clienteRotas;
}(routes_1.Routes));
exports.ClienteRotas = new clienteRotas();
