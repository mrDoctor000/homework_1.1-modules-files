const fs = require('fs');

const read = (file) => {

  const conf = {
    encoding: 'utf8'
  };
  return new Promise((done, fail) => {
    fs.readFile(file, conf, (err, content) => {
      if (err) {
        fail(err);
      } else {
        done(content);
      }
    });
  });
};

const write = (file, data) => {
  const conf = {
    encoding: 'utf8'
  };
  return new Promise((done, fail) => {
    fs.writeFile(file, data, conf, (err) => {
      if (err) {
        fail(err);
      } else {
        done(file);
      }
    });
  });
};

module.exports = {
  read,
  write
};