import http from 'http'
import express from 'express';
import logger from 'morgan'
import helmet from 'helmet'
import chalk from 'chalk'
import bodyParser from 'body-parser';
import cors from 'cors'
import apiRouter from './router/index.js'
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(cors());
app.use(helmet())
app.use(logger('dev'))


app.use('/api/v1', apiRouter)


export default app;
