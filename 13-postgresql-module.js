console.log('https://github.com/brianc/node-postgres');
console.log('sudo apt-get install libpq-dev');
console.log('npm install pg');

var pg = require('pg'); //native libpq bindings = `var pg = require('pg').native`
var conString = "tcp://postgres@localhost/postgres";

var client = new pg.Client(conString);
client.connect();

//queries are queued and executed one after another once the connection becomes available
client.query("CREATE TEMP TABLE beatles(name varchar(10), height integer, birthday timestamptz)");
client.query("INSERT INTO beatles(name, height, birthday) values($1, $2, $3)", ['Ringo', 67, new Date(1945, 11, 2)]);
client.query("INSERT INTO beatles(name, height, birthday) values($1, $2, $3)", ['John', 68, new Date(1944, 10, 13)]);

//queries can be executed either via text/parameter values passed as individual arguments
//or by passing an options object containing text, (optional) parameter values, and (optional) query name
client.query({
  name: 'insert beatle',
  text: "INSERT INTO beatles(name, height, birthday) values($1, $2, $3)",
  values: ['George', 70, new Date(1946, 02, 14)]
});

//subsequent queries with the same name will be executed without re-parsing the query plan by postgres
client.query({
  name: 'insert beatle',
  values: ['Paul', 63, new Date(1945, 04, 03)]
});
var query = client.query("SELECT * FROM beatles WHERE name = $1", ['Ringo']);

//can stream row results back 1 at a time
query.on('row', function(row) {
  console.log(row);
  console.log("Beatle name: %s", row.name); //Beatle name: John
  console.log("Beatle birth year: %d", row.birthday.getYear()); //dates are returned as javascript dates
  console.log("Beatle height: %d' %d\"", Math.floor(row.height/12), row.height%12); //integers are returned as javascript ints
});

//fired after last row is emitted
query.on('end', function() {
  client.end();
});