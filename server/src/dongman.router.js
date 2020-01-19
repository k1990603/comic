const express = require ('express');
const router = express.Router ();

var mysql = require ('mysql');
var sql = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'manhua',
  multipleStatements: true,
});
sql.connect ();

router.get ('/list', (req, res) => {
  res.json ({
    list: [
      {
        id: '001',
        name: '李四',
      },
    ],
  });
});

router.get ('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  sql.query ('select * from list', [], function (err, data) {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');
    console.log (data);
    res.send (data);
  });
});

router.get ('/manhua', (req, res, next) => {
  let startPage = (req.query.page - 1) * req.query.size;
  let endPage = req.query.page * req.query.size;
  let sizePage = Number (req.query.size);
  let keyWord = req.query.keyWord;
  if (!!keyWord) {
    let sqls = {
      sql: 'select * from list where title like ?; select count(*) from list',
    };
    sql.query (sqls, '%' + keyWord + '%', (err, data) => {
      if (!!err) {
        return res.json ({statusCode: 1, message: '资料不存在', affextedRows: err});
      } else {
        res.json ({
          statusCode: 200,
          data: {list: data[0], total: data[1][0]['count(*)']},
          affextedRows: 0,
        });
      }
    });
  } else {
    let sqls = {sql: 'select * from list limit ?,?; select count(*) from list'};
    sql.query (sqls, [startPage, sizePage], (err, data) => {
      if (!!err) {
        return res.json ({statusCode: 1, message: '资料不存在', affextedRows: err});
      } else {
        res.json ({
          statusCode: 200,
          data: {list: data[0], total: data[1][0]['count(*)']},
          affextedRows: 0,
        });
      }
    });
  }
});

router.get ('/detail', (req, res, next) => {
  // const sqlStr = 'select * from list '
  sql.query (
    'select * from list_detail where list_id=?',
    req.query.list_id,
    (err, data) => {
      // res.statusCode = 200;
      // res.setHeader('Content-Type', 'text/plain');
      if (err) {
        return res.json ({statusCode: 1, message: '资料不存在', affextedRows: 0});
      } else {
        res.json ({statusCode: 200, data: data, affextedRows: 0});
      }
    }
  );
});

router.get ('/queryCapter', (req, res, next) => {
  // const sqlStr = 'select * from list '
  sql.query (
    'SELECT * from picture t where t.chapter_id  = ? order by pid ASC',
    req.query.chapter_id,
    (err, data) => {
      // res.statusCode = 200;
      // res.setHeader('Content-Type', 'text/plain');
      if (err) {
        return res.json ({statusCode: 1, message: '资料不存在', affextedRows: 0});
      } else {
        res.json ({statusCode: 200, data: data, affextedRows: 0});
      }
    }
  );
});

module.exports = router;
