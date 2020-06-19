// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE blog", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
//     var sql = "CREATE TABLE records (username TEXT,name VARCHAR(255), title TEXT, post TEXT)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// });

// function add(username,name,title,post){
//  var a = "INSERT INTO records (username,name,title,post) VALUES ?";
//   con.query(a, function (err, result) {
//     if (err) throw err;
//     var values=[username,name,title,post];
//     console.log("Your post has been submitted");
//   });
// }

// function update(name,text){

// var b = "UPDATE records SET post = ? WHERE username = ?;
//   con.query(b, function (err, result) {
//     if (err) throw err;
//     var ans=[text,name];
//     console.log("Your post has been updated");
//   });
// }

// function delete(name,text){

//   var d = "DELETE FROM records WHERE username=? AND title = ?";
//   var ans=[name,text];
//   con.query(d, function (err, result) {
//     if (err) throw err;
//     console.log("Your post has been deleted ");
//   });
// }

// function search(name,title){

//    var e= con.query("SELECT post FROM records WHERE username=? OR title=?", function (err, result, fields) {
//     if (err) throw err;
//     var ans=[name,title]
//     console.log(result);
//   });
//   }


