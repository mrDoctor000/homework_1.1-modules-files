const fs = require('fs');


const readDir = function(path) {
  return new Promise((done, fail) => {
    const readDir = [];
    fs.readdir(path, (err, files) => {
      if (err) fail(err);
      files.forEach(file => {
        fs.readFile(path + file, (err, content) => {
          if (err) fail(err);
          if (content === undefined) return
          const readFile = {
            'name': file,
            'content': content.toString()
          }
          readDir.push(readFile);
        });

      })
      done(readDir);
    });
  });
}

module.exports = readDir;