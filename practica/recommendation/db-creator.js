const fs = require('fs');

var db = [];

var files = fs.readdirSync('./data');

for (var i = 0; i < files.length; i++) {
  db.push(JSON.parse(fs.readFileSync('./data/' + files[i], {encoding: 'utf8'})));
}

console.log(db);

fs.writeFile('./db.json', JSON.stringify(db));
