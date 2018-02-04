const fs = require('fs');

const readFile = (path, callback) => {
  return fs.readFile(path, (err, content) => {
    if (err) return callback(err, undefined);
    callback(null, content.toString())
  })
}

const readDir = (path, callback) => {
  return fs.readdir(path, (err, files) => {
    if (err) return callback(err, undefined);
    callback(null, files);
  })
}

const pathInfo = (path, callback) => {
  fs.stat(path, (err, stats) => {
    if (err) return callback(err, undefined);

    if (stats.isFile()) {
      readFile(path, (err, content) => {
        if (err) return callback(err, undefined);
        callback(null, {
          'path': path,
          'type': 'file',
          'content': content,
          'childs': undefined
        });
      })

    }

    if (stats.isDirectory()) {
      readDir(path, (err, files) => {
        if (err) return callback(err, undefined);
        callback(null, {
          'path': path,
          'type': 'directory',
          'content': undefined,
          'childs': files
        });
      })

    }
  })
};



module.exports = pathInfo;