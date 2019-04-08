import * as restify from 'restify';
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

            admin.save().then(admin => {
                resp.json(admin);
            }, error => {
                console.log(error);
            })
            return next();
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