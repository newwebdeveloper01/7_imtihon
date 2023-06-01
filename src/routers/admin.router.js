import { Router } from "express";
import controller from "../controllers/admin.controller.js"
import validate from "../middlewares/validate.js";
import checkToken from "../middlewares/check-token.js";

const router=Router();

router.get( '/admin/posts' ,checkToken, controller.ADMIN);
router.post( '/admin/login' , validate, controller.LOGIN);
router.delete('/admin/post/:id',checkToken, controller.DELETE);
router.put('/admin/post/:id' ,checkToken, controller.PUT);






export default router;