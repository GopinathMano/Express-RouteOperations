const route = require("express").Router();

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
];

// CRUD operations : route operations

// read /post
route.get("/", (req, res, next) => {
  console.log("/post GET method is called");
  //   query parameters
  console.log(req.query);
  //    find DB
  res.send(posts);
});

// POST /post
route.post("/", (req, res, next) => {
  console.log("/post Post method is called");
  console.log(req.body);
  //   DB . insertOne()
  res.send({ ...req.body, id: 101 });
});

// PUT /post
route.put("/:id", (req, res, next) => {
  console.log("/post PUT method is called");
  console.log(req.params);
  console.log(req.body);
  //   DB findoneAndUpdate();
  res.send({ ...req.body, id: req.params.id });
});

// Delete /post
route.delete("/:id", (req, res, next) => {
  console.log("/post DELETE method is called");
  console.log(req.params);
  res.end();
});

module.exports = route;
