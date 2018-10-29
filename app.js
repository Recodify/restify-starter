"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const restify_router_1 = require("restify-router");
const routes_1 = require("./start/routes");
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
    console.log("Listening on 8080");
});
//# sourceMappingURL=app.js.map