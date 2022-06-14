var express = require("express");
var router = express.Router();
var axios = require("../public/javascripts/request");

/* GET emojis. */
router.get("/emojis", function (req, res, next) {
  axios({ method: "get", url: "https://api.github.com/emojis" })
    .then((response) => {
      res.render("github/emojis", {
        title: "Github Emojis",
        emojis: response.data,
        apiLink: "https://api.github.com/emojis",
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
