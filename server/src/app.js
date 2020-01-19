// const http = require ('http');
const express = require ('express');
const app = express ();

// const server = http.createServer ((req, res) => {
//   res.end ('hello world');
// });
const dongmanRouter = require ('./dongman.router');

app.use (function (req, res, next) {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next ();
});
app.use ('/api', dongmanRouter);

app.listen (4000, () => {
  console.log ('啓動完成');
});
