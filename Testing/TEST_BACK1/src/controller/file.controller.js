const jwt = require("jsonwebtoken");

const user = [];
console.log("user===>>>", user);

const registration = (req, res) => {
  const { login, password } = req.body;
  const token = jwt.sign({ password }, login);
  user.push(token);
  res.send({ data: token });
};
const autorization = (req, res) => {
  const { token } = req.headers;
  jwt.verify(token, "shhhhh", (err, decoded) => {
    if (err) console.log("err", err);
    console.log("decoded", decoded);
    res.send("work");
  });
};

module.exports = {
  registration,
  autorization,
};
