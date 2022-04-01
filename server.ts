import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import axios from 'axios';
import cors from 'cors';

app.use(cors());

const api = axios.create({
  baseURL: 'http://localhost:6542/',
  timeout: 10000,
  headers: { 'Authorization': 'anael' }
});

app.get('/symbols/:symbol', async (req, res) => {
  
  try {
    const { data } = await api.get(`symbols/${req.params.symbol.toUpperCase()}`);
    return res.send(data);
  } catch (error) {
    
  }
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});