import express from "express";
import userRouter from "./routers/user.router.js";
import morgan from "morgan";
import { accessLogStream } from "./config.js";
import errorHandler from "./middlewares/errorHandler.js";
import adminRouter from './routers/admin.router.js';

const PORT=5000

const app = express();



app.use(express.static("uploads"));
app.use(express.json());

app.use(morgan('combined' ,{skip: function (req, res) { return res.statusCode < 400 },
    stream: accessLogStream }))
app.use(userRouter); 
app.use(adminRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server ishlayabti shu ${PORT} postda ` ));
