"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_router_1 = require("restify-router");
const propertycontroller_1 = require("../controllers/propertycontroller");
const bootstrap_1 = require("../start/bootstrap");
class RouteConfig {
    static instance() {
        if (this._instance == null) {
            this.setupRouter();
        }
        return this._instance;
    }
    static setupRouter() {
        this._instance = new restify_router_1.Router();
        this._instance.get('/', (req, res, next) => {
            const propertyController = bootstrap_1.container.resolve(propertycontroller_1.PropertyController);
            propertyController.index(req, res, next);
        });
        this._instance.get('/cunt', (req, res, next) => {
            res.json({ message: "you cunt!" });
            next();
        });
    }
}
exports.RouteConfig = RouteConfig;
//# sourceMappingURL=routes.js.map