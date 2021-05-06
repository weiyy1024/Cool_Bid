var express = require('express')
var app = express()
const cors = require('cors')
var session = require('express-session')

app.use(express.json())
app.listen(3001)

var mysql = require('mysql')
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'coolbidLatest',
  port: 8889
})
// var conn2 = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'coolbid',
//   port: 8889
// })
//-----------------------------------------------------
// 設置session
app.use(
  session({
    key: 'user',
    secret: 'secretKey',
    // store: new FileStore(),
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false,
      maxAge: 10 * 60 * 1000
    }
  })
)

// session要跨域
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
  })
)

// 在後端設session
app.post('/member/signin', function (req, res) {
  console.log(req.body.memberId)
  console.log(req.body.password)
  let sql = 'select * from member where userId=? and password=?'
  conn.query(
    sql,
    [req.body.memberId, req.body.password],
    function (err, result) {
      if (err) console.log(err)
      else if (result[0]) {
        req.session.user = result
        res.send(result[0])
      } else res.send('')
    }
  )
})

// 把session送去前端
app.get('/member/signin', (req, res) => {
  // console.log(req.session)
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user })
  } else {
    res.send({ loggedIn: false })
  }
})

// 登出
app.get('/logout', function (req, res) {
  req.session.destroy() //刪除session
  res.send('登出成功')
})

//商品類別
app.get('/category/:category', function (req, res) {
  let test = req.params.category
  conn.query(
    'SELECT * FROM `product` AS p join category AS c ON p.categoryId= c.categoryId WHERE c.categoryName = ?',
    [test],
    function (err, result) {
      res.send(result)
    }
  )
})

// 商品
app.get('/product/:product_id', function (req, res) {
  let para = req.params.product_id
  conn.query(
    'SELECT * FROM `product` WHERE productId = ?',
    [para],
    function (err, result) {
      res.send(result)
    }
  )
})

//品牌
app.get('/brand/:brand', function (req, res) {
  let test = req.params.brand
  conn.query(
    'SELECT DISTINCT brandName,categoryName FROM brandcat AS b join category as c on b.categoryId=c.categoryId join brand as bb ON bb.brandId=b.brandId where categoryName=?',
    [test],
    function (err, result) {
      res.send(result)
    }
  )
})
//genders
app.get('/genders/:cat', function (req, res) {
  let test = req.params.cat
  conn.query(
    `SELECT categoryName,detailTitleDescription,detailId,categoryDetailDescription,categorydetailId FROM categorydetail AS cd JOIN category AS c ON c.categoryId= cd.categoryId JOIN detailtitle AS dt ON dt.detailTitleId= cd.detailTitleId WHERE categoryName=? AND detailTitleDescription = 'Genders'`,
    [test],
    function (err, result) {
      res.send(result)
    }
  )
})

//types
app.get('/types/:cat', function (req, res) {
  let test = req.params.cat
  conn.query(
    `SELECT categoryName,detailTitleDescription,detailId,categoryDetailDescription,categorydetailId FROM categorydetail AS cd JOIN category AS c ON c.categoryId= cd.categoryId JOIN detailtitle AS dt ON dt.detailTitleId= cd.detailTitleId WHERE categoryName=? AND (detailTitleDescription = 'Types' OR detailTitleDescription = 'Seasons' OR detailTitleDescription = 'Years')`,
    [test],
    function (err, result) {
      res.send(result)
    }
  )
})

//sizes
app.get('/sizes/:cat', function (req, res) {
  let test = req.params.cat
  conn.query(
    `SELECT categoryName,detailTitleDescription,detailId,categoryDetailDescription,categorydetailId FROM categorydetail AS cd JOIN category AS c ON c.categoryId= cd.categoryId JOIN detailtitle AS dt ON dt.detailTitleId= cd.detailTitleId   WHERE categoryName=? AND (detailTitleDescription = 'Sizes' OR detailTitleDescription = 'Colors')`,
    [test],
    function (err, result) {
      res.send(result)
    }
  )
})
//filter
app.get('/filter/:filter', function (req, res) {
  let test = req.params.filter
  let sql = `SELECT * FROM product WHERE bagSexId IN ${test} OR bagTypeId IN ${test} OR bagColorId IN ${test} OR clothSexId IN ${test} OR clothSizeId IN ${test} OR clothSeasonId IN ${test} OR shoesSexId IN ${test} OR shoesSizeId IN ${test} OR  shoesYearId IN ${test} OR watchSexId IN ${test} OR watchTypeId IN ${test}`

  conn.query(sql, function (err, result) {
    res.send(result)
  })
})
//搜尋
// app.get('/search/:keyword', function (req, res) {
//   let test = req.params.keyword
//   let productsql = `
//   select productId,userId,productName,brandName,categoryName,bagSexDescription,bagtypeDescription,
//   bagColorDescription,clothSexDescription,clothSizeDescription,clothSeasonDescription,
//   shoesSexDescription,shoesSizeDescription,shoesYearDescription,watchSexDescription,
//   watchTypeDescription,productConditionDescription,productName,startPrice,perPrice,
//   directPrice,nowPrice,endTime,productDescription,productStatusDescription from product
//   inner join member on product.shopId = member.memberId
//   inner join brand on product.brandId = brand.brandId
//   inner join category on product.categoryId = category.categoryId
//   left outer join bagSex on product.bagSexId = bagSex.bagSexId
//   left outer join bagtype on product.bagTypeId = bagType.bagTypeId
//   left outer join bagColor on product.bagColorId = bagColor.bagColorId
//   left outer join clothSex on product.clothSexId = clothSex.clothSexId
//   left outer join clothSize on product.clothSizeId = clothSize.clothSizeId
//   left outer join clothSeason on product.clothSeasonId = clothSeason.clothSeasonId
//   left outer join shoesSex on product.shoesSexId = shoesSex.shoesSexId
//   left outer join shoesSize on product.shoesSizeId = shoesSize.shoesSizeId
//   left outer join shoesYear on product.shoesYearId = shoesYear.shoesYearId
//   left outer join watchSex on product.watchSexId = watchSex.watchSexId
//   left outer join watchType on product.watchTypeId = watchType.watchTypeId
//   inner join productCondition on product.productConditionId = productCondition.productConditionId
//   inner join productStatus on product.productStatusId = productStatus.productStatusId
//   `
//   let sql = `
//   ${productsql} where userId LIKE '%${test}%'union
//   ${productsql} where productName LIKE '%${test}%'union
//   ${productsql} where brandName LIKE '%${test}%'union
//   ${productsql} where categoryName LIKE '%${test}%'union
//   ${productsql} where bagSexDescription LIKE '%${test}%'union
//   ${productsql} where bagtypeDescription LIKE '%${test}%'union
//   ${productsql} where bagColorDescription LIKE '%${test}%'union
//   ${productsql} where clothSexDescription LIKE '%${test}%'union
//   ${productsql} where clothSizeDescription LIKE '%${test}%'union
//   ${productsql} where clothSeasonDescription LIKE '%${test}%'union
//   ${productsql} where shoesSexDescription LIKE '%${test}%'union
//   ${productsql} where shoesSizeDescription LIKE '%${test}%'union
//   ${productsql} where shoesYearDescription LIKE '%${test}%'union
//   ${productsql} where watchSexDescription LIKE '%${test}%'union
//   ${productsql} where watchTypeDescription LIKE '%${test}%'union
//   ${productsql} where productConditionDescription LIKE '%${test}%'union
//   ${productsql} where productDescription LIKE '%${test}%'
//   `
//   conn2.query(sql, function (err, result) {
//     res.send(result)
//     // res.send(test + 'ok')
//   })
// })

app.get('/search/:id', function (req, res) {
  let test = req.params.id
  let productsql2 = `
  select productId,userId,productName,brandName,categoryName,productConditionDescription,productName,startPrice,perPrice,
  directPrice,nowPrice,endTime,productDescription,productStatusDescription from product
  inner join member on product.shopId = member.memberId
  inner join brand on product.brandId = brand.brandId
  inner join category on product.categoryId = category.categoryId
  inner join productCondition on product.productConditionId = productCondition.productConditionId
  inner join productStatus on product.productStatusId = productStatus.productStatusId
  `
  let sql2 = `
  ${productsql2} where userId LIKE '%${test}%'  union
  ${productsql2} where productName LIKE '%${test}%'  union
  ${productsql2} where brandName LIKE '%${test}%'  union
  ${productsql2} where categoryName LIKE '%${test}%'  union
  ${productsql2} where productConditionDescription LIKE '%${test}%'  union
  ${productsql2} where productDescription LIKE '%${test}%'
  `
  conn.query(sql2, function (err, result) {
    console.log(result)
    res.send(result)
    // res.send('ok');
  })
})
//-----------------------------post方法------------------------
// app.post('/search',function(req,res){
//     let test = req.body.test
//     // console.log(test)
//     // res.send(JSON.stringify(test))
//     var mysql = require('mysql');
//     var conn = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database:"coolbid",
//         port: 8889
//     });
//     conn.query("select * from product where productId = ?",[test],function(err,result){
//         res.send(result)
//     })
// })
