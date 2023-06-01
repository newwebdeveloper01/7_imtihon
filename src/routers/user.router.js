import { Router } from "express";
import controller from "../controllers/user.controller.js"
import validate from "../middlewares/validate.js";
import checkToken from "../middlewares/check-token.js";
import upload from "../utils/multer.js";

const router=Router();

router.get( '/user' , controller.GET);
router.post('/user/post' ,upload.single('image') , controller.POST);







export default router;