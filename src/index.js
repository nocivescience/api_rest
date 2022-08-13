const express=require('express');
const morgan=require('morgan');
const app=express();
// settings
app.set('port',process.env.PORT||3000)
// midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended=false}));
app.use(express.json());
// routes