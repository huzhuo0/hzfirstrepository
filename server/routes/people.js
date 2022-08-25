var express = require('express');
var router = express.Router();
const querySql = require('../db/index')
const {upload}=require('../utils/index')

/* 查找人员列表 */
router.get('/peopleList',(req,res,next)=>{
  let sql = 'SELECT * FROM myproject.hzw_people_list; '
  querySql(sql).then(resd=>{
    res.send({
      status:200,
      data:resd
    })
  })
})
/* 增加人员数据 */
router.post('/addPeopleData',(req,res,next)=>{
  let {name,sex,ideal,work,hobby,age,peosonalImg} = req.body
  let sql = 'insert into hzw_people_list(name,sex,ideal,work,hobby,age,peosonalImg) values(?,?,?,?,?,?,?)'
  querySql(sql,[name,sex,ideal,work,hobby,age,peosonalImg]).then(resd=>{
    res.send({status:200,msg:'新增成功'})
  })
})
/* 编辑人员数据 */
router.post('/editPeopleData',(req,res,next)=>{
  let {name,sex,ideal,work,hobby,age,id,peosonalImg} = req.body
  let sql = 'update hzw_people_list set name = ?,sex = ?,ideal = ?,work = ?,hobby = ?,age = ?,peosonalImg = ? where id = ?'
  querySql(sql,[name,sex,ideal,work,hobby,age,peosonalImg,id]).then(resd=>{
    // console.log(resd,'333223')
    res.send({status:200,msg:'编辑成功'})
  })
})
/* 删除人员数据 */
router.post('/deletePeople',(req,res,next)=>{
  let {id} = req.body
  let sql = 'delete from hzw_people_list where id = ?'
  console.log(id,'删除的id')
  querySql(sql,[id]).then(resd=>{
    console.log(resd,'333223')
    res.send({status:200,msg:'删除成功'})
  })
})
/* 上传人员头像 */
router.post('/upload',upload.single('peosonalImg'),(req,res,next)=>{
  /* 上传文件时数据是在req.file里面的 */
  console.log(req.file,'556')
  let imgPath = req.file.path.split('public')[1]
  let imgUrl = 'http://127.0.0.1:3000'+imgPath.replace(/\\/g,'/')
  res.send({status:200,msg:'上传成功',data:imgUrl})
})



module.exports = router;