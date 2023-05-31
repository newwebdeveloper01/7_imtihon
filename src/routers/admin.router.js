import { Router } from "express";
import controller from "../controllers/admin.controller.js"
import validate from "../middlewares/validate.js";
import checkToken from "../middlewares/check-token.js";

const router=Router();

router.get( '/posts' ,checkToken, controller.ADMIN);
router.post( '/login' , checkToken,validate, controller.LOGIN);
router.delete('/post/:id',checkToken, controller.DELETE);
router.put('/post/:id' ,checkToken, controller.PUT);






export default router;