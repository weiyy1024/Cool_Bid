var express = require('express')
var app = express()
const cors = require('cors')

app.use(express.json())
app.listen(3001)

var mysql = require('mysql')
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'UnicornglLen3550',
  database: 'coolbidLatest',
  port: 3306,
  multipleStatements: true
})
//-----------------------------------------------------
// 設置session
// app.use(
//   session({
//     key: 'user',
//     secret: 'secretKey',
//     // store: new FileStore(),
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       path: '/',
//       httpOnly: true,
//       secure: false,
//       maxAge: 10 * 60 * 1000
//     }
//   })
// )

// session要跨域
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
  })
)

// 送登入資料去前端
app.post('/member/signin', function (req, res) {
  let sql = 'select * from member where userId=? and password=?'
  conn.query(
    sql,
    [req.body.memberId, req.body.password],
    function (err, result) {
      if (err) console.log(err)
      else if (result[0]) {
        // req.session.user = result
        res.send(result[0])
      } else res.send('')
    }
  )
})

// 把session送去前端
// app.get('/member/signin', (req, res) => {
//   // console.log(req.session)
//   if (req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user })
//   } else {
//     res.send({ loggedIn: false })
//   }
// })

// 登出
// app.get('/logout', function (req, res) {
//   res.send('登出成功')
// })

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

// 讀取商品資料 & 出價紀錄
app.get('/product/:product_id', function (req, res) {
  let para = req.params.product_id

  conn.query(
    'SELECT * FROM `product` AS p join `productcondition` AS pc ON pc.productConditionId = p.productConditionId join `brand` AS b ON b.brandId = p.brandId join `category` AS c ON c.categoryId = p.categoryId join `member` AS m ON m.memberId = p.shopId join `shoplevel` AS sl ON sl.shopLevelId = m.shoplevelId WHERE productId = ?; SELECT `biddingHistoryId`, `bidprice`, `bidTime`, `userId`, `nickname` FROM `biddinghistory` AS bh join member AS m ON m.memberId = bh.memberId WHERE `productId` = ? ORDER BY bidprice DESC',
    [para, para],
    function (err, result) {
      res.send(result)
    }
  )
})

// 寫入目前價格
app.post('/product/:product_id', function (req, res, next) {
  let para = req.params.product_id
  let { id, isDirectBuy, directBidPrice, productStatusId } = req.body

  if (isDirectBuy) {
    conn.query(
      'UPDATE product SET nowPrice = ?, productStatusId = ? WHERE productId = ?',
      [directBidPrice, productStatusId, id],
      function (err, result) {
        res.send(result)
      }
    )
  } else if (directBidPrice) {
    conn.query(
      'UPDATE product SET nowPrice = ?, productStatusId = ? WHERE productId = ?',
      [directBidPrice, productStatusId, id],
      function (err, result) {
        console.log(result)
      }
    )
  }
  next()
})

// 寫入競標紀錄
app.post('/product/:product_id', function (req, res) {
  let para = req.params.product_id
  let { id, directBidPrice, memberId } = req.body

  conn.query(
    'INSERT INTO `biddinghistory`(`productId`, `memberId`, `bidprice`) VALUES (?, ?, ?)',
    [id, memberId, directBidPrice],
    function (err, result) {
      console.log(result)
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
    `SELECT categoryName,detailTitleDescription,detailId,categoryDetailDescription,categorydetailId FROM categorydetail AS cd JOIN category AS c ON c.categoryId= cd.categoryId JOIN detailtitle AS dt ON dt.detailTitleId= cd.detailTitleId WHERE categoryName=? AND (detailTitleDescription = 'Sizes' OR detailTitleDescription = 'Colors')`,
    [test],
    function (err, result) {
      res.send(result)
    }
  )
})
//filter
app.get('/filter/:filter', function (req, res) {
  let test = req.params.filter
  let sql = `SELECT * FROM product WHERE bagSexId IN ${test} OR bagTypeId IN ${test} OR bagColorId IN ${test} OR clothSexId IN ${test} OR clothSizeId IN ${test} OR clothSeasonId IN ${test} OR shoesSexId IN ${test} OR shoesSizeId IN ${test} OR shoesYearId IN ${test} OR watchSexId IN ${test} OR watchTypeId IN ${test}`

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

//search bar
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

//夏
app.get('/member/purchase', function (req, res) {
  let sql =
    'SELECT o.orderId, shopName, productName, orderTime, nowPrice, orderStatusBuyer, orderStatusDate FROM `order` as o join `product` as p on o.orderId = p.orderId join `member` as m on o.shopId = m.memberId join `orderstatusdetail` as osd on o.orderId = osd.orderId join `orderstatus` as os on osd.orderStatusId = os.orderStatusId'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

app.get('/BackStage/orders', function (req, res) {
  let sql =
    'SELECT o.orderId, userId, productName, orderTime, nowPrice, orderStatusSeller FROM `order` as o join `product` as p on o.orderId = p.orderId join `member` as m on o.buyerId = m.memberId join `orderstatusdetail` as osd on o.orderId = osd.orderId join `orderstatus` as os on osd.orderStatusId = os.orderStatusId'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

app.get('/BackStage/SellerPageHero', function (req, res) {
  let sql =
    'SELECT shopName, shopLevelDescription, (SELECT COUNT(*) FROM `wishshop` WHERE shopId = 1) as shopFans, (SELECT COUNT(*) FROM `product` WHERE shopId = 1) as productNumber, registerDate, shopDescription FROM `member` as m join `shoplevel` as s on m.shoplevelId = s.shopLevelId where memberId = 1'
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

// 撈使用者的收藏清單 20200507 Jou
app.post('/likeproduct', function (req, res) {
  conn.query(
    'select productId from wishproduct where memberId = ?',
    [req.body.memberId],
    function (err, result) {
      if (err) console.log(err)
      res.send(result)
    }
  )
})

// 收藏/取消收藏 20200507 Jou
app.post('/collectproduct', function (req, res) {
  if (req.body.collect == 'true') {
    conn.query(
      'insert into `wishproduct` (`memberId`, `productId`) values (?, ?)',
      [req.body.memberId, req.body.productId],
      function (err, result) {
        if (err) console.log(err)
        res.send('收藏成功')
      }
    )
  } else {
    conn.query(
      'delete from `wishproduct` where `memberId` = ? and `productId` = ? ',
      [req.body.memberId, req.body.productId],
      function (err, result) {
        if (err) console.log(err)
        res.send('取消收藏')
      }
    )
  }
})
//bidding cart 20200507 weiyy
app.get('/bidding/:memberId', function (req, res) {
  let test = req.params.memberId
  let sql = `SELECT DISTINCT productId,memberId FROM biddinghistory WHERE memberId=${test}`

  conn.query(sql, function (err, result) {
    res.send(result)
  })
})

//確認競標中商品 20200507 weiyy
app.get('/confirmStatus/:productId', function (req, res) {
  let test = req.params.productId
  let sql = `SELECT * FROM product WHERE productId IN ${test} AND productStatusId=4`

  conn.query(sql, function (err, result) {
    res.send(result)
  })
})

//得商店名稱
app.get('/shopName/:productId', function (req, res) {
  let test = req.params.productId
  let sql = `SELECT DISTINCT p.shopId,shopName FROM product AS p JOIN member AS m ON p.shopId=m.memberId WHERE productId IN ${test} AND productStatusId=4`

  conn.query(sql, function (err, result) {
    res.send(result)
  })
})

// Bidding homepage get popular products by weiwei
app.get('/getPopularProducts',function(req,res){
  let sql = `SELECT productId, COUNT('productId') FROM biddinghistory GROUP BY productId ORDER BY COUNT('productId') DESC limit 8`

  conn.query(sql,function(err,result){
    res.send(result)
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
//得目前我出的最高金額
// app.get('/myPrice/:productId', function (req, res) {
//   let test = req.params.productId
//   let sql = `SELECT bidprice FROM biddinghistory where memberId=5 AND bidTime IN (SELECT max(bidTime) FROM biddinghistory WHERE productId=${test} AND memberId=5  )`

//   conn.query(sql, function (err, result) {
//     res.send(result)
//   })
// })

//-----------------------------post方法------------------------
app.post('/myPrice', function (req, res) {
  let test1 = req.body.pId
  let test2 = req.body.mId
  // console.log(test1, test2)
  // res.send(JSON.stringify(test))
  let sql = `SELECT bidprice FROM biddinghistory where memberId=${test2} AND bidTime IN (SELECT max(bidTime) FROM biddinghistory WHERE productId=${test1} AND memberId=${test2}  )`
  conn.query(sql, function (err, result) {
    res.send(result)
  })
})
