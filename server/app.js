import https from 'https';
import fs from 'fs';
import app from './lib/express';
import { init } from './lib/mongoose';

init();

// Server setting
const port = process.env.PORT || 4000;

https.createServer({
    key: fs.readFileSync('../key.pem'),
    cert: fs.readFileSync('../cert.pem'),
}, app).listen(port, () => {
    console.log('API Server Started On Port %d', port);
});