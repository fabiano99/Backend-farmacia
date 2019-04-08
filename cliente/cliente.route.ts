import * as restify from 'restify';
import { Cliente } from './cliente.model';
import { Routes } from '../routes/routes'


class clienteRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/cliente', (req, resp, next) => {
            Cliente.find().then(cliente => {
                resp.json(cliente)
                return next();
            })
        })

        application.post('/cliente', (req, resp, next) => {
            let admin = new Cliente(req.body);

            admin.save().then(cliente => {
                resp.json(cliente);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/cliente/:id', (req, resp, next) => {
            Cliente.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
            })
            return next();
        })

        application.patch('/cliente/:id', (req, resp, next) => {
            Cliente.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(cliente => {
                resp.json(cliente);
                return next();
            })
        })


    }


}

export const ClienteRotas = new clienteRotas();