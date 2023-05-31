import { read, write } from "../utils/model.js";
import jwt from "../utils/jwt.js";
import { resolve } from "path";
import { unlinkSync } from "fs";
import { BadRequestError, InternalServerError } from "../utils/error.js";

const ADMIN = (req, res, next) => {
  try {
    const postData = read("post").filter((user) => delete user.password);

    res.status(200).json({
      status: 200,
      message: "zo'r",
      data: postData,
    });
  } catch (error) {
    return next(error);
  }
};

const LOGIN = (req, res, next) => {
  try {
    const userData = read("admin");
    const { username, password } = req.body;
    const userFind = userData.find(
      (user) => user.username == username && user.password == password
    );
    if (!userFind) {
      return next(new BadRequestError(400, "password yoki username xato"));
    }
    delete userFind.password;
    res.status(200).json({
      status: 200,
      message: "zo'r",
      access__token: jwt.sign({
        userID: userFind.userId,
      }),
      data: userFind,
    });
  } catch (error) {
    return next(new InternalServerError(500, "InternaiServerError"));
  }
};
const PUT = (req, res, next) => {
  try {
    const post = read("post");
    const post_deploy = read("post_deploy");
    const post_id = req.params.id;
    const postIndex = post.findIndex((data) => data.post_id == post_id);
    if (!postIndex) {
      throw new Error("no such id found");
    }
    post[postIndex].status = true;
    const newPost = post[postIndex];
    newPost.post_id= post_deploy.at(-1).post_id + 1 || 1;
    post.splice(postIndex, 1);
    post_deploy.push(newPost);
    write("post_deploy", post_deploy);
    write("post", post);

    

    res.status(204).json({
      status: 204,
      message: "post o'chirildi",
    });
  } catch (error) {
    return next(new InternalServerError(500, "InternaiServerError"));
  }
};

const DELETE = (req, res, next) => {
  try {
    const post = read("post");
    const post_id = req.params.id;
    const deleteId = post.findIndex((data) => data.post_id == post_id);
    console.log(deleteId);
    if (deleteId == -1) {
      throw new Error("no such id found");
    }

    const [deletePost]= post.splice(deleteId, 1);
    unlinkSync(resolve('uploads' , deletePost.image))
    write("post", post);
    res.status(204).json({
      status: 204,
      message: "post o'chirildi",
    });
  } catch (Error) {
    return next(new InternalServerError(500, "InternaiServerError"));
  }
};

export default {
  ADMIN,
  LOGIN,
  DELETE,
  PUT,
};
