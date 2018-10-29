"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const propertyservice_1 = require("../services/propertyservice");
const types_1 = require("../start/types");
const tsoa_1 = require("tsoa");
let PropertyController = class PropertyController {
    constructor(propertyService) {
        this._propertyService = propertyService;
    }
    getAll(request, response, next) {
        const properties = new propertyservice_1.PropertyService().getAll();
        response.json(properties);
        next();
        return properties;
    }
};
__decorate([
    tsoa_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Array)
], PropertyController.prototype, "getAll", null);
PropertyController = __decorate([
    inversify_1.injectable(),
    tsoa_1.Route('Properties'),
    __param(0, inversify_1.inject(types_1.TYPES.PropertyService)),
    __metadata("design:paramtypes", [propertyservice_1.PropertyService])
], PropertyController);
exports.PropertyController = PropertyController;
//# sourceMappingURL=propertycontroller.js.map