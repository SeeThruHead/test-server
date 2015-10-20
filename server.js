import express from 'express';
import cors from 'cors';
import upcase from './routeHandlers/upcase';
import revwords from './routeHandlers/revwords';
import reverse from './routeHandlers/reverse';
import upcaseReverse from './routeHandlers/upcaseReverse';


const app = express();
app.use(cors());

app.get('/upcase', upcase);
app.get('/revwords', revwords);
app.get('/reverse', reverse);
app.get('/upcasereverse', upcaseReverse);

app.listen(8080);
