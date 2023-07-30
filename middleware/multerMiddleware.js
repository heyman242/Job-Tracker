import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //set directory where to uploaded the file
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    // set the name of the uploaded file
    const filename = file.originalname;
    cb(null, filename);
  },
});

const upload = multer({ storage });

export default upload;
