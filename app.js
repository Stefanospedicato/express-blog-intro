const express = require('express');
const app = express();
const port= 3000;
const posts = require('./data/data')


app.get('/', (req,res)=>{
  res.send('Server del mio blog');
})

app.get('/bacheca', (req,res)=>{
  const numeredPosts =  {
    posts,
    conteggio: posts.length
  }
  res.json(numeredPosts);
})

app.use(express.static('public'))

app.listen(port,()=>{
  console.log('ASCOLTO');
})