const uploadFile = require("../middleware/upload");
const fs = require("fs");

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file === undefined) {
      return res.status(400).send("Need file");
    }
    res.send(`Upload the file successfully ${req.file.originname}`);
  } catch (err) {
    res.status(500).send("Error upload file");
  }
};

const appendFile = (req, res) => {
  const { fileName, text } = req.body;
  if (fileName && text) {
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
    fs.appendFile(directoryPath + fileName, text, (err) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(`File writing completed.`);
      }
    });
  } else {
    res.send(`Сheck req.`);
  }
};

const deleteFile = (req, res) => {
  const fileName = req.params.name;
  if (fileName) {
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
    fs.unlink(directoryPath + fileName, (err) => {
      if (err) {
        return res.status(500).send(`Error =>${err}`);
      } else {
        res.send(`File delete!`);
      }
    });
  } else {
    res.send(`Сheck params.`);
  }
};

module.exports = {
  upload,
  appendFile,
  deleteFile,
};
