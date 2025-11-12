import cors from 'cors';
import express from 'express';
import body_parser from 'body-parser';

import swagger, { SwaggerOptions } from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';

const doc_file = fs.readFileSync('./src/infra/docs/swagger.yaml', 'utf8');

const doc_file_parsed = YAML.parse(doc_file);

const doc_options: SwaggerOptions = {};

const app = express();

app.use(body_parser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/', swagger.serve, swagger.setup(doc_file_parsed, doc_options));

export { app };
