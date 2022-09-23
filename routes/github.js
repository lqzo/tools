const fs = require("fs");
const express = require("express");
const router = express.Router();
const axios = require("../public/javascripts/request");

/* GET emojis page */
router.get("/emojis", function (req, res, next) {
  fs.readFile(
    "./public/files/emojis.json",
    { encoding: "utf-8" },
    (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.render("github/emojis", {
          title: "Github Emojis",
          emojis: JSON.parse(data),
          apiLink: "https://api.github.com/emojis",
        });
      }
    }
  );
});

/* Update emojis */
router.put("/emojis", function (req, res, next) {
  axios({ method: "get", url: "https://api.github.com/emojis" })
    .then((response) => {
      const data = response.data;
      const list = Object.keys(data).map((k) => {
        return { name: k, url: data[k] };
      });
      fs.writeFile(
        "./public/files/emojis.json",
        JSON.stringify(list),
        (err) => {
          if (err) res.json({ status: 200, message: "Fail !" });
          else {
            res.json({ status: 200, message: "Success !" });
          }
        }
      );
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

module.exports = router;
