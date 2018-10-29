import * as restify from 'restify';
import {Router} from 'restify-router';
//import {LoggerFactory} from './util/loggerFactory';
import {RouteConfig} from './start/routes'

//const logger = new LoggerFactory().create();
const baseRoutes = RouteConfig.instance();
const server = restify.createServer({
    name: "test api",
    version: "0.0.1",
    ignoreTrailingSlash: true,
});
const router = new Router();

router.add("/api", baseRoutes);
router.applyRoutes(server);

server.listen(8080, () => {
    //logger.info(`Listen on port:${server.url}`);
    console.log("Listening on 8080");
});