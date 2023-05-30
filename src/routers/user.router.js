import { Router } from "express";
import controller from "../controllers/admin.controller.js"
import validate from "../middlewares/validate.js";
import checkToken from "../middlewares/check-token.js";

const router=Router();

// router.get( '/posts' ,checkToken, controller.USERS)






export default router;