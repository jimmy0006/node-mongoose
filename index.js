const express = require("express")
const app = express();
const morgan=require("morgan")

app.set('port',process.env.PORT||3000);

//morgan 설정
app.use(morgan('dev'));//로그 보기

// app.use('/db',mongodb);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    res.send("라우터가 없습니다.")
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중')
})
