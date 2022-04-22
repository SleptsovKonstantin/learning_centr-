const uploadFile = require("../middleware/upload");
const fs = require("fs");

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file === undefined) {
      return res.status(400).send("need file");
    }
    res.send(`upload the file successfully ${req.file.originname}`);
  } catch (err) {
    res.status(500).send("error upload file");
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/";
  fs.readdir(directoryPath, (err, files) => {
    if (err) return res.status(500).send("error");
    let fileInfo = [];
    files.forEach((file) => {
      fileInfo.push({
        name: file,
        url: baseUrl + file,
      });
    });
    res.send(fileInfo);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) return res.status(500).send("error");
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
}; 
