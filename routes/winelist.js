var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//GET FROM REGIONLIST
//GET BY REGIONID
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

router.get("/regionlist/", function(req, res, next) {
  
  db("SELECT * FROM regionlist;")
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

//TO DIFFERENCIATE FROM OTHER LIST
router.get("/regionlist/:id", function(req, res, next) {
  db(`SELECT * FROM regionlist WHERE id = ${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});



module.exports = router;
