import jwt from "../utils/jwt.js"



export default (req , res , next)=>{
    try {
        
        const {token }=req.headers
        if(!token){
            throw new Error('token kirit ')
        }
        const {userId}=jwt.verify(token)
        next();

    } catch (error) {
        next(error)
    }
}