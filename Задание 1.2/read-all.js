const fs = require('fs');
const readFile = (path) => {
  return new Promise((done, fail) => {
    fs.readFile(path + file, (err, content) => {
      if (err) fail(err);
      if (content === undefined) done();
      const readFile = {
        'name': file,
        'content': content.toString()
      }
      done(readFile);
    })
  })
}

const readDir = function(path) {
  return new Promise((done, fail) => {
    fs.readdir(path, (err, files) => {
      if (err) fail(err);
      done(files);
    })

  });
}

const readAll = path => readDir(path).then(files => Promise.all(files.forEach(file => readFile(path + file))))



module.exports = readAll;