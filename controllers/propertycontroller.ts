import { Next, Request, Response} from "restify";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import {PropertyService} from '../services/propertyservice';
import { TYPES } from "../start/types";
import {Get, Post, Route, Body, Query, Header, Path, SuccessResponse, Controller } from 'tsoa';
import { Property } from "../models/property";

@injectable()
@Route('Properties')
export class PropertyController {

    private readonly _propertyService : PropertyService;
    constructor(@inject(TYPES.PropertyService)propertyService : PropertyService){
            this._propertyService = propertyService;
    }

    @Get()
    public getAll(request : Request, response: Response, next: Next) : Property[] {
        const properties = new PropertyService().getAll();
        response.json(properties);
        next();
        return properties;
    }
}