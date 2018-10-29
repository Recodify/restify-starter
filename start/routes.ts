import {Next, Request, Response} from 'restify';
import {Router} from 'restify-router';
import {PropertyController} from '../controllers/propertycontroller'
import { container } from "../start/bootstrap";

export class RouteConfig {

    static _instance: Router;

    public static instance() : Router{
        if (this._instance == null){
            this.setupRouter();
        }

        return this._instance;
    }

    private static setupRouter() : void{
        this._instance = new Router();
        this._instance.get('/', (req : Request, res : Response, next : Next) => {
            const propertyController = container.resolve(PropertyController);
            propertyController.getAll(req, res, next);
        });

        this._instance.get('/cunt', (req : Request, res : Response, next : Next) => {
            res.json({message: "you cunt!"});
            next();
        });
    }
}