const express = require('express');
const sendMail = require('./sendMail')
// const cors = require('cors');

const app = express();
const PORT = 8080;
const path = require('path');


app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, 'Views', 'index.html'));
});

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.post("/email", (req, res) =>{
    const { email, subject, message } = req.body;

    sendMail(email, subject, message, function(err, data) {
        if(err){
            res.status(500).json({message: 'Internal Error !'})
        }else{
            res.status(200).json({message: 'Email send...'})
        }
    })
    res.json({message: "hello message reseived !!!"});
});

app.listen(PORT, ()=> console.log('server is listening to 8080'))


