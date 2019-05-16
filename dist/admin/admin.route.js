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
var admin_model_1 = require("./admin.model");
var routes_1 = require("../routes/routes");
var adminRotas = /** @class */ (function (_super) {
    __extends(adminRotas, _super);
    function adminRotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    adminRotas.prototype.applyRouter = function (application) {
        application.get('/admin', function (req, resp, next) {
            admin_model_1.Admin.find().then(function (admin) {
                resp.json(admin);
                return next();
            });
        });
        application.post('/admin', function (req, resp, next) {
            var admin = new admin_model_1.Admin(req.body);
            var myHash = md5_1.Md5.hashStr(admin.password);
            admin.password = myHash;
            admin.save().then(function (admin) {
                resp.json(admin);
            }, function (error) {
                console.log(error);
            });
            return next();
        });
        application.post('/login', function (req, resp, next) {
            var admin = new admin_model_1.Admin(req.body);
            var myHash = md5_1.Md5.hashStr(admin.password);
            admin.password = myHash;
            console.log(admin.password);
            admin_model_1.Admin.findOne({ $and: [{ "email": admin.email }, { "password": admin.password }] })
                .then(function (u) {
                console.log(u);
                if (u != null) {
                    resp.json(u);
                    console.log(u);
                    return next();
                }
            }).catch(next);
        });
        application.del('/admin/:id', function (req, resp, next) {
            admin_model_1.Admin.remove({ _id: req.params.id }).exec().then(function (result) {
                if (result.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
            });
            return next();
        });
        application.patch('/admin/:id', function (req, resp, next) {
            admin_model_1.Admin.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (admin) {
                resp.json(admin);
                return next();
            });
        });
    };
    return adminRotas;
}(routes_1.Routes));
exports.AdminRotas = new adminRotas();
