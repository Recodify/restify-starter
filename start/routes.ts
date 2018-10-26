import {Next, Request, Response} from 'restify';
import {Router} from 'restify-router';

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
            res.json({message: "hello"});
            next();
        });

        this._instance.get('/cunt', (req : Request, res : Response, next : Next) => {
            res.json({message: "you cunt!"});
            next();
        });
    }
}