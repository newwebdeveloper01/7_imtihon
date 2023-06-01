import { read, write } from "../utils/model.js";
import jwt from "../utils/jwt.js";
import { resolve } from "path";
import { BadRequestError, InternalServerError } from "../utils/error.js";
import { query } from "express";
// import upload from "../utils/multer.js";

const GET = (req, res, next) => {
  try {
    const postData = read("post_deploy");
    const sorov=Object.keys(req.query);
    const {transfer_day ,  username , post_name , post_type }=req.query;
    let filterData={}
    if(sorov==0){
      
    return  res.status(200).json({
      status: 200,
      message: "zo'r",
      data: postData
    });
    
    }
    else if (transfer_day){
      
       filterData=postData.filter(post=>post.transfer_day==transfer_day);
    }
    else if (username){
      
      filterData=postData.filter(post=>post.username.toLowerCase()==username.toLowerCase());
   }
   else if (post_name){
      
    filterData=postData.filter(post=>post.post_name.toLowerCase()==post_name.toLowerCase());
 }
  else if (post_type){
      
  filterData=postData.filter(post=>post.post_type.toLowerCase()==post_type.toLowerCase());
}
    
    

    



return   res.status(200).json({
      status: 200,
      message: "zo'r",
      data: filterData
    });
    
    
    


    
  } catch (error) {
    return next(error);
  }
};


const POST = (req, res, next) => {
  console.log(req.body.post_name);
  const image = req.file.filename;
  const post = read("post");
  const {
    post_name,
    username,
    telfon_number,
    tashkilotchi,
    catigories,
    transfer_day,
    transfer_time,
    post_type
  } = req.body;
  const newPostData = {
    post_id: post.at(-1)?.post_id + 1 || 1,
    post_name,
    username,
    telfon_number,
    tashkilotchi,
    catigories,
    transfer_day,
    transfer_time,
    image,
    status: false,
    post_type
  };

  post.push(newPostData);
  write('post',post)
  console.log(req.body);

  res.send("uplouds");
};



export default {
  GET,
  POST
};
