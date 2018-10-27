import {injectable} from "inversify";
import { Property } from "../Models/property";

@injectable()
export class PropertyService implements IPropertyService {

    public getAll() : Property[] {
        return [new Property("Hill House"), new Property("Duck Place"), new Property("1 timothys corner")];
    }

}

export interface IPropertyService {
    getAll() : Property[]
}

