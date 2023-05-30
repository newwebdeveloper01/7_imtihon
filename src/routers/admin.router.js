import { Router } from "express";
import controller from "../controllers/admin.controller.js"
import validate from "../middlewares/validate.js";
import checkToken from "../middlewares/check-token.js";

const router=Router();

router.get( '/posts' , controller.ADMIN);
router.post( '/login' , controller.LOGIN);
router.delete('/post/:id', controller.DELETE);
router.put('/post/:id' , controller.PUT);






export default router;