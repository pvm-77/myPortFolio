const http = require('http');
const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();


// set path for [public] folder
app.use(express.static(path.join(__dirname, '../public')));
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
// set views path and view engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
// set hbs partials path
hbs.registerPartials(partialsPath);


// home page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
       
    });
}
);
// about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
       
    });
}
);
// contact page
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
        
    });
}
);

app.get('/projects',(req,res)=>{
    res.render('projects',{
        title:'Projects'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
}
);

