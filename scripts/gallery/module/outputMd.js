const fs = require('fs-extra');
const path = require('path');
const C = require('./const');

module.exports = function outputMd(mdName, content) {
  const base = path.resolve('../../../');
  const galleryPath = `${base}${C.OUTPUT_BASE}`;
  const mdPath = `${galleryPath}${mdName}.md`;
  console.log('mdPath', mdPath);
  fs.outputFileSync(mdPath, content);
}
