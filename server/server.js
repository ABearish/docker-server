const express = require('express');
const app = express();
const port = 4444;

const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  port: 5432,
})
client.connect();


app.get('/', (req, res) => {
  client.query('SELECT * FROM team;', (err, dbResponse) => {
    if (err) {
      res.status(400);
      res.send('Database is not connected successfully!');
    }
    res.send(dbResponse);
    client.end();
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))