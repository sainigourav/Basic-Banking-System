// ------------Required Packages-------
var express = require("express");
var app = express();
var body_parser = require("body-parser");
var mongodb = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

// --------DB connection-------
var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
mongodb.connect(url, function (err, db) {
  if (err) {
    throw err;
  }
});

var DBname = "BankSystem";

// ----------------MiddleWare------------
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.listen(8000, () => {
  console.log("server is running");
});


// ----------Route Handling----------


// -------GET requests -------
app.get("/allcustomer", function (req, res) {
      mongodb.connect(url, function (err, db) {
        var select = db.db(DBname);
        select
          .collection("AllCustomer")
          .find()
          .toArray(function (error, resp) {
            if (error) {
              throw error;
            } else {
              data = resp;
            
              res.send(data);
              db.close();
            }
          });
      });
    });

    app.get("/alltransaction", function (req, res) {
        mongodb.connect(url, function (err, db) {
          var select = db.db(DBname);
          select
            .collection("AllTransaction")
            .find()
            .toArray(function (error, resp) {
              if (error) {
                throw error;
              } else {
                data = resp;
                res.send(data);
                db.close();
              }
            });
        });
      });


      app.get("/mytransaction", function (req, res) {
        mongodb.connect(url, function (err, db) {
          var select = db.db(DBname);
          select
            .collection("AllCustomer")
            .find()
            .toArray(function (error, resp) {
              if (error) {
                throw error;
              } else {
                data = resp;
              
                res.send(data);
                db.close();
              }
            });
        });
      });


// -------POST requests -------

      app.post("/alltransaction", function (req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var tranAmount = req.body.tranAmount;
        var date = req.body.date;
        var time = req.body.time;
        var obj = {name, email, tranAmount, date, time};
        databaseInsert("AllTransaction", obj);
      });


      app.post("/mytransaction", function (req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var tranAmount = req.body.tranAmount;
        var date = req.body.date;
        var time = req.body.time;
	    var id= req.body.id;
          mongodb.connect(url, function (err, db) {
            var select = db.db(DBname);
            select.collection("AllCustomer").updateOne({"_id":ObjectId(id)},{$push: {"mytransaction":{name, email, tranAmount, date, time}
			}} ,function (error, res) {
              if (error) {
                throw error;
              } else {
                db.close();
              }
            });
          });
          res.send("success");
        });


// ------------function for insert into DB---------
function databaseInsert(collect, obj) {
  mongodb.connect(url, function (err, db) {
    var select = db.db(DBname);
    select.collection(collect).insertOne(obj, function (error, res) {
      if (error) {
        throw error;
      } else {
        db.close();
      }
    });
  });
}
    

