"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const restify_router_1 = require("restify-router");
const Swagger = require("swagger-restify-mw");
const loggerFactory_1 = require("./util/loggerFactory");
const routes_1 = require("./start/routes");
const logger = new loggerFactory_1.LoggerFactory().create();
const baseRoutes = routes_1.RouteConfig.instance();
const server = restify.createServer({
    name: "test api",
    version: "0.0.1",
    ignoreTrailingSlash: true,
});
const router = new restify_router_1.Router();
router.add("/api", baseRoutes);
router.applyRoutes(server);
server.listen(8080, () => {
    logger.info(`Listen on port:${server.url}`);
});
var config = {
    appRoot: __dirname
};
Swagger.create(config, function (err, swaggerRestify) {
    if (err) {
        throw err;
    }
    swaggerRestify.register(server);
    var port = process.env.PORT || 10010;
    if (swaggerRestify.runner.swagger.paths['/hello']) {
        console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
    }
});
//# sourceMappingURL=app.js.map