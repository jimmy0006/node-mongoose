const express = require("express")
const app = express();
const morgan=require("morgan")
const connect= require('./schemas');
const usersRouter = require('./router/users');
const indexRouter = require('./router')
const commentRouter = require('./router/comments');

app.set('port',process.env.PORT||3000);

//morgan 설정
app.use(morgan('dev'));//로그 보기

app.use(express.urlencoded({extended:false}))

connect();
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/comments',commentRouter);

app.use('*',(req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    res.send("라우터가 없습니다.")
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중')
})
