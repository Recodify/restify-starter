import { Next, Request, Response} from "restify";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import {PropertyService} from '../services/propertyservice';
import { TYPES } from "../start/types";

@injectable()
export class PropertyController {

    private readonly _propertyService : PropertyService;
    constructor(@inject(TYPES.PropertyService)propertyService : PropertyService){
            this._propertyService = propertyService;
    }

    public index(request : Request, response: Response, next: Next) : void {
        const properties = new PropertyService().getAll();
        response.json(properties);
        next();
    }
}