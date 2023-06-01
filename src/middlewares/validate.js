import {LoginSchema , PostSchema } from '../utils/validation.js';


export default (req , res  , next )=>{
     try {
        if ( req.url=='/login'  && req.method=='POST'){
           const {error}= LoginSchema.validate(req.body)
           if(error) throw Error(error)
        }
        if ( req.url=='/registor'  && req.method=='POST'){
            const {error}= PostSchema.validate( {avatar:req.files.avatar.name, ...req.body})
            if(error) throw Error(error)
         }
        next()
     } catch (error) {
        console.log(error);
        next(error)
        
     }
}