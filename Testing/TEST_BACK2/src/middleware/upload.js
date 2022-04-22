const util = require('util');
const multer = require('multer');

const maxSize = 2 + 1024 + 1024;

const storege = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/resources/static/assets/uploads')
  }, 
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  }
})

const uploadFile = multer({
  storage: storege,
  limit: {fileSize: maxSize}
}).single('file');

const uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;
