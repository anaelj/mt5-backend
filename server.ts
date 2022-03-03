import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6542/',
  timeout: 1000,
  headers: {'Authorization': 'anael'}
});

app.get('/symbols/:symbol', async (req, res) => {
  console.log( req.params.symbol.toUpperCase());
  const {data} = await api.get(`symbols/${req.params.symbol.toUpperCase()}`);
  return  res.send(data);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});