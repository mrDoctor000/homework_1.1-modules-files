const fs = require('fs');
const readFile = (path, file) => {
  return new Promise((done, fail) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) {
        fail(err);
        return;
      }
      const readFile = {
        'name': file,
        'content': content
      }
      done(readFile);
    })
  })
}

const readDir = function(path) {
  return new Promise((done, fail) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        fail(err);
        return;
      }
      done(files);
    })

  });
}

const readAll = path => readDir(path)
  .then(files => Promise.all(files.map(file => readFile(path + file, file))))



module.exports = readAll;