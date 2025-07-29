import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import killerRouter from './src/routes/killer-router.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/', express.static('./'));

app.use('/killers', killerRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})