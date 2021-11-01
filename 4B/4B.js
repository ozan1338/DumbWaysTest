require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mysql = require('mysql')

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'webcoursedb'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connect establish');
    }
});

app.get("/", (req,res)=>{
    res.render('4B')
})

app.get("/home", (req,res)=>{
    connection.query('select * from course', (err, rows)=>{
        if(err){
            console.log(err);
            res.render('home',{data: ''})
        }else{
            res.render('home',{data: rows})
        }
    })
})

app.get("/author", (req,res)=>{
    res.render("author",{
        id: '',
        name: ''
    });
});

app.get("/course", (req,res)=>{
    res.render("course",{
        id: '',
        name: '',
        thumbnail: '',
        id_author: '',
        duration: '',
        description: '',
    })
});

app.get("/content", (req,res)=>{
    res.render("content", {
        id: '',
        name: '',
        video_link: '',
        type: '',
        id_course: '',
    })
});

app.post("/content", (req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let video_link = req.body.video_link;
    let type = req.body.type;
    let id_course = req.body.id_course;
    
    let formData={
        id: id,
        name: name,
        video_link: video_link,
        type: type,
        id_course: id_course,
    }

    connection.query('insert into content set?', formData, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("data berhasil disimpan");
            res.redirect("/");
            console.log(result);
        }
    })
})

app.post("/course", (req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let thumbnail = req.body.thumbnail;
    let id_author = req.body.id_author;
    let duration = req.body.duration;
    let description = req.body.description;

    let formData = {
        id: id,
        name: name,
        thumbnail: thumbnail,
        id_author: id_author,
        duration: duration,
        description: description,
    }

    connection.query('insert into course set?', formData, (err,result)=>{
        if(err){
            console.log(err);
        }else{
             console.log("data berhasil disimpan");
            res.redirect("/");
         }
     });
    
});

app.post("/author", (req,res)=>{
    let name = req.body.name;
    let id = req.body.id;
    let errors  = false;
    
    let formData = {
        id: id,
        name: name
    }

    connection.query('insert into author set?', formData, (err,result)=>{
        if(err){
            console.log(err);

        }else{
            console.log("data berhasil disimpan");
            res.redirect("/");
        }
    });
    
})

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
})