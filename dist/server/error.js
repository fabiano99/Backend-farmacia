"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = function (req, resp, err, done) {
    console.log(err);
    err.toJSON = function () {
        return {
            message: err.message
        };
    };
    done();
};
