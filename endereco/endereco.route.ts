import * as restify from 'restify';
import { Endereco } from './endereco.model';
import { Routes } from '../routes/routes'

class enderecoRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/endereco', (req, resp, next) => {
            Endereco.find().then(endereco => {
                resp.json(endereco);
                return next();
            })
        })

        application.post('/endereco', (req, resp, next) => {
            let endereco = new Endereco(req.body);

            endereco.save().then(endereco => {
                resp.json(endereco);

            }, error => {
                console.log(error);

            })
            return next();
        })

        application.del('/endereco/:id', (req, resp, next) => {
            Endereco.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    return (200);
                }
                else {
                    return (404);
                }
                return next();
            })
        })

        application.patch('/endereco/:id', (req, resp, next) => {
            Endereco.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(endereco => {
                resp.json(endereco);
                return next();
            })
        })


    }
}

export const EnderecoRotas = new enderecoRotas();