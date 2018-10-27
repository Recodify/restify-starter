"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const property_1 = require("../Models/property");
let PropertyService = class PropertyService {
    getAll() {
        return [new property_1.Property("Hill House"), new property_1.Property("Duck Place"), new property_1.Property("1 timothys corner")];
    }
};
PropertyService = __decorate([
    inversify_1.injectable()
], PropertyService);
exports.PropertyService = PropertyService;
//# sourceMappingURL=propertyservice.js.map