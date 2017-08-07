const readAll = require('./read-all');

function show(file) {
  console.log('-'.repeat(10));
  console.log(`Содержимое файлы ${file.name}:`);
  console.log(file.content);
  console.log('-'.repeat(10));
}

readAll('./logs/')
  .then(files => files.forEach(file => file.then(show)))
  .catch(err => console.error(err));
/*
readAll('./logs/')
  .then(file => Promise.all(file))
  .then(results => results.forEach(show))
  .catch(err => console.error(err));*/