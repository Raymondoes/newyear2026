import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { initDB, getDB } from './database';

const app = express();
app.use(express.json());

const viewsPath = path.join(__dirname, 'view');
console.log("Looking for static files in:", viewsPath);

app.use(express.static(viewsPath));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '/view/index.html'));
});

app.get('/commit', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '/view/commit.html'));
});

app.listen(4000);