import multer from "multer";
import  {resolve , extname} from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, resolve('uploads'))
    },
    
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+extname(file.originalname))
    }
  })
  
  const upload = multer({ storage:storage  });

  export default upload;