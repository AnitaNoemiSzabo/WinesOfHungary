var express = require("express");
var router = express.Router();
const db = require("../model/helper");

function getItems(req, res) {
  db("SELECT * FROM winelist ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}


router.get("/", function(req, res, next) {
  
  db("SELECT * FROM winelist;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


router.get("/:id", function(req, res, next) {
  db(`SELECT * FROM winelist WHERE id = ${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


module.exports = router;
