const express = require('express');
const app = express();

app.get('/app.js', function(){
    console.log('Hello!')
})
app.listen(3000);