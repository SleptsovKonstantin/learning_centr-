app.patch("/updateBook", (req, res) => {
  const body = req.body;
  const { id, num } = body;
  const create = (num) => {
    let x = [];
    for (let i = 0; i < num; i++) {
      let j = Math.random() * 1000;
      let y = Math.round(j);
      if (y % 2 == 0) {
        x[i] = Math.round(j);
      } else {
        i--;
      }
    }
    return x;
  };
  const arr = create(num);
  body.num = arr;
  Bookbase.updateOne({ _id: id }, body).then(() => {
    Bookbase.find().then((result) => {
      res.send({ data: result });
    });
  });
});
