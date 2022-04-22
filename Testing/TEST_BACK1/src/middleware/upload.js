const patternLog = /^[a-zA-Z0-9]+$/; // латиница
const patternPas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/; //латиница и цифры

const middleWare = (req, res, next) => {
  const body = req.body;
  const { login, password } = body;
  if (
    patternLog.test(login) &&
    login.length > 6 &&
    patternPas.test(password) &&
    password.length > 8
  ) {
    next();
  } else {
    res.send(`Error, check correct user`);
  }
};

module.exports = middleWare;
