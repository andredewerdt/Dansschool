var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'andre',
//   password : '13acfcaeda',
//   database : 'dans201601',
//   port     : '3307'
// });

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'andre',
  password : '13acfcaeda',
  database : 'dans201601',
  port     : '3307'
});

pool.getConnection(function(err, connection) {
  // Use the connection
  connection.query('SELECT naam,partner FROM naw limit 1', function (error, results, fields) {
    // And done with the connection.
    //console.log(results);
    //alert(results);
     for (el in results) {
       document.write(results[el].naam+'<br/>');
       document.write(results[el].partner+'<br />');
     }
    //document.write(results);
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});
// connection.connect()//win.showDevTools();
;
//
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

//connection.end();
