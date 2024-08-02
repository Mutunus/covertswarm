import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/api/cisa_vulnerabilities', async (req, res) => {
  try {
    const response = await fetch(
      'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json'
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching vulnerabilities:', error);
    res.status(500).send('An error occurred while fetching vulnerabilities');
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
