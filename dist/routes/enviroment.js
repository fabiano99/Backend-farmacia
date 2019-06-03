"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enviroment = /** @class */ (function () {
    function enviroment() {
        this.remoteHost = "mongodb+srv://fabiano99:12345@cluster0-gqq9i.mongodb.net/farmaciadb?retryWrites=true&w=majority";
        this.localHost = 'mongodb://localhost/farmaciadb';
        this.port = 4000;
    }
    return enviroment;
}());
exports.Enviroment = new enviroment();
