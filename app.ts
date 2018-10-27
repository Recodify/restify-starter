import * as restify from 'restify';
import {Router} from 'restify-router';
import * as Swagger from 'swagger-restify-mw'
import {LoggerFactory} from './util/loggerFactory';
import {RouteConfig} from './start/routes'

const logger = new LoggerFactory().create();
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
    logger.info(`Listen on port:${server.url}`);
});


var config = {
    appRoot: __dirname // required config
  };



Swagger.create(config, function(err, swaggerRestify) {
if (err) { throw err; }

swaggerRestify.register(server);

var port = process.env.PORT || 10010;

if (swaggerRestify.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
}
});