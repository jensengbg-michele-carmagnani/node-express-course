
const express = require('express');
const app = express();


const mochUserData=[
    {name:'Marck'};
    {name:'Jill'}
]
app.get('/user', function(req,res){
    res.json({
        success: true,
        message:'succefully got users. Nice',
        users:mockUserData
    })
})
app.listen(8000,function(){
    console.log('Server is running')
})