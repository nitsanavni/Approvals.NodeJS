'use strict';

var pathUtil = require('path');

class Namer {

  private path: string;
  private name: string;

  constructor(path: string, name: string) {
    path = path || '';
    name = name || '';

    this.path = path;
    this.name = name[name.length - 1] === '.' ? name.substring(0, name.length - 1) : name;
  }

  pathCreator(type: string, ext: string) {
    ext = ext || 'txt';
    var cleanedExt = ext[0] === '.' ? ext.substring(1) : ext;
    return pathUtil.join(this.path, (this.name + "." + type + "." + cleanedExt));
  }

  getReceivedFile(ext: string) {
    return this.pathCreator("received", ext);
  }

  getApprovedFile(ext: string) {
    return this.pathCreator("approved", ext);
  }

}

module.exports = Namer;