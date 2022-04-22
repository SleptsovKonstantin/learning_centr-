const user = [];

const save = (req, res) => {
  const body = req.body;
  user.push(body);
  res.send({ data: user });
};

module.exports = {
  save,
};
