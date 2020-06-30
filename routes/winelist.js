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


router.get("/winelist-with-region", function(req,res,next){
  db("select winelist.wine_name as Wine, winelist.wine_category as Category, winelist.winery as Winery, winelist.grape as Grape, winelist.image as Image, winelist.price as Price, regionlist.wine_region as Region, regionlist.region_description as RegionDescription, regionlist.region_image as RegionImage, winelist.ID as ID from winelist INNER JOIN regionlist ON winelist.regionlist_id=regionlist.ID;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


module.exports = router;
