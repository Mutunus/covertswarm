import express from 'express';
import fetch from 'node-fetch';
import {CisaVulnerabilities} from "@covertswarm/types";
import {ErrorResponse} from "./types/types";

const app = express();

app.get('/api/cisa_vulnerabilities', async (req: express.Request, res: express.Response<CisaVulnerabilities | ErrorResponse>) => {
  const response = await fetch(
    'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json'
  );
  const data = await response.json();
  res.json(data);
});

app.use((err: any, req: express.Request, res: express.Response<ErrorResponse>) => {
  const errorResponse: ErrorResponse = {
    message: err.message,
    statusCode: err.status || 500
  };

  res.status(errorResponse.statusCode).json(errorResponse);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
