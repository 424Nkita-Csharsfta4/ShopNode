const express = require('express')
const ejs = require('ejs')

const app = express();

app.use(express.static('public'));/*
                                 экспресс, чтобы использовать общедоступный
                                 общедоступная папка для доставки этой общедоступной папки для статического использования
                                 */
app.set('view engine','ejs');//Просмотр файла через движок
                             //ejs формат просмотра файла 



app.listen(3000);

app.get('/',function(req,res){
    res.render('pages/index');//Файл указывать без расширения
})