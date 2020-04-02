
import express from 'express';
const app = express();
import { json } from 'body-parser';
app.use(json());


const mochUserData=[
    {name:'Marck'},
    {name:'Jill'}
]
app.get('/user', function(req,res){
    res.json({
        success: true,
        message:'succefully got users. Nice',
        users:mockUserData
    })
})

// Colons are used as variables that ne viewed in the params 
app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login',function(req,res){
	// Typically passwords are encrypted using something like bcrypt before sending to database
	const username=req.body.username;
	const password=req.body.password;

	// This should come from the database
	const mockUsername="billyTheKid";
    const mockPassword="superSecret";
    
    if (username===mockUsername && password===mockPassword){
		// In practice, use JSON web token sign method here to make an encrypted token
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password and username do not match'
		})
	}

})


console.log(app);
app.listen(8000,function(){
    console.log('Server is running')
})