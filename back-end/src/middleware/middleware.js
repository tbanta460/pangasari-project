require('dotenv').config()
const jwt = require('jsonwebtoken');
const User = require('../models/user.js')
const { validationResult } = require('express-validator');

module.exports = async (req,res,next) => {
	const {userName} = req.body
	// const errors = validationResult(req);
	let token = req.headers['authorization'];
	token = token.split(' ')[1];

	// await jwt.verify(token, process.env.JWT_SECRET,{audience: userName}, (err, user) => {
	// 	console.log(err.message === `jwt audience invalid. expected: ${userName}`)
	// 	if(user){
	// 		req.user = user
	// 		next();
	// 	} else if( err.message === 'jwt expired'){
 //            return res.json({
 //                message: "Token expired",
 //                success: false
 //            });
 //        } else if(err.message === `jwt audience invalid. expected: ${userName}`){
 //        	console.log('user invalid')
 //        	return res.json({
 //        		message: "User invalid",
 //        		err
 //        	})
 //        }else {
 //            return res.status(403).json({
 //                err,
 //                message: "User not authenticated"
 //            })
 //        }
	// })
	



	await jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
		if(user){
			User.findById(user.userId)
			.then(dataUser => {
				console.log(dataUser)
				req.user = dataUser;
				next();
			})
		} else if( err.message === 'jwt expired'){
            return res.json({
                message: "Token expired",
                success: false
            });
        } else {
            return res.status(403).json({
                err,
                message: "User not authenticated"
            })
        }
	})
}