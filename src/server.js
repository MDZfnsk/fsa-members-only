import express from 'express';
import { routes } from './routes';
import { db } from './db'; 

const app = express();

//using the bodyParser
app.use(express.json());

//iterating throug each and every routes inside the routes array from routes/index.js 
routes.forEach(routeItem => {
    app[routeItem.method](routeItem.path, routeItem.handler);
});

const start = async () => {
    await db.connect('mongodb://localhost:27017');
    await app.listen(8080);
    console.log('server is listening on port 8080');

}

start();







