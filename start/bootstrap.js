"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propertyservice_1 = require("../services/propertyservice");
const inversify_1 = require("inversify");
const types_1 = require("../start/types");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.PropertyService).to(propertyservice_1.PropertyService);
//# sourceMappingURL=bootstrap.js.map