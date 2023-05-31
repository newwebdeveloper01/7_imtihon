import { read, write } from "../utils/model.js";
import jwt from "../utils/jwt.js";
import { resolve } from "path";
import { BadRequestError, InternalServerError } from "../utils/error.js";
// import upload from "../utils/multer.js";

const GET = (req, res, next) => {
  try {
    if(req.query){
      const postData = read("post_deploy");
    }
    

    res.status(200).json({
      status: 200,
      message: "zo'r",
      data: postData
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
    transfer_time
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
    status: false
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
