import * as restify from 'restify';
import { Md5 } from 'ts-md5/dist/md5'

import { Admin } from './admin.model'
import { Routes } from '../routes/routes'
class adminRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/admin', (req, resp, next) => {
            Admin.find().then(admin => {
                resp.json(admin)
                return next();
            })
        })

        application.post('/admin', (req, resp, next) => {
            let admin = new Admin(req.body);

            let myHash = <string>Md5.hashStr(<string>admin.password);
            admin.password = myHash;

            admin.save().then(admin => {
                resp.json(admin);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.post('/login', (req, resp, next) => {
            let admin = new Admin(req.body);
            let myHash = <String>Md5.hashStr(<string>admin.password);
            admin.password = myHash;
            console.log(admin.password);

            Admin.findOne({ $and: [{ "email": admin.email }, { "password": admin.password }] })
                .then(u => {
                    console.log(u);
                    if (u != null )
                    {
                        resp.json(u);
                        console.log(u);
                        return next();
                    }
                }).catch(next);
        })

        application.del('/admin/:id', (req, resp, next) => {
            Admin.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
            })
            return next();
        })

        application.patch('/admin/:id', (req, resp, next) => {
            Admin.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(admin => {
                resp.json(admin);
                return next();
            })
        })


    }


}

export const AdminRotas = new adminRotas();