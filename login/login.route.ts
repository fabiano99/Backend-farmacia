import * as restify from 'restify';
import { Md5 } from 'ts-md5/dist/md5';

import { Routes } from '../routes/routes';
import { Admin } from './../admin/admin.model';
import { Cliente } from './../cliente/cliente.model';

class loginRoutes extends Routes {
    applyRouter(application: restify.Server) {
        application.post('/login', (req, resp, next) => {
            let admin = new Admin(req.body);
            let myHash = <String>Md5.hashStr(<string>admin.password);
            admin.password = myHash;
            //  console.log(admin.password);

            Admin.findOne({ $and: [{ "email": admin.email }, { "password": admin.password }] })
                .then(u => {
                    console.log(u);
                    if (u != null) {
                        resp.json(u);
                        //console.log(u);
                        return next();
                    }
                }).catch(next);

            let user = new Cliente(req.body);
            let myHash1 = <String>Md5.hashStr(<string>user.password)
            user.password = myHash1;

            Cliente.findOne({ $and: [{ "email": user.email }, { "password": user.password }] })
                .then(user => {
                    if (user != null) {
                        resp.json(user);
                        //console.log(user);
                        return next();
                    }
                }).catch(next);
        })
    }
}

export const LoginRoutes = new loginRoutes();