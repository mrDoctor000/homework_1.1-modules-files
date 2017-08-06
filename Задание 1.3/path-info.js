const fs = require('fs');

const readFile = (path, callback) => {
  return fs.readFile(path, (err, content) => {
    if (err) callback(err, undefined);
    return content.toString();
  })
}

const readDir = (path, callback) => {
  return fs.readdir(path, (err, files) => {
    if (err) callback(err, undefined)
    const readDir = []
    files.forEach(file => {
      readDir.push(file);
    })
    return readDir;
  })
}

const pathInfo = (path, callback) => {
  fs.stat(path, (err, stats) => {
    if (err) callback(err, undefined);

    if (stats.isFile()) {
      callback(null, {
        'path': path,
        'type': 'file',
        'content': readFile(path, callback),
        'childs': undefined
      });
    }

    if (stats.isDirectory()) {
      callback(null, {
        'path': path,
        'type': 'directory',
        'content': undefined,
        'childs': readDir(path, callback)
      });
    }
  })
};



module.exports = pathInfo;