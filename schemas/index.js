const mongoose = require('mongoose');

const connect = ()=>{
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug',true);
    }
    mongoose.connect('mongodb://',{
        dbName:'node.js',
        useNewUrlParser:true,
        useCreateIndex:true
    },(error)=>{
        if(error){
            console.log('몽고디비 연결 에러',error);
        }
    })
}